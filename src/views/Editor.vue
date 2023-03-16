<script setup lang="ts">
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
// 内容 HTML
const valueHtml = ref("<p>hello</p>");
onMounted(() => {
    // setTimeout(() => {
    //     valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    // }, 1500)
});
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (!editor) return;
    editor.destroy();
});
const toolbarConfig = reactive({});
const editorConfig = reactive({
    placeholder: "请输入内容...",
    // onChange() {
    //     valueHtml.value = editorRef.value.getHtml()
    //     console.log('editor content', valueHtml.value)
    //     // 也可以同步到 <textarea>
    // }
});
const handleCreated = (editor: any) => {
    editorRef.value = editor; // 记录 editor 实例，重要！
};
const mode = ref("default"); // 'simple'
</script>
<template>
    <div class="flex flex-col editor rounded-2xl">
        <div class="font-bold text-[20px] mb-[10px] text-white">
            富文本编辑器
        </div>
        <div class="z-50 flex-1 editor">
            <Toolbar
                class="border border-gray-300 border-solid"
                :editor="editorRef"
                :default-config="toolbarConfig"
                :mode="mode"
            />
            <Editor
                v-model="valueHtml"
                style="height: 20rem"
                :default-config="editorConfig"
                :mode="mode"
                @on-created="handleCreated"
            />
        </div>
        <div
            class="editor_html my-[12px] h-[240px] border-0 border-y border-solid border-gray-300"
        >
            {{ valueHtml }}}
        </div>

        <div class="mt-[10px] flex items-center w-full">
            <span>对接说明：</span>
            <el-link
                type="primary"
                class="break-all"
                href="https://www.wangeditor.com/"
                target="_blank"
            >
                https://www.wangeditor.com/
            </el-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
