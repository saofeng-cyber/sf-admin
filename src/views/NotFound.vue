<script setup lang="ts"></script>
<template>
    <div class="flex items-center justify-center notFound">
        <div class="flex flex-col items-center text-center">
            <SvgIcon name="403" :width="360" :height="270" />
            <p class="text-gray-400">抱歉，你访问的页面不存在</p>
            <div class="mt-[12px] flex justify-between w-[160px]">
                <el-button type="primary" @click="$router.go(-1)">
                    返回
                </el-button>
                <el-button type="primary" @click="$router.replace('/')">
                    首页
                </el-button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.notFound {
    height: 100%;
    overflow-y: auto;
}
</style>
