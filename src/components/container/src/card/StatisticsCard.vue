<script setup lang="ts">
interface StatisticsCardProps {
    title: string;
    value?: string | number;
    percentage?: string;
    icon?: string | undefined;
    background: string;
}
withDefaults(defineProps<StatisticsCardProps>(), {
    title: "Today's Money",
    value: "$5300, 000",
    percentage: "",
    icon: "ri:money-cny-box-fill",
    background: "primary",
});
</script>
<template>
    <div class="relative flex flex-col mb-4 min-w-[0] statistics-card">
        <div class="p-3 card-body">
            <div class="flex items-center justify-between">
                <div class="w-4/5">
                    <p
                        class="mb-0 text-sm capitalize text-[#525F7F]"
                        style="font-weight: 600 !important"
                    >
                        {{ title }}
                    </p>
                    <h5 class="mb-0 font-bold text-[#344767] text-lg">
                        {{ value }}
                    </h5>
                </div>
                <div
                    class="rounded-md w-[48px] h-[48px] shadow text-center leading-[48px] bg-center"
                    :style="{
                        backgroundColor: `var(--el-color-${background})`,
                    }"
                >
                    <Iconify
                        :icon="icon"
                        :width="24"
                        :height="24"
                        style="color: #fff"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.statistics-card {
    word-wrap: break-word;
    background-color: var(--el-bg-color);
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}
</style>
