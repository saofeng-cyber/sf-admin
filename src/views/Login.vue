<script setup lang="ts">
import { toggleDark, isDark } from "@/utils/themes/dark";
import Auth from "@/requests/api/login";
import {
    ElNotification,
    type FormInstance,
    type FormRules,
} from "element-plus";
import jsc from "js-cookie";
import { RouterModule } from "@/stores/modules/route/RouterModel";
const useRouterModule = RouterModule();
const isTheme = ref<boolean>(isDark.value);
const changeTheme = (value: string | number | boolean) => {
    toggleDark(value as boolean);
};

const formRef = ref<FormInstance>();

const dynamicValidateForm = reactive<Record<string, any>>({
    username: "admin",
    password: "saofeng666",
});

const rules = reactive<FormRules>({
    username: [
        {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
        },
    ],
    password: [
        {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
        },
    ],
});
const router = useRouter();
const login = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            const params = {
                username: dynamicValidateForm.username,
                password: dynamicValidateForm.password,
            };
            Auth.login(params).then((res) => {
                const { data } = res;
                if (data.token) {
                    useRouterModule.setStoken("Bear " + data.token);
                    jsc.set("Bear", dynamicValidateForm.username, {
                        expires: 1,
                    });
                    console.log(jsc.get("Bear"));
                    const role = jsc.get("Bear") as AuthRoute.RoleType;
                    router.push({ path: "/", replace: true });
                    ElNotification({
                        title: "Login Sucess",
                        message: "Welcome back, Good Luck You!",
                        type: "success",
                        duration: 3000,
                        showClose: false,
                    });
                    useRouterModule.setRole(role);
                    useRouterModule.getRouterList(role);
                }
            });
        } else {
            console.log("error submit!", fields);
        }
    });
};
</script>
<template>
    <div class="relative w-full h-full px-3 login">
        <div class="bg_game">
            <svg-icon name="bg" />
        </div>
        <div
            class="absolute left-0 right-0 px-[16px] pt-[10px] h-[64px] flex justify-between items-center z-10"
        >
            <div class="flex items-center h-full">
                <a href="/">
                    <img
                        class="w-[48px]"
                        src="@/assets/images/logo.63028018.png"
                    />
                </a>
                <span class="font-bold text-white text-2xl ml-[16px]"
                    >Sf-Admin</span
                >
            </div>
            <div>
                <el-switch
                    v-model="isTheme"
                    inline-prompt
                    @change="changeTheme"
                />
            </div>
        </div>
        <div
            class="flex items-center justify-center w-full h-full px-10 py-2 login_container"
        >
            <div class="login_box">
                <div
                    class="login_form dark:bg-[#141414] relative flex flex-col items-center justify-center p-6 w-auto min-w-[320px] rounded-3xl z-10"
                >
                    <el-form
                        ref="formRef"
                        class="w-full"
                        :model="dynamicValidateForm"
                        :rules="rules"
                    >
                        <h2
                            class="mb-3 text-center text-[24px] text-white dark:text-white"
                        >
                            Sf-Admin管理系统
                        </h2>
                        <el-form-item class="my-4" prop="username">
                            <el-input
                                v-model="dynamicValidateForm.username"
                                size="large"
                            />
                        </el-form-item>
                        <el-form-item class="my-4" prop="password">
                            <el-input
                                v-model="dynamicValidateForm.password"
                                size="large"
                                type="password"
                                show-password
                            />
                        </el-form-item>
                        <el-form-item>
                            <div
                                class="flex items-center justify-between w-full"
                            >
                                <el-checkbox
                                    v-model="dynamicValidateForm.remember"
                                    label="记住密码"
                                    size="large"
                                />
                                <el-button type="primary" class="p-0" text>
                                    忘记密码？
                                </el-button>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <div class="w-full text-center">
                                <el-button
                                    size="large"
                                    type="primary"
                                    class="w-4/6"
                                    @click="login(formRef)"
                                >
                                    登录
                                </el-button>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-divider content-position="center">
                                其他登录方式
                            </el-divider>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.login {
    height: 100%;
    width: 100%;
    background: var(--el-bg-color);
    overflow: hidden;
    background-image: url("@/assets/images/bg-login.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;

    .login_container {
        animation: smoothUp 0.5s ease-in-out;

        @keyframes smoothUp {
            0% {
                transform: translateY(24px);
            }

            100% {
                transform: translateY(0px);
            }
        }

        .login_box {
            position: relative;

            .login_form {
                backdrop-filter: blur(1px);
                box-shadow: 0 1.18rem 2.35rem rgba(0, 0, 0, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-right: 1px solid rgba(255, 255, 255, 0.1);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            &::before {
                content: "";
                display: block;
                position: absolute;
                width: 180px;
                height: 180px;
                border-radius: 50%;
                top: -90px;
                left: -90px;
                background-color: #ff4e00;
                background-image: linear-gradient(
                    315deg,
                    #ff4e00 0%,
                    #ec9f05 74%
                );
                z-index: 2;
                box-shadow: 0 0 0 0 rgba($color: #fff, $alpha: 0.2);
                animation: plus 1.6s infinite ease-in-out;
            }

            &::after {
                content: "";
                display: block;
                position: absolute;
                width: 90px;
                height: 90px;
                border-radius: 50%;
                bottom: -45px;
                right: -45px;
                background-color: #eec0c6;
                background-image: linear-gradient(
                    315deg,
                    #eec0c6 0%,
                    #7ee8fa 74%
                );
                z-index: 2;
                box-shadow: 0 0 0 0 rgba($color: #fff, $alpha: 0.2);
                animation: plus 1.6s infinite linear;
            }

            @keyframes plus {
                50% {
                    box-shadow: 0 0 0 1.18rem rgba($color: #7ee8fa, $alpha: 0.2);
                }

                100% {
                    box-shadow: 0 0 0 0 rgba($color: #eec0c6, $alpha: 0.2);
                }
            }

            // @media screen and (max-width: 640px) {
            //   &::before,
            //   &::after {
            //     display: none;
            //   }
            // }
        }
    }

    .bg_game {
        position: absolute;
        bottom: -40%;
        left: -36%;
        width: 100%;
        height: 100%;
        animation: move 1s linear;

        @keyframes move {
            0% {
                transform: rotate(-60deg);
                opacity: 0;
            }

            25% {
                transform: rotate(-40deg);
                opacity: 0.2;
            }

            50% {
                transform: rotate(-20deg);
                opacity: 0.5;
            }

            75% {
                transform: rotate(-10deg);
                opacity: 0.72;
            }

            100% {
                transform: rotate(0deg);
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 640px) {
        .bg_game {
            display: none;
        }
    }
}
</style>
