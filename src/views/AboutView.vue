<script setup lang="ts">
import pkg from "../../package.json";
const { dependencies, devDependencies, version } = readonly<any>(pkg);
interface Dependencies {
    dependency: string;
    version: string;
}

const dependenciesArray = ref<Array<Dependencies>>([]);
const devpendenciesArray = ref<Array<Dependencies>>([]);
Object.keys(dependencies).forEach((key) => {
    dependenciesArray.value.push({
        dependency: key,
        version: dependencies[key],
    });
});
Object.keys(devDependencies).forEach((key) => {
    devpendenciesArray.value.push({
        dependency: key,
        version: devDependencies[key],
    });
});

const dateNow = getCurrentInstance()
    ?.appContext.config.globalProperties.$moment()
    .format("YYYY-MM-DD HH:mm:ss");
</script>
<template>
    <div class="relative w-full h-full">
        <el-card class="box-card" shadow="hover">
            <template #header>
                <div class="card-header">
                    <span>{{ $t("about") }}</span>
                </div>
            </template>
            <div class="text item">
                Sf-Admin 是一个基于Vue3、Vite4、TypeScript、Element-Plus
                的中后台解决方案，它可以帮助您快速搭建企业级中后台，提供现成的开箱解决方案及丰富的示例。原则上不收取任何费用及版权，可以放心使用，不过如需二次开源（比如用此平台二次开发并开源）请联系作者获取许可！
            </div>
        </el-card>
        <el-card class="box-card mt-[8px]" shadow="hover">
            <template #header>
                <div class="card-header">
                    <span>项目信息</span>
                </div>
            </template>
            <div class="text item">
                <el-descriptions class="margin-top" :column="3" border>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">版本</div>
                        </template>
                        <el-tag>{{ version }}</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">最后编译时间</div>
                        </template>
                        <span style="color: var(--el-color-primary)">
                            {{ dateNow }}
                        </span>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">文档地址</div>
                        </template>
                        <el-link
                            type="primary"
                            :underline="false"
                            href="https://saofeng-cyber.github.io/mypress/zh/"
                            target="_blank"
                        >
                            文档地址
                        </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">预览地址</div>
                        </template>
                        <el-link
                            type="primary"
                            :underline="false"
                            href="https://saofeng-cyber.github.io/sf-admin/"
                            target="_blank"
                        >
                            预览地址
                        </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">Github</div>
                        </template>
                        <el-link
                            type="primary"
                            :underline="false"
                            href="https://github.com/saofeng-cyber/sf-admin"
                            target="_blank"
                        >
                            Github
                        </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">在线项目</div>
                        </template>
                        <el-link
                            type="primary"
                            :underline="false"
                            href="https://stackblitz.com/edit/github-b9rv2z"
                            target="_blank"
                        >
                            线上体验
                        </el-link>
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </el-card>
        <el-card class="box-card mt-[8px]" shadow="hover">
            <template #header>
                <div class="card-header">
                    <span>生产环境依赖</span>
                </div>
            </template>
            <div class="text item">
                <el-descriptions class="margin-top" :column="3" border>
                    <el-descriptions-item
                        v-for="(item, index) in dependenciesArray"
                        :key="index"
                    >
                        <template #label>
                            <div class="cell-item">
                                {{ item.dependency }}
                            </div>
                        </template>
                        <el-tag>{{ item.version }}</el-tag>
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </el-card>
        <el-card class="box-card mt-[8px]" shadow="hover">
            <template #header>
                <div class="card-header">
                    <span>开发环境依赖</span>
                </div>
            </template>
            <div class="text item">
                <el-descriptions class="margin-top" :column="3" border>
                    <el-descriptions-item
                        v-for="(item, index) in devpendenciesArray"
                        :key="index"
                    >
                        <template #label>
                            <div class="cell-item">
                                {{ item.dependency }}
                            </div>
                        </template>
                        <el-tag>{{ item.version }}</el-tag>
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </el-card>
    </div>
</template>

<style lang="scss" scoped></style>
