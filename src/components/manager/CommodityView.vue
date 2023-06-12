<template>
  <div class="left-box">

  </div>
  <div class="right-box">
    <div class="right-top">
      <el-button type="primary" @click="addView = true">Primary</el-button>
    </div>
    <div class="right-bottom">
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
<!--  增加商品-->
  <el-dialog v-model="addView" title="新建商品" width="30%" center>
    <div style="display: flex;flex-wrap: wrap">
      <div class="add-div">名称</div>
      <el-input class="add-input" v-model="commodity.bname"  clearable />
      <div class="add-div">类别</div>
      <el-input class="add-input" v-model="commodity.cname"  clearable />
      <div class="add-div">品牌</div>
      <el-input class="add-input" v-model="commodity.dname"  clearable />
      <div class="add-div">型号</div>
      <el-input class="add-input" v-model="commodity.dmodel"  clearable />
      <div class="add-div">计量单位</div>
      <el-input class="add-input" v-model="commodity.dmeasuring"  clearable />
      <div class="add-div">市场价</div>
      <el-input class="add-input" v-model="commodity.dmarket_price"  clearable />
      <div class="add-div">销售价</div>
      <el-input class="add-input" v-model="commodity.dsale_price"  clearable />
      <div class="add-div">成本价</div>
      <el-input class="add-input" v-model="commodity.dcost_price"  clearable />
      <div class="add-div">商品缩略图</div>
      <el-input class="add-input" v-model="commodity.dthumbnail"  clearable />
      <div class="add-div">商品介绍</div>
      <el-input class="add-input" v-model="commodity.dintroduction"  clearable />
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addView = false">取消</el-button>
        <el-button type="primary" @click="addCommodity">确认</el-button>
      </span>
    </template>
  </el-dialog>

<!--  增加品牌-->
</template>

<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
//增加商品
let commodity = reactive({
  bname:"",
  cname:"",
  dname:"",
  dmodel:"",
  dmeasuring:"",
  dmarket_price:"",
  dsale_price:"",
  dcost_price:"",
  dthumbnail:"",
  dintroduction:"",
});
let addView = ref(false);
const addCommodity=()=>{
  let flag = false;
  Object.keys(commodity).forEach((i)=>{
    if(commodity[i] === "") flag = true;
  })
  console.log(flag);
  if(flag === true){
    alert("请输入完整信息")
  }else {
    axios.post("/commodity/add",commodity)
        .then(res=>{
          alert(res.data.error_message);
        })
        .catch(err=>{
          alert(err.data);
        });

  }
};
</script>

<style scoped>
@import "@/assets/css/add.css";
.left-box {
  width: 20%;
  height: 100%;
}
.right-box {
  width: 80%;
  height: 662px;
}
.right-top {
  box-sizing: border-box;
  width: 100%;
  height: 20%;
  background-color: aqua;
}
.right-bottom {
  width: 100%;
  height: 80%;
  background-color: antiquewhite;
}

</style>
