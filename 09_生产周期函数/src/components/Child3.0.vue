<template>
  <h2>子组件</h2>
  <h4>msg:{{msg}}</h4>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onErrorCaptured } from "vue";

export default defineComponent({
  name: "APP",

  setup() {
    console.log("3.0 的 Setup");
    const msg = ref("abc");
    // 更新数据的事件
    const update=()=>{
        msg.value +="==add---"
    }
    //vue3.0 中的生命周期
    onBeforeMount(()=>{
      console.log("3.0 中的 onBeforeMount")
    })
    onMounted(()=>{
      console.log("3.0 中的 onMounted")
    })
    onBeforeUpdate(()=>{
      console.log("3.0 中的 onBeforeUpdate")
    })
    onUpdated(()=>{
      console.log("3.0 中的 onUpdated")
    })
    onBeforeUnmount(()=>{
      console.log("3.0 中的 onBeforeUnmount")
    })
    onUnmounted(()=>{
      console.log("3.0 中的 onUnmounted")
    })
    onErrorCaptured(()=>{
      console.log("3.0 中的 onErrorCaptured")
    })
    return {
      msg,
      update
    };
  },
});
</script>
