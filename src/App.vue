<script setup lang="ts">
// import { flexible } from "@/utils/flexible";
import { RouterView } from "vue-router";
console.log(import.meta.env);
onMounted(() => {
    // flexible(window, document);
});
</script>

<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<style scoped></style>
