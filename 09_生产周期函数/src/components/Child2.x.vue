<template>
  <h2>子组件</h2>
  <h4>msg:{{msg}}</h4>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "APP",
  //vue2.x 中的生命周期
  beforeCreate() {
    console.log("2.x beforeCreate");
  },
  created() {
    console.log("2.x created");
  },
  beforeMount() {
    console.log("2.x beforeMount");
  },
  mounted() {
    console.log("2.x mounted");
  },
  beforeUpdate() {
    console.log("2.x beforeUpdate");
  },
  updated() {
    console.log("2.x updated");
  },
  beforeUnmount() {
    console.log("2.x beforeUnmount");
  },
  unmounted() {
    console.log("2.x unmounted");
  },
  setup() {
    const msg = ref("abc");
    // 更新数据的事件
    const update=()=>{
        msg.value +="==add---"
    }
    return {
      msg,
      update
    };
  },
});
</script>
