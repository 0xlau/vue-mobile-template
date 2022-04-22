<template>
    <div class="GridCard-component">
        <div class="GridCard-title" v-if="title != undefined" :style="titleStyle">
            <span>{{title}}</span>
        </div>
        <Grid :border="false" :column-num="columnNum">
            <GridItem v-for="item in items" :text="item.text" :dot="item.dot" :badge="item.badge" :url="item.url" :to="item.to">
                <template #icon>
                    <svg-icon v-if="item.svg" :name="item.svg"></svg-icon>
                    <Icon v-else-if="item.icon" :name="item.icon"></Icon>
                    <Icon v-else name="photo-o"></Icon>
                </template>
            </GridItem>
        </Grid>
    </div>
</template>
<script setup name="GridCardComponent">
import { Grid, GridItem, Icon } from "vant"
const props = defineProps({
    title: {
        type: String,
        default: undefined
    },
    titleStyle: {
        type: Object,
        default: {}
    },
    columnNum:{
        type: Number,
        default: 4
    },
    items: {
        type: Object,
        default: {}
    }
})
</script>
<style lang="scss" scoped>
.GridCard-component {
    overflow: hidden;
    margin: 5px 20px 5px 20px;
    border-radius: 10px;
    background-color: var(--van-grid-item-content-background-color);
    .GridCard-title{
        margin: 15px 15px 0px 20px;
        span{
            font-size: 18px;
            font-weight: 500;
        }
    }
}
</style>