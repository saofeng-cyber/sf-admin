<script setup lang="ts">
defineProps<{ routeList: AuthRoute.Route[] }>();
</script>

<template>
    <transition-group name="list">
        <template v-for="(item, index) in routeList" :key="index">
            <el-sub-menu
                v-if="item.children && item.children.length > 0"
                :index="item.path"
            >
                <template #title>
                    <el-icon>
                        <IconifyVue :icon="item.meta?.icon" />
                    </el-icon>
                    <span>{{ item.meta?.title }}</span>
                </template>
                <menu-item :route-list="item.children" />
            </el-sub-menu>
            <el-menu-item v-else :index="item.path">
                <el-icon>
                    <IconifyVue :icon="item.meta?.icon" />
                </el-icon>
                <template #title>
                    <span>{{ item.meta?.title }}</span>
                </template>
            </el-menu-item>
        </template>
    </transition-group>
</template>
