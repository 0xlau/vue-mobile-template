<template>
    <svg :class="svgClass" v-bind="$attrs" :style="{ color: color, width: width, height: height }">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '1rem'
    },
    height: {
        type: String,
        default: '1rem'
    }
})

const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
    console.log(props.name, 'props.name');
    if (props.name) {
        return `svg-icon icon-${props.name}`
    }
    return 'svg-icon'
});
</script>

<style lang='scss'>
.svg-icon {
    fill: currentColor;
    vertical-align: middle;
}
</style>