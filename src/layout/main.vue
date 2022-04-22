<template>
  <div class="app-container">
    <div class="app-header" v-if="showNavBar">
      <NavBar :title="route.meta.title" />
    </div>
    <div :class="showNavBar ? 'app-body' : 'app-body-noNavBar'">
      <router-view></router-view>
    </div>
    <div class="app-footer">
      <Tabbar v-model="active" @change="TabbarChange">
        <TabbarItem v-for="item in NavBarConfig" :key="item.name" :name="item.path" :icon="item.meta.icon">
          {{ item.meta.title }}
        </TabbarItem>
      </Tabbar>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NavBar, Tabbar, TabbarItem } from "vant";
import { useSettingStore } from "@/stores/setting";
import NavBarConfig from '@/router/navbar.config'

const route = useRoute();
const router = useRouter();
const settingStore = useSettingStore();

const active = ref(route.meta.activePath || route.fullPath);

const showNavBar = computed(() => (route.meta.isNavBar == undefined ? settingStore.isNavBar : route.meta.isNavBar))

function TabbarChange(active) {
  router.push({ path: active })
}



</script>

<style>
</style>