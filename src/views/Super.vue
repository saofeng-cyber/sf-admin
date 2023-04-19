<script setup lang="ts">
import OpenApi from "@/requests/api/open";

const prompt = ref<string>("你好");
const result = ref<string>("");
const sendMsg = () => {
    OpenApi.getCompletion(prompt.value).then((res: any) => {
        const response: string = res.choices[0].text;
        result.value = response.replace(/[\r\n]/g, "");
    });
};
</script>
<template>
    <div class="super">
        <h3>当前页面只有super才能看到</h3>
        <div class="mt-[240px] flex flex-col">
            <el-input
                v-model="prompt"
                :rows="3"
                type="textarea"
                placeholder="Please input"
            />
            <el-button class="my-4" type="primary" size="large" @click="sendMsg"
                >发送</el-button
            >
            <el-input
                v-model="result"
                :rows="10"
                type="textarea"
                placeholder="result..."
            />
        </div>
    </div>
</template>
<style scoped lang="scss">
.super {
    height: 100%;
    overflow-y: auto;
    color: var(--el-color-primary);
}
</style>
