<script setup lang="ts">
import { Refresh, Setting, Operation, Warning } from "@element-plus/icons-vue";
import type { CheckboxValueType } from "element-plus";
import sortable, { type SortableEvent } from "sortablejs";
import { cloneDeep } from "lodash-es";
interface User {
    name: string;
    address: string;
    startTime: string;
    endTime: string;
}
interface TabColumn {
    prop: string;
    label: string;
    width?: number;
    align?: string;
    type?: string;
}
const isStripe = ref<boolean>(true);
const isBorder = ref<boolean>(true);
const loading = ref<boolean>(false);
const isSize = ref<any>("default");
const tableColumns = ref<TabColumn[]>([
    {
        prop: "name",
        label: "姓名",
        width: 200,
        align: "center",
    },
    {
        prop: "address",
        label: "地址",
        align: "center",
    },
    {
        prop: "startTime",
        label: "开始时间",
        width: 200,
        align: "center",
    },
    {
        prop: "endTime",
        label: "结束时间",
        width: 200,
        align: "center",
    },
]);
const tableData = ref<User[]>([]);

const loadTableData = () => {
    loading.value = true;
    for (let i = 0; i < 100; i++) {
        tableData.value.push({
            name: "Sao Feng " + " 000" + (i + 1),
            address: "New York No. 1 Lake ParkNew York No. 1 Lake Park",
            startTime: "2016-05-01",
            endTime: "2016-05-02",
        });
    }
    setTimeout(() => {
        loading.value = false;
    }, 1000);
};
const setStripe = () => {
    isStripe.value = !isStripe.value;
};

const setBorder = () => {
    isBorder.value = !isBorder.value;
};
const setLoading = () => {
    loading.value = !loading.value;
};

const setSize = (command: string) => {
    console.log(command);
    isSize.value = command;
};

const checkAll = ref(true);
const checkOrder = ref<boolean>(true);
const checkSelect = ref<boolean>(false);
const isIndeterminate = ref(true);
const multipleSelection = ref<User[]>([]);
const tabColumn = tableColumns.value.map((item: TabColumn) => {
    return { key: item.prop, label: item.label };
});
const tabColumnArr = tabColumn.map((item) => {
    return item.label;
});
const checkedCities = ref<string[]>(tabColumnArr);

const handleCheckOrderChange = (val: CheckboxValueType) => {
    checkOrder.value = val as boolean;
};
const handleCheckSelectChange = (val: CheckboxValueType) => {
    checkSelect.value = val as boolean;
};
const tableColumnsRaw = cloneDeep(tableColumns.value);
const handleCheckAllChange = (val: CheckboxValueType) => {
    checkedCities.value = val ? tabColumnArr : [];
    tableColumns.value = tableColumnsRaw.filter((item: TabColumn) =>
        checkedCities.value.includes(item.label)
    );
    isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value: CheckboxValueType[]) => {
    console.log(value);
    const checkedCount = value.length;
    checkAll.value = checkedCount === tabColumn.length;
    tableColumns.value = tableColumnsRaw.filter((item: TabColumn) =>
        value.includes(item.label)
    );
    isIndeterminate.value =
        checkedCount > 0 && checkedCount < tabColumnArr.length;
};
const handleSelectionChange = (val: User[]) => {
    multipleSelection.value = val;
};
const reloadTable = () => {
    tableData.value = [];
    loadTableData();
};

const tableDraggle = () => {
    new sortable(
        document.querySelector(".el-table__body-wrapper tbody") as HTMLElement,
        {
            animation: 300,
            onEnd: (ev: SortableEvent) => {
                tableData.value.splice(
                    ev.newIndex as number,
                    0,
                    tableData.value.splice(ev.oldIndex as number, 1)[0]
                );
            },
        }
    );
};

const draggle = () => {
    new sortable(document.querySelector(".checkGroup") as HTMLElement, {
        handle: ".handle",
        animation: 300,
        onEnd: (ev: SortableEvent) => {
            tableColumns.value.splice(
                ev.newIndex as number,
                0,
                tableColumns.value.splice(ev.oldIndex as number, 1)[0]
            );
        },
    });
};
onMounted(() => {
    loadTableData();
    draggle();
    nextTick(() => {
        tableDraggle();
    });
});
</script>
<template>
    <div
        class="base-tab w-full h-full bg-[var(--el-bg-color)] p-[6px] overflow-x-hidden"
    >
        <div
            class="tab-top h-[42px] flex justify-between items-center overflow-y-hidden"
        >
            <span class="mr-[6px] w-[64px] whitespace-nowrap">基础实例</span>
            <el-tooltip content="基础表格" placement="top">
                <el-icon color="#9ea0a6">
                    <Warning />
                </el-icon>
            </el-tooltip>
            <div
                class="table-toolbar flex-1 flex justify-end items-center ml-[6px]"
            >
                <el-button type="primary" @click="setStripe">
                    {{ isStripe ? "隐藏斑马纹" : "显示斑马纹" }}
                </el-button>
                <el-button type="primary" @click="setLoading">
                    {{ loading ? "关闭loading" : "开启loading" }}
                </el-button>
                <el-button type="primary" @click="setBorder">
                    {{ isBorder ? "显示边框" : "隐藏边框" }}
                </el-button>
                <el-divider direction="vertical" />
                <div class="flex table-setting">
                    <el-tooltip content="刷新" placement="top">
                        <el-button
                            :icon="Refresh"
                            size="small"
                            @click="reloadTable"
                            circle
                        />
                    </el-tooltip>
                    <el-tooltip content="密度" placement="top">
                        <el-dropdown
                            class="mx-[6px]"
                            trigger="click"
                            type="primary"
                            hide-on-click
                            @command="setSize"
                        >
                            <el-button :icon="Operation" size="small" circle />
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item
                                        command="default"
                                        :disabled="isSize === 'default'"
                                        >默认</el-dropdown-item
                                    >
                                    <el-dropdown-item
                                        command="large"
                                        :disabled="isSize === 'large'"
                                        >中等</el-dropdown-item
                                    >
                                    <el-dropdown-item
                                        command="small"
                                        :disabled="isSize === 'small'"
                                        >紧凑</el-dropdown-item
                                    >
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-tooltip>
                    <el-popover
                        trigger="click"
                        placement="bottom-start"
                        width="320"
                    >
                        <template #reference>
                            <el-button
                                :icon="Setting"
                                size="small"
                                circle
                                plain
                            />
                        </template>
                        <div
                            class="popover-title flex flex-wrap border-b-[1px] border-gray-100"
                        >
                            <el-checkbox
                                v-model="checkAll"
                                @change="handleCheckAllChange"
                                >列展示</el-checkbox
                            >
                            <el-checkbox
                                v-model="checkOrder"
                                @change="handleCheckOrderChange"
                                >序号列</el-checkbox
                            >
                            <el-checkbox
                                v-model="checkSelect"
                                @change="handleCheckSelectChange"
                                >勾选列</el-checkbox
                            >
                            <Iconify
                                icon=" fa:arrows-alt"
                                class="cursor-move handle"
                                style="color: #000"
                            />
                        </div>
                        <div class="prpover-content">
                            <el-checkbox-group
                                v-model="checkedCities"
                                :indeterminate="isIndeterminate"
                                @change="handleCheckedCitiesChange"
                                class="checkGroup"
                            >
                                <div
                                    class="flex items-center w-full"
                                    v-for="item in tabColumn"
                                    :key="item.key"
                                >
                                    <IconifyVue
                                        icon="fa6-solid:arrows-up-down-left-right"
                                        class="mr-2 cursor-move handle"
                                    />
                                    <el-checkbox
                                        class="flex-1"
                                        :key="item.key"
                                        :label="item.label"
                                        >{{ item.label }}
                                    </el-checkbox>
                                </div>
                            </el-checkbox-group>
                        </div>
                    </el-popover>
                </div>
            </div>
        </div>
        <div class="table-basic">
            <el-table
                :data="tableData"
                :size="isSize"
                :stripe="isStripe"
                :border="isBorder"
                :max-height="715"
                @selection-change="handleSelectionChange"
                style="width: 100%"
                v-loading="loading"
            >
                <el-table-column
                    type="selection"
                    width="55"
                    v-if="checkSelect"
                />
                <el-table-column
                    type="index"
                    label="序号"
                    width="75"
                    align="center"
                    v-if="checkOrder"
                />
                <el-table-column
                    v-for="(item, index) in tableColumns"
                    :key="index"
                    :prop="item.prop"
                    :label="item.label"
                    :width="item.width"
                    :align="item.align"
                />
            </el-table>
        </div>
    </div>
</template>
<style scoped lang="scss"></style>
