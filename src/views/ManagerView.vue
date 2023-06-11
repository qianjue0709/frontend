<template>
  <div class="back-box">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      class="head-box"
    >
      <div class="head-title">后台管理</div>
      <el-menu-item index="1" class="menu-text">商品管理</el-menu-item>
      <el-menu-item index="2" class="menu-text">商家管理</el-menu-item>
      <div class="flex-grow" />
      <el-sub-menu index="3" class="menu-text">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <div class="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.back-box {
  position: absolute;
  inset: 0px;
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
