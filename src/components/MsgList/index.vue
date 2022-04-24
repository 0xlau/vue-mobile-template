<template>
    <div class="MsgList-component">
        <Empty v-if="(!msgData || msgData.length == 0) && (!barData || batData.length == 0)" :description="emptyText"
            :image="emptyImage" />
        <div v-else>
            <Cell v-for="(item, index) in barData" :key="index" :title="item.title" :icon="item.icon" clickable
                @click="onBarClick(item)"></Cell>
            <SwipeCell v-for="(item, index) in msgData" :key="index">
                <Cell clickable titleStyle="margin: 0.1rem 0rem 0rem 0.5rem;" @click="onMsgClick(item)">
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                    <template #icon>
                        <Badge :dot="item.dot" :content="item.dot ? null : item.unReadCount" :max="msgMaxCount"
                            :offset="['0rem', '0.2rem']" :show-zero="false">
                            <Image class="avatar" fit="cover" :src="item.avatar" round></Image>
                        </Badge>
                    </template>
                    <template #label>
                        <div class="msg-preview van-ellipsis">{{ item.newestMsg }}</div>
                    </template>
                    <template #title>
                        <div class="nickname van-ellipsis">{{ item.nickName }}</div>
                    </template>
                </Cell>
                <template #right>
                    <Button style="height: 100%" square type="danger" text="移除" @click="onMsgRemove(item)"></Button>
                </template>
            </SwipeCell>
        </div>
    </div>
</template>
<script setup name="MsgListComponent">
import { Cell, Image, Badge, Empty, SwipeCell, Button } from 'vant';
const emits = defineEmits(['msgClick', 'barClick', 'msgRemove'])
const props = defineProps({
    msgMaxCount: {
        type: Number,
        default: 99,
    },
    msgData: {
        type: Array,
        default: []
    },
    barData: {
        type: Array,
        default: []
    },
    emptyText: {
        type: String,
        default: "暂无消息"
    },
    emptyImage: {
        type: String,
        defulat: "search",
    }
});

function onMsgClick(item) {
    emits('msgClick', item);
}

function onMsgRemove(item){
    emits('msgRemove', item);
}

function onBarClick(item) {
    emits('barClick', item);
}


</script>
<style lang="scss" scoped>
.MsgList-component {
    .avatar {
        width: 50px;
        height: 50px;
    }

    .nickname {
        width: 260px;
        font-weight: 600;
        font-size: 15px;
    }

    .msg-preview {
        font-weight: 400;
        width: 260px;
    }
}
</style>