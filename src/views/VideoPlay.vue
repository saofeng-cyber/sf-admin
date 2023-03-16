<script setup lang="ts">
import xgplayer, { type IPlayerOptions } from "xgplayer";
import "xgplayer/dist/index.min.css";
const videoRef = ref<HTMLElement>();
const initPlay = () => {
    if (!videoRef.value) return;
    const config: IPlayerOptions = {
        el: videoRef.value,
        url: "https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        width: "auto",
        autoplay: false,
        loop: true,
        volume: 0.1,
        videoInit: true,
        download: true, //设置download控件显示
        rotate: {
            //视频旋转按钮配置项
            innerRotate: true, //只旋转内部video
            clockwise: false, // 旋转方向是否为顺时针
        },
        playbackRate: [0.5, 0.75, 1, 1.5, 2], //传入倍速可选数组
    };
    new xgplayer(config);
};
onMounted(() => {
    initPlay();
});
</script>
<template>
    <div class="relative w-full h-full video rounded-2xl">
        <div class="mark_header font-bold text-[20px] text-white mb-4">
            视频播放器
        </div>
        <div id="video_content" ref="videoRef" />
        <div class="flex items-center w-full my-3">
            <span>对接说明：</span>
            <el-link
                type="primary"
                class="break-all"
                href="http://v2.h5player.bytedance.com/gettingStarted/"
                target="_blank"
            >
                http://v2.h5player.bytedance.com/gettingStarted/
            </el-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
