<template>
    <div class="profile-container">
        <div class="profile-header">
            <div class="profile-info">
                <Image class="profile-info-avatar" round fit="cover" src="../other/avatar.png"></Image>
                <span class="profile-info-nickname">码农小易</span>
                <span class="profile-info-address">
                    <Icon name="location-o" /> 北京 天安门
                </span>
            </div>
        </div>
        <Grid :column-num="4" clickable>
            <GridItem icon="balance-list-o" text="全部订单"></GridItem>
            <GridItem icon="paid" text="待付款" badge="3"></GridItem>
            <GridItem icon="sign" text="待收货"></GridItem>
            <GridItem icon="vip-card-o" text="我的VIP卡" dot></GridItem>
        </Grid>
        <CellGroup class="action-group">
            <Cell icon="cart-o" title="我的购物车" is-link />
            <Cell icon="like-o" title="我的收藏" is-link />
            <Cell icon="clock-o" title="我的历史记录" is-link />
        </CellGroup>
        <CellGroup class="action-group">
            <Cell icon="envelop-o" title="意见反馈" is-link />
            <Cell icon="info-o" title="关于版本" is-link />
        </CellGroup>
        <CellGroup class="action-group">
            <Cell icon="home-o" title="返回首页" is-link to="/" />
            <Cell icon="good-job-o" title="在Github点赞" is-link
                url="https://github.com/Coder-XiaoYi/vue-mobile-template" />
            <Cell icon="good-job-o" title="在Gitee点赞" is-link url="https://gitee.com/liupeiqiang/vue-mobile-template" />
        </CellGroup>
    </div>
</template>
<script setup name="Profile">
import { Image, Icon, Grid, GridItem, CellGroup, Cell } from 'vant';
</script>
<style lang="scss" scoped>
.profile-container {

    .action-group {
        margin-top: 10px;
    }

    .profile-header {
        &::before {
            content: '';
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            width: 100%;
            height: 220px;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 0;
        }

        width: 375px;
        height: 220px;
        background-image: url("../profile2/background.png");
        background-size: cover;

        display:flex;
        justify-content: center;
        align-items: center;

        .profile-info {
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            color: #f0f0f0;

            &-avatar {
                border: 3px solid #f0f0f0;
                width: 80px;
                height: 80px;
            }

            &-nickname {
                font-size: 20px;
                margin: 7px;
            }

            &-address {
                font-size: 14px;
                margin: 5px 5px 0px 5px;
            }
        }


    }
}
</style>