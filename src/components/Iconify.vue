<template>
    <Icon
        class="iconify"
        :icon="icon"
        :width="width"
        :height="height"
        :rotate="rotate"
        :mode="mode"
    />
</template>
<script lang="ts">
import { Icon } from "@iconify/vue";
export default defineComponent({
    components: {
        Icon,
    },
    props: {
        icon: {
            type: String,
            required: true,
            default: "material-symbols:add-home-outline",
        },
        width: {
            type: Number,
            default: 16,
        },
        height: {
            type: Number,
            default: 16,
        },
        rotate: {
            type: Number,
            default: 0,
        },
        mode: {
            type: String,
            default: "block",
        },
    },
    data: () => {
        return {};
    },
});
</script>
<style lang="scss" scoped>
.iconify {
    box-sizing: border-box;
    padding: 0 5px;
    vertical-align: middle;
}
</style>
