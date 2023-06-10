<template></template>

<script setup>
import { useRoute } from "vue-router";
//用户登录信息
const myRoute = useRoute().query;
console.log(myRoute);
</script>
