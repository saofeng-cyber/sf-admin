<script setup lang="ts">
import { RouterModule } from "@/stores/modules/route/RouterModel";

const useRouterModule = RouterModule();
const { role } = storeToRefs(useRouterModule);
interface PermissionOptions {
    label: string;
    value: AuthRoute.RoleType;
}
const permissionOptions = ref<Array<PermissionOptions>>([
    {
        label: "超级管理员",
        value: "super",
    },
    {
        label: "管理员",
        value: "admin",
    },
    {
        label: "用户",
        value: "user",
    },
]);
const permissionChange = (val: string) => {
    useRouterModule.setRole(val as AuthRoute.RoleType);
    useRouterModule.getRouterList(val as AuthRoute.RoleType);
};
</script>
<template>
    <div class="permission">
        <el-card class="box-card" shadow="never">
            <h3 class="mb-[16px]">权限切换</h3>
            <el-select
                v-model="role"
                placeholder="点我进行权限切换"
                @change="permissionChange"
                style="width: 240px"
            >
                <el-option
                    v-for="item in permissionOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
            <p class="mt-[12px]">
                当前权限类别: <el-tag v-permission="role" />
            </p>
        </el-card>
    </div>
</template>
<style scoped lang="scss">
.permission {
    height: 100%;
    overflow-y: auto;
}
</style>
