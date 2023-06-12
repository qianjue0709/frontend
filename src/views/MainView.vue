<template>
  <div class="back-box">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      class="head-box"
    >
      <div class="head-title">电商</div>
      <el-menu-item index="1" class="menu-text">商品</el-menu-item>
      <el-menu-item index="2" class="menu-text">订单记录</el-menu-item>
      <div class="flex-grow" />
      <el-sub-menu index="3" class="menu-text">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">个人信息</el-menu-item>
        <el-menu-item index="2-2">退出登录</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <div class="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
//用户登录信息
const myRoute = useRoute().query;
console.log(myRoute);
</script>
<style>
.back-box {
  position: absolute;
  inset: 0;
}
.head-box {
  height: 67px;
  width: 100%;
}

.head-title {
  height: 100%;
  text-align: center;
  width: 18%;
  font-size: 25px;
  line-height: 67px;
  box-sizing: border-box;
}
.content-box {
  padding-top: 20px;
  position: absolute;
  display: flex;
  top: 67px;
  left: 0;
  right: 0;
  bottom: 0;
}
.menu-text {
  font-size: 18px;
}
.flex-grow {
  flex-grow: 1;
}
</style>
