<template>
  <div class="profile-container">
    <div class="profile-header">
      <div class="profile-header-inner">
        <div class="profile-info">
          <Image class="profile-info-avatar" round fit="cover" src="../other/avatar.png"></Image>
          <div class="profile-info-main">
            <span class="profile-info-main-nickname">码农小易</span>
            <span class="profile-info-main-phone">131****0000</span>
          </div>
        </div>
        <div class="profile-number">
          <div class="profile-number-box">
            <span class="profile-number-box-num">1,892</span>
            <span class="profile-number-box-text">我的金币</span>
          </div>
          <div class="profile-number-box">
            <span class="profile-number-box-num">212</span>
            <span class="profile-number-box-text">今日金币</span>
          </div>
          <div class="profile-number-box">
            <span class="profile-number-box-num">2.3</span>
            <span class="profile-number-box-text">今日阅读(分钟)</span>
          </div>
        </div>
      </div>
      <GridCard class="profile-action-card" :items="ActionCard"></GridCard>
      <GridCard :columnNum="3" title="系统专区" :items="SystemCard"></GridCard>
    </div>
  </div>
</template>

<script setup name="Profile">
import { reactive } from 'vue';
import { Image } from "vant";
import GridCard from "@/components/GridCard/index.vue"

const SystemCard = [
  {
    text: '返回主页',
    icon: 'home-o',
    to: '/'
  },
  {
    text: '在Github点赞',
    icon: 'good-job-o',
    url: 'https://github.com/Coder-XiaoYi/vue-mobile-template'
  },
  {
    text: '在Gitee点赞',
    icon: 'good-job-o',
    url: 'https://gitee.com/liupeiqiang/vue-mobile-template'
  }
]

const ActionCard = reactive({
  Withdrawal: {
    text: '兑换提现',
    svg: 'Withdrawal'
  },
  Friend: {
    text: '邀请好友',
    svg: 'Friend'
  },
  Order: {
    text: '我的订单',
    svg: 'Order'
  },
  Profit: {
    text: '收益明细',
    svg: 'Profit'
  }
})

ActionCard.Order.dot = true;
ActionCard.Profit.badge = "9+";

</script>

<style lang="scss" scoped>
.profile-container {

  .profile-header {
    overflow: hidden;

    &-inner {
      position: relative;
      width: 100%;
      height: 240px;
      z-index: 0;

      &:after {
        width: 140%;
        height: 240px;
        position: absolute;
        left: -20%;
        top: 0;
        z-index: -1;
        content: '';
        border-radius: 0 0 50% 50%;
        background-color: #2f343e;
      }

      .profile-info {

        height: 64px;
        color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 20px 0px 20px;



        &-avatar {
          border: 3px solid #aeb0b3;
          width: 64px;
          height: 64px;
        }

        &-main {

          height: 100%;
          padding: 0px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          &-nickname {
            font-size: 20px;
            font-weight: 500;
          }

          &-phone {
            font-size: 14px;
            font-weight: 300;
          }
        }
      }

      .profile-number {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 50px;
        padding: 20px 10px 0px 10px;
        color: #fff;

        &-box {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: calc(100vh / 3);

          &-num {
            font-size: 21px;
            font-weight: 600;
          }

          &-text {
            font-size: 13px;
          }
        }
      }
    }

    .profile-action-card {
      margin: -65px 20px 20px 20px;
    }
  }

}
</style>