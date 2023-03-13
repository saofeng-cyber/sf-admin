<script setup lang="ts">
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
let lightbox: any = null;
onMounted(() => {
    lightbox = new PhotoSwipeLightbox({
        gallery: "#my-gallery",
        children: "a",
        pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
});
onUnmounted(() => {
    lightbox.destroy();
    lightbox = null;
});
</script>
<template>
    <el-card class="mb-4">
        <template #header>
            <div class="flex justify-between card-header">
                <h3>PhotoSwipe</h3>
                <el-link
                    type="primary"
                    href="https://photoswipe.com/"
                    target="_blank"
                    >To PhotoSwipe</el-link
                >
            </div>
        </template>
        <div id="my-gallery" class="flex items-center gap-4">
            <a
                href="https://unsplash.com"
                data-pswp-src="https://startupstockphotos.com/wp-content/uploads/2023/01/ssp-work-tech-0001-2048x1367.jpg"
                data-pswp-width="2048"
                data-pswp-height="1367"
                target="_blank"
            >
                <img
                    src="https://startupstockphotos.com/wp-content/uploads/2023/01/ssp-work-tech-0001-2048x1367.jpg"
                    alt=""
                />
            </a>
        </div>
    </el-card>
</template>
