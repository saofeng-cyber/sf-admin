declare namespace themeColor {
    /**
     * 定义颜色数据类型
     */
    interface themeColorsType {
        color: string;
        themeColor: string;
    }
    /**
     * 主定义element-plus主题的基本类型
     */
    export enum BaseType {
        primary,
        success,
        warning,
        danger,
        error,
        info,
    }

    /**
     * 基本计算颜色：white | black
     */
    type Mode = "white" | "black";
    type Base = keyof typeof BaseType;

    /**
     * 基本前缀
     */
    export type preFix = "--el-color-";
}
