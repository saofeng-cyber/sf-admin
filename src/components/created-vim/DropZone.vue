<script setup lang="ts">
import Dropzone from "dropzone";
onMounted(() => {
    const previewNode = document.getElementById("template") as HTMLElement;
    previewNode.id = "";
    const previewTemplate = (previewNode?.parentNode as HTMLElement).innerHTML;
    const myDropzone = new Dropzone("#my-dropzone", {
        url: "https://httpbin.org/post",
        thumbnailWidth: 80,
        thumbnailHeight: 80,
        parallelUploads: 20,
        previewTemplate: previewTemplate,
        autoQueue: false, // Make sure the files aren't queued until manually added
        previewsContainer: "#dropzone-list", // Define the container to display the previews
        clickable: true, // Define the element that should be used as click trigger to select files.
    });
    myDropzone.on("addedfile", (file: any) => {
        console.log(`File added: ${file.name}`);
    });
});
</script>
<template>
    <el-card class="mb-4">
        <template #header>
            <div class="flex justify-between card-header">
                <h3>Dropzone</h3>
                <el-link
                    type="primary"
                    href="https://docs.dropzone.dev/"
                    target="_blank"
                    >To Dropzone</el-link
                >
            </div>
        </template>
        <div id="my-dropzone">
            <div class="dz-preview dz-file-preview">
                <div class="dz-default dz-message">
                    <el-button class="dz-button">
                        Drop files here to upload
                    </el-button>
                </div>
                <div id="dropzone-list">
                    <div id="template" class="flex items-center mb-3">
                        <div>
                            <span class="preview">
                                <img
                                    class="shadow rounded-xl"
                                    data-dz-thumbnail
                                />
                            </span>
                        </div>
                        <div class="dz-filename flex-1 mx-[12px]">
                            <h4 class="text-[#32325d]" data-dz-name></h4>
                            <p
                                data-dz-size
                                class="small text-muted mb-0 text-[#8898AA]"
                            ></p>
                        </div>
                        <div class="dz-progress"></div>
                        <div class="dz-error-message"></div>
                        <div class="dz-success-mark"></div>
                        <div class="dz-error-mark"></div>
                        <!-- <div class="dz-remove" data-dz-remove>
                                <el-button
                                    type="danger"
                                    :icon="Delete"
                                    circle
                                    data-dz-remove="true"
                                />
                            </div> -->
                    </div>
                </div>
            </div>
        </div>
    </el-card>
</template>
<style scoped lang="scss">
.dz-message {
    text-align: center;
    padding: 32px 16px;
    background-color: #fff;
    border: 1px dashed #dee2e6;
    border-radius: 0.375rem;
    color: #8898aa;
}
</style>
