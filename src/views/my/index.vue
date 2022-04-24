<template>
  <div>
    <CellGroup title="页面展示">
      <Cell is-link title="我的页面模板一" @click="router.push({ path: '/my/profile1' })"></Cell>
      <Cell is-link title="我的页面模板二" @click="router.push({ path: '/my/profile2' })"></Cell>
    </CellGroup>
    <CellGroup title="常规操作">
      <Cell is-link clickable title="退出登录" title-style="color:red;" @click="onLogout"></Cell>
    </CellGroup>
  </div>
</template>

<script setup name="My">
import { Cell, CellGroup } from "vant";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const router = useRouter();

function onLogout() {
  userStore.LogOut().then(() => {
    router.push({ path: "/login" });
  });
}
</script>

<style>
</style>