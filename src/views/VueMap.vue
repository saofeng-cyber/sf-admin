<script setup lang="ts">
import { ElBmap } from "vue-bmap-gl";

const zoom = ref(12);
const center = ref([117.4819445, 36.6776286]);
const tilt = ref(60);
const heading = ref(0);
const mapRef = ref<any>();

const getMap = () => {
    mapRef.value.$$getInstance();
};

onMounted(() => {
    getMap();
});
</script>
<template>
    <div style="height: calc(100vh - 75px)">
        <div class="w-full h-full">
            <el-bmap
                ref="mapRef"
                :lazy="2000"
                :min-zoom="5"
                :max-zoom="25"
                :tilt="tilt"
                :heading="heading"
                :center="center"
                :zoom="zoom"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
