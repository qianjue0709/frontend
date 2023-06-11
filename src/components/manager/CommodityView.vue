<template>
  <div class="left-box"></div>
  <div class="right-box">
    <div class="right-top"></div>
    <div class="right-buttom">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="商品图片" width="180" />
        <el-table-column prop="name" label="商品名称" width="180" />
        <el-table-column prop="address" label="商品型号" width="180" />
        <el-table-column prop="address" label="计量单位" width="180" />
        <el-table-column prop="address" label="市场价" width="180" />
        <el-table-column prop="address" label="销售价" width="180" />
        <el-table-column prop="address" label="成本价" width="180" />
        <el-table-column prop="address" label="商品介绍" width="180" />
        <el-table-column prop="address" label="库存数量" width="180" />
        <el-table-column
          fixed="right"
          prop="address"
          label="操作"
          width="180"
        />
      </el-table>
    </div>
  </div>
</template>

<script setup></script>

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
  background-color: antiquewhite;
}
</style>
