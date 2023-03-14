<script setup lang="ts">
interface InfoCardProps {
    title: string;
    value?: string | number;
    description?: string;
    icon?: string | undefined;
    prefix?: string | undefined;
    background: cardcolor;
}
withDefaults(defineProps<InfoCardProps>(), {
    title: "Today's Money",
    value: "$5300, 000",
    description: "Belong Interactive",
    icon: "ri:money-cny-box-fill",
    prefix: "",
    background: "primary",
});
</script>
<template>
    <div class="relative flex flex-col items-center mx-4 mb-4 info-card">
        <div class="p-3 text-center">
            <div
                class="rounded-md w-[48px] h-[48px] shadow text-center leading-[48px] bg-center"
                :style="{
                    backgroundColor: `var(--sf-${background})`,
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
        <div class="flex-1 py-3 pt-0 text-center card-body text-[#344767]">
            <h3>{{ title }}</h3>
            <span class="text-xs text-[#525F7F]">{{ description }}</span>
            <hr class="my-3 text-[#dcdfe6]" />
            <h5 class="flex items-center gap-2 mb-0 text-xl font-bold">
                <Iconify :width="18" :height="18" :icon="prefix" />
                <count-to :start-val="0" :end-val="value" />
            </h5>
        </div>
    </div>
</template>
<style scoped lang="scss">
.info-card {
    word-wrap: break-word;
    background-color: var(--el-bg-color);
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}
</style>
