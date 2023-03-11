import { isDark } from "./../utils/themes/dark";
import * as echarts from "echarts/core";
import {
    BarChart,
    PieChart,
    type PieSeriesOption,
    // 系列类型的定义后缀都为 SeriesOption
    type BarSeriesOption,
    LineChart,
    type LineSeriesOption,
} from "echarts/charts";
import {
    TitleComponent,
    // 组件类型的定义后缀都为 ComponentOption
    type TitleComponentOption,
    TooltipComponent,
    type TooltipComponentOption,
    GridComponent,
    type GridComponentOption,
    // 数据集组件
    DatasetComponent,
    type DatasetComponentOption,
    // 内置数据转换器组件 (filter, sort)
    TransformComponent,
    LegendComponent,
    type LegendComponentOption,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import type { Ref, ComputedRef } from "vue";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | PieSeriesOption
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
    | LegendComponentOption
>;

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    PieChart,
    LineChart,
    LegendComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
]);

/**
 * Echarts hooks函数
 * @param options - 图表配置
 * @param renderFun - 图表渲染函数(例如：图表监听函数)
 * @description 按需引入图表组件，没注册的组件需要先引入
 */
export function useEcharts(
    options: Ref<ECOption> | ComputedRef<ECOption>,
    renderFun?: (chartInstance: echarts.ECharts) => void
) {
    const domRef = ref<HTMLElement | null>();

    const initialSize = { width: 0, height: 0 };
    const { width, height } = useElementSize(domRef, initialSize);

    let chart: echarts.ECharts | null = null;

    function canRender() {
        return initialSize.width > 0 && initialSize.height > 0;
    }

    function isRendered() {
        return Boolean(domRef.value && chart);
    }

    function update(updateOptions: ECOption) {
        if (isRendered()) {
            chart?.clear();
            chart!.setOption({
                ...updateOptions,
                backgroundColor: "transparent",
            });
        }
    }

    async function render() {
        if (domRef.value) {
            const chartTheme = isDark.value ? "dark" : "light";
            await nextTick();
            chart = echarts.init(domRef.value, chartTheme);
            if (renderFun) {
                renderFun(chart);
            }
            update(options.value);
        }
    }

    function resize() {
        chart?.resize();
    }

    function destroy() {
        chart?.dispose();
    }

    function updateTheme() {
        destroy();
        render();
    }

    const scope = effectScope();

    scope.run(() => {
        watch([width, height], ([newWidth, newHeight]) => {
            initialSize.width = newWidth;
            initialSize.height = newHeight;
            if (newWidth === 0 && newHeight === 0) {
                // 节点被删除 将chart置为空
                chart = null;
            }
            if (canRender()) {
                if (!isRendered()) {
                    render();
                } else {
                    resize();
                }
            }
        });

        watch(
            options,
            (newValue) => {
                update(newValue);
            },
            { deep: true }
        );

        watch(
            () => isDark.value,
            () => {
                updateTheme();
            }
        );
    });

    onScopeDispose(() => {
        destroy();
        scope.stop();
    });

    return {
        domRef,
    };
}
