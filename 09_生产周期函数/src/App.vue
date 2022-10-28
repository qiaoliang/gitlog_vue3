<template>
  <h2>父组件</h2>
  <button @click="isShow=!isShow">切换显示</button>
  <Child v-if="isShow"></Child>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
//import Child from './components/Child2.x.vue';
import Child from './components/Child3.0.vue';

export default defineComponent({
  name: 'APP',
  components:{
    Child
  },
  setup(){
    const isShow= ref(true)
    return{
      isShow
    }
  }
 })
</script>