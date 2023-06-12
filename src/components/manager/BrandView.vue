<template>
  <div class="center-box" >
    <div class="card-box" v-for="(i) in a" :key="i">
      <img src="https://ts1.cn.mm.bing.net/th/id/R-C.466bb61cd7cf4e8b7d9cdf645add1d6e?rik=YRZKRLNWLutoZA&riu=http%3a%2f%2f222.186.12.239%3a10010%2fwmxs_161205%2f002.jpg&ehk=WEy01YhyfNzzQNe1oIqxwgbTnzY7dMfmZZHkqpZB5WI%3d&risl=&pid=ImgRaw&r=0">
      <div class="text">hhh</div>
    </div>
    <div class="add-box">
      <div class="add" @click="addView = true"></div>
    </div>
  </div>
  <el-dialog v-model="addView" title="新建品牌" width="30%" center>
    <div style="display: flex;flex-wrap: wrap">
      <div class="add-div">品牌名称</div>
      <el-input class="add-input" v-model="brand.bname"  clearable />
      <div class="add-div">品牌图片</div>
      <el-input class="add-input" v-model="brand.bpicture"  clearable />
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addView = false">取消</el-button>
        <el-button type="primary" @click="addBrand">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
// 获取全部品牌
let  a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// 增加品牌
let brand = reactive({
  bname: "",
  bpicture: "",
});
let addView = ref(false);
const addBrand=()=>{
  let flag = false;
  Object.keys(brand).forEach((i)=>{
    if(brand[i] === "") flag = true;
  })
  if(flag === true){
    alert("请输入完整信息")
  }else {
    axios.post("/brand/add",brand)
        .then(res=>{
          console.log(res.data);
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
.center-box{
  background-color: rgba(0,0,0,0.1);
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  margin: 10px auto;
  width: 80%;
  min-height: auto;
}
.card-box{
  width: 200px;
  height: 250px;
  background-color: white;
  margin-top: 20px;
  margin-left: 37px;
  margin-bottom: 10px;
}
img{
  width: 100%;
  height: 80%;
}
.text{
  line-height: 20px;
  text-align: center;
  width: 100%;
  height: 20%;
  background-color: azure;
}
.add-box{
  width: 200px;
  height: 250px;
  margin-top: 20px;
  margin-left: 37px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add {
  border: 5px solid;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  color: rgba(64,158,255,0.8);
  transition: color .25s;
  position: relative;
}
.add::before{
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  margin-left: -35px;
  margin-top: -5px;
  border-top: 10px solid;
}
.add::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  height: 70px;
  margin-left: -5px;
  margin-top: -35px;
  border-left: 10px solid;
}
.add:hover {
  color: #409EFF;
}

</style>