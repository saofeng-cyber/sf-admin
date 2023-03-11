<script setup lang="ts">
defineProps({ url: { type: String, default: "" } });
</script>
<template>
    <div class="relative w-full h-full">
        <iframe
            :src="url"
            scrolling="yes"
            frameborder="0"
            class="w-full h-full"
        />
    </div>
</template>
<style scoped lang="scss"></style>
