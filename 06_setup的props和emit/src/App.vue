<template>
  <div>{{msg}}
  </div>
  <button @click="msg +='====='">更新数据</button>
  <Child :parentmsg=msg  msg2="good" @xxx="xxx"></Child>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
import Child from './components/Child.vue';
export default defineComponent({
  name: 'APP',
  components:{
    Child
  },
  setup(){
    const xxx= function(str:string){
      msg.value +=str
    }
    const msg = ref("how are you")
    return{
      msg,
      xxx,
    }
  }
 })
</script>