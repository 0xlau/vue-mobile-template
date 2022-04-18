<template>
  <div class="app-container">
    <div class="app-header" v-if="!route.meta.hiddenNavbar">
      <NavBar
        :title="route.meta.title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="app-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { NavBar, Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import NavBarConfig from "../router/navbar.config";

const route = useRoute();
const router = useRouter();

function onClickLeft(active) {
  router.go(-1);
}
</script>

<style>
</style>