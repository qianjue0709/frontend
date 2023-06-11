<template>
  <div class="left-box"></div>
  <div class="right-box">
    <div class="right-top"></div>
    <div class="right-buttom">
      <div class="card-box" v-for="i in t" :key="i"></div>
    </div>
  </div>
</template>

<script setup>
let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
</script>

<style scoped>
.left-box {
  width: 20%;
  height: 100%;
}
.right-box {
  width: 80%;
  height: 100%;
}
.right-top {
  box-sizing: border-box;
  width: 100%;
  height: 20%;
  background-color: aqua;
}
.right-buttom {
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: antiquewhite;
  overflow: scroll;
}
.card-box {
  width: 10%;
  height: 100px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: red;
}
</style>
