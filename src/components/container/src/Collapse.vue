<script setup lang="ts">
import type { CSSProperties } from "vue";

defineProps({
    title: {
        type: String,
        default: "基础实例",
    },
});
const show = ref<boolean>(true);
const arrowStyle = computed((): CSSProperties => {
    return {
        transform: show.value ? "rotate(180deg)" : "rotate(0deg)",
    };
});
const changeShow = () => {
    show.value = !show.value;
};
</script>
<template>
    <div class="collapse-container">
        <div class="collapse-header px-2 py-5">
            <div class="collapse-header-title">
                {{ title }}
            </div>
            <div
                class="collapse-header-arrow cursor-pointer"
                @click="changeShow"
                :style="arrowStyle"
            >
                <Iconify
                    :width="24"
                    :height="24"
                    icon="material-symbols:keyboard-arrow-up"
                />
            </div>
        </div>

        <Transition name="slide-y">
            <div v-show="show">
                <slot name="content"></slot>
            </div>
        </Transition>
    </div>
</template>
<style scoped lang="scss">
.collapse-container {
    background-color: var(--el-bg-color);
    border-radius: var(--el-border-radius-base);

    .collapse-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 32px;
        border-bottom: 1px solid var(--el-border-color);

        .collapse-header-title {
            font-size: 14px;
            font-weight: 500;
            padding-left: 7px;
        }

        .collapse-header-arrow {
            transition: all 0.3s ease;
        }
    }

    .slide-y-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-y-leave-active {
        transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-y-enter-from,
    .slide-y-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }
}
</style>
