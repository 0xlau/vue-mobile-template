<template>
  <div>您当前的权限是：{{ userStore.permissions }}</div>
  <div>您当前的角色是：{{ userStore.roles }}</div>
  <div v-hasPermi="['test:list']">有test:list权限才能看到</div>
  <div v-hasRole="['admin']">有admin角色才能看到</div>
  <div v-hasRole="['user1']">有user1角色才能看到</div>
  <div v-hasRole="['user2']">有user2角色才能看到</div>
  <div v-has="'!R(user1)'">不是user1角色才能看到</div>
  <div v-has="'!R(user1) || P(test:list)'">不是user1角色或有test:list权限才能看到</div>
  <!-- 他们是等价的
    <div v-hasRole="['a','b','c']">等价的</div>
    <div v-has="'R(a)||R(b)||R(c)'">等价的</div>
  -->
  <!-- 他们是等价的
    <div v-hasPermi="['a','b','c']">等价的</div>
    <div v-has="'P(a)||P(b)||P(c)'">等价的</div>
  -->
</template>

<script setup name="Permission">
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
</script>

<style>
</style>