<script setup lang="ts">
import { RouterView } from "vue-router";
console.log(import.meta.env);
</script>

<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<style scoped></style>
