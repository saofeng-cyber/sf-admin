<script setup lang="ts"></script>

<template>
    <div class="workPlatform">
        <div class="card-box"></div>
    </div>
</template>
<style scoped lang="scss">
.workPlatform {
    height: 100%;
    padding: 12px;
    overflow-y: auto;

    .card-box {
        width: 420px;
        height: 260px;
        border-radius: 20px;
        overflow: hidden;
        padding: 20px;
        position: relative;
        color: #fff;

        &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: linear-gradient(35deg, orange, #ff2e6f);
            mask: radial-gradient(circle at 20px 61%, transparent 20px, red 0) -20px;
            animation: bgchange 3s infinite ease-in-out alternate-reverse;
        }

        @keyframes bgchange {
            0% {
                filter: hue-rotate(0deg);
            }

            100% {
                filter: hue-rotate(-50deg);
            }
        }
    }
}
</style>
