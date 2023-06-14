<template>
  <div class="center-box" >
    <div class="card-box" v-for="(i,index) in listBrand" :key="index">
      <img :src="i.bpicture">
      <div class="buttom-box">
        <div class="text">{{i.bname}}</div>
        <el-button type="primary" round class="my-url">
          <a :href="i.url" target="_blank"
             style="color: white;text-decoration-line: none">进入官网</a>
        </el-button>
        <div style="width: 100%;text-align: right;height: 30px;">
          <edit-two style="margin-right: 5px;cursor: pointer" theme="outline" size="24" fill="#ffe008" />
          <delete  style="cursor: pointer"
                   theme="outline" size="24" fill="#fa1951" @click="deleteBrand(i.bname)"/>
        </div>

      </div>

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
      <div class="add-div">品牌网址</div>
      <el-input class="add-input" v-model="brand.url"  clearable />
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
import {EditTwo,Delete} from "@icon-park/vue-next";
import {reactive, ref} from "vue";
import axios from "axios";
import {ElMessage, ElMessageBox} from "element-plus";
// 获取全部品牌
let listBrand =reactive([]);
const getAll=()=>{
  axios.post("/brand/getAll")
      .then(res=>{
        listBrand.length = 0;
        for (let i = 0; i < res.data.length; i++) {
          listBrand.push({
            bname: res.data[i].bname,
            bpicture: res.data[i].bpicture,
            url: res.data[i].url
          })
        }
      })
      .catch(err=>{
        alert(err);
      });
}
getAll()
// 增加品牌
let brand = reactive({
  bname: "",
  bpicture: "",
  url:"",
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
          if (res.data.error_message === 'success')
          {
            ElMessage({
              message: '添加成功',
              type: 'success',
            })
            getAll();
            Object.keys(brand).forEach((i)=>{
              brand[i] = "";
            })
          }
        })
        .catch(err=>{
          alert(err.data);
        });

  }
};

//删除品牌
const deleteBrand=(bname)=>{
  ElMessageBox.confirm(
      '你确定想删除这个品牌吗',
      '提示',
      {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
      }
  )
      .then(() => {
        axios.post("/brand/delete",{bname:bname})
            .then(res=>{
              if (res.data.error_message === 'success')
              {
                ElMessage({
                  message: '删除成功',
                  type: 'success',
                })
                getAll();
              }
            })
            .catch(err=>{
              alert(err.data);
            });
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消',
        })
      })
}
</script>

<style scoped>
@import "@/assets/css/add.css";
.center-box{
  background-color: rgba(0,0,0,0.1);
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  margin: 10px auto;
  width: 84%;
  min-height: auto;
}
.card-box{
  padding: 5px;
  width: 200px;
  min-height: 250px;
  background-color: white;
  border: 1px solid var(--el-border-color);
  border-radius: 15px;
  box-shadow: var(--el-box-shadow-light);
  margin-top: 20px;
  margin-left: 37px;
  margin-bottom: 10px;
}
img{
  width: 100%;
  height: 200px;
  border-radius: 15px;
}
.buttom-box{
  line-height: 20px;
  text-align: center;
  width: 100%;
  min-height: 50px;
}
.my-url{
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  width: 50%;
}
.text{
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  width: 100%;
  height: 40%;
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