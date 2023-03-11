/**
 * 通过Mode计算颜色
 * @param color1 用于计算的颜色
 * @param color2 颜色计算基本值
 * @param weight 颜色的亮度
 */
const mix = (color1: string, color2: string, weight: number): string => {
    weight = Math.max(Math.min(Number(weight), 1), 0);
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);
    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);
    const r = Math.round(r1 * (1 - weight) + r2 * weight);
    const g = Math.round(g1 * (1 - weight) + g2 * weight);
    const b = Math.round(b1 * (1 - weight) + b2 * weight);
    const _r = ("0" + (r || 0).toString(16)).slice(-2);
    const _g = ("0" + (g || 0).toString(16)).slice(-2);
    const _b = ("0" + (b || 0).toString(16)).slice(-2);
    return "#" + _r + _g + _b;
};
/**
 * 修改主题颜色
 * @param mode 参与计算的颜色
 * @param base 基本颜色
 * @param color 要修改的主题颜色
 */
export const setThemeType = (
    mode: themeColor.Mode,
    base: themeColor.Base,
    color: string
): void => {
    if (typeof color === "string") {
        const prefix: themeColor.preFix = "--el-color-";
        const themeType = mode === "white" ? "#ffffff" : "#000000";
        document.documentElement.style.setProperty("--el-color-primary", color);
        for (let k = 1; k <= 2; k++) {
            if (k !== 1) {
                document.documentElement.style.setProperty(
                    `--el-color-${base}-dark-${k}`,
                    mix(color, themeType, k * 0.1)
                );
            }
        }
        for (let j = 1; j < 10; j++) {
            document.documentElement.style.setProperty(
                `${prefix}${base}-light-${j}`,
                mix(color, themeType, j * 0.1)
            );
        }
    }
};

export const toggleClass = (
    flag: boolean,
    clsName: string,
    target?: HTMLElement
) => {
    const targetEl = target || document.body;
    let { className } = targetEl;
    className = className.replace(clsName, "").trim();
    targetEl.className = flag ? `${className} ${clsName} ` : className;
};
