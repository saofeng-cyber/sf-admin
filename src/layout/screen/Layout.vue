<script setup lang="ts"></script>

<template>
    <router-view v-slot="{ Component }">
        <template v-if="Component">
            <transition name="fade" appear mode="out-in">
                <KeepAlive>
                    <Suspense>
                        <component :is="Component" />
                    </Suspense>
                </KeepAlive>
            </transition>
        </template>
    </router-view>
</template>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
