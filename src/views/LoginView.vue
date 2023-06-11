<template>
  <div class="back-box">
    <div class="container">
      <div class="login-box" ref="lb">
        <h2 ref="lt" class="login-title"><span>已有账号去</span>登录</h2>
        <div class="input-box">
          <input type="text" v-model="loginInfo.tel" placeholder="用户名" />
          <input
            type="password"
            placeholder="密码"
            v-model="loginInfo.password"
          />
        </div>
        <button @click="login">登录</button>
      </div>
      <div class="register-box slide-up" ref="rb">
        <div class="center">
          <h2 class="register-title" ref="rt"><span>没有账号，去</span>注册</h2>
          <div class="input-box">
            <input
              type="text"
              placeholder="电话号码"
              v-model="registerInfo.tel"
            />
            <input
              type="password"
              placeholder="密码"
              v-model="registerInfo.password"
            />
            <input type="text" placeholder="姓名" v-model="registerInfo.name" />
            <input
              type="text"
              placeholder="地址"
              v-model="registerInfo.address"
            />
          </div>
          <button @click="register">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>
<script setup>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
import router from "@/router";
// 控制登录与注册切换
const rt = ref();
const rb = ref();
const lt = ref();
const lb = ref();
onMounted(() => {
  rt.value.addEventListener("click", () => {
    if (rb.value.classList.contains("slide-up")) {
      rb.value.classList.remove("slide-up");
      lb.value.classList.add("slide-up");
    }
  });

  lt.value.addEventListener("click", () => {
    if (lb.value.classList.contains("slide-up")) {
      rb.value.classList.add("slide-up");
      lb.value.classList.remove("slide-up");
    }
  });
});

//登录
let loginInfo = reactive({
  tel: "",
  password: "",
});
const login = () => {
  if (loginInfo.tel === "" || loginInfo.password === "") {
    alert("请输入完整的信息");
  } else {
    axios
      .post("client/login", loginInfo)
      .then((res) => {
        if (res.data.error_message === "success") {
          alert("登录成功");
          if (loginInfo.tel === "0000") {
            router.push({
              path: "/manager",
              query: {
                tel: loginInfo.tel,
              },
            });
          } else {
            router.push({
              path: "/main",
              query: {
                tel: loginInfo.tel,
              },
            });
          }
        } else {
          alert(res.data.error_message);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
};
//注册
let registerInfo = reactive({
  tel: "",
  name: "",
  password: "",
  address: "",
});
const register = () => {
  if (
    registerInfo.name === "" ||
    registerInfo.password === "" ||
    registerInfo.address === "" ||
    registerInfo.tel === ""
  ) {
    alert("请输入完整的信息");
  } else {
    axios
      .post("client/register", registerInfo)
      .then((res) => {
        if (res.data.error_message === "success") {
          alert("注册成功");
          Object.keys(registerInfo).forEach((i) => {
            registerInfo[i] = "";
          });
        } else {
          alert(res.data.error_message);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.back-box {
  /* margin: -8px 0 0 -8px;
  width: 100%;
  height: 100%; 
  与下面的inset似乎一样的效果*/
  inset: 0;
  position: fixed;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background: url("../assets/4.jpg");
  background-size: cover;
}
.container {
  background-color: rgba(0, 0, 0, 0.2);
  width: 420px;
  height: 550px;
  border-radius: 15px;
  left: 68%;
  overflow: hidden;
  position: relative;
}
.container::after {
  content: "";
  position: absolute;
  /* inset相当于top、left、bottom、right的缩写 */
  inset: 0;
  /* background: url("../assets/login.jpg") no-repeat; */
  background-size: 1000px 550px;
  background-position: 43% -30px;
  opacity: 0.8;
}
/* 注册区域（包含登录区域相同的） */
.login-box {
  /* display: none; */
  width: 70%;
  position: absolute;
  z-index: 1;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s ease;
}
.register-title,
.login-title {
  color: #fff;
  font-size: 45px;
  text-align: center;
}
.login-title span,
.register-title span {
  color: rgba(0, 0, 0, 0.4);
  display: none;
}
.login-box .input-box,
.register-box .input-box {
  overflow: hidden;
  margin-top: 40px;
  opacity: 1;
  visibility: visible;
  transition: 0.6s ease;
}
.login-box input,
.register-box input {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
  padding: 8px 0;
  text-indent: 5px;
  outline: none;
}
.login-box input {
  margin-bottom: 20px;
}
.login-box input::placeholder,
.register-box input::placeholder {
  color: rgba(0, 0, 0, 1);
  font-size: 15px;
}
.login-box button,
.register-box button {
  width: 100%;
  padding: 15px 45px;
  margin-top: 30px;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 15px;
  color: rgba(225, 225, 225, 0.7);
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: 0.3 ease;
}
.login-box button:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.register-box button:hover {
  background-color: rgba(92, 122, 202, 0.7);
}
/* 注册区域 */
.register-box {
  position: absolute;
  inset: 0;
  top: 20%;
  z-index: 2;
  background-color: #fff;
  transition: 0.3s ease;
}
.register-box::before {
  content: "";
  background-color: #fff;
  width: 200%;
  height: 250px;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translate(-50%);
}
.register-box .center {
  width: 70%;
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
}
.register-title {
  color: black;
}
.register-box button {
  background-color: rgba(92, 122, 202, 1);
}
/* 注册登录区域收起 */
.register-box.slide-up {
  top: 90%;
}
.register-box.slide-up .center {
  top: 10%;
  transform: translate(-50%, 0);
}
.register-box.slide-up .register-title,
.login-box.slide-up .login-title {
  font-size: 16px;
  cursor: pointer;
}
.register-box.slide-up .register-title span,
.login-box.slide-up .login-title span {
  margin-right: 5px;
  display: inline-block;
}
.register-box.slide-up .input-box,
.register-box.slide-up button,
.login-box.slide-up .input-box,
.login-box.slide-up button {
  opacity: 0;
  visibility: hidden;
}
.login-box.slide-up {
  top: 6%;
  transform: translate(-50%, 0%);
}
</style>
