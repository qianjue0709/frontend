<template>
  <div class="back-box">
    <el-menu
        default-active="commodity"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
        class="head-box"
        router
    >
      <div class="head-title">后台管理</div>
      <el-menu-item index="commodity" class="menu-text">商品管理</el-menu-item>
      <el-menu-item index="brand" class="menu-text">品牌管理</el-menu-item>
      <el-menu-item index="supplier" class="menu-text">商家管理</el-menu-item>
      <div class="flex-grow" />
      <el-sub-menu index="3" class="menu-text">
        <template #title>用户</template>
        <el-menu-item index="login">退出登录</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <div class="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
</script>

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
  width: 100%;
  display: flex;
  min-height: 662px;
}
.menu-text {
  font-size: 18px;
}
.flex-grow {
  flex-grow: 1;
}
</style>
