<template>
  <div class="app-container">
    <div class="app-header" v-if="!route.meta.hiddenNavbar">
      <NavBar :title="route.meta.title" />
    </div>
    <div class="app-body">
      <router-view></router-view>
    </div>
    <div class="app-footer">
      <Tabbar v-model="active" @change="TabbarChange">
          <TabbarItem v-for="item in NavBarConfig" :key="item.name" :name="item.path" :icon="item.meta.icon">{{item.meta.title}}</TabbarItem>
      </Tabbar>
    </div>
  </div>
</template>

<script setup>
import { NavBar, Tabbar, TabbarItem } from "vant";
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavBarConfig from '../router/navbar.config'

const route = useRoute();
const router = useRouter();
const active = ref(route.meta.activePath || route.fullPath);

function TabbarChange(active){
    router.push({path: active})
}

</script>

<style>
</style>