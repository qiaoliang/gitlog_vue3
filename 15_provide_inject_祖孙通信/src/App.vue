<template>
<h2>通过 provide 和 inject 实现祖孙组件通信</h2>
<p>当前的颜色：{{color}}</p>
<button @click="color='red'">红色</button>
<button @click="color='yellow'">黄色</button>
<button @click="color='green '">绿色</button>
<hr/>
<Son></Son>
</template>
<script lang='ts'>
import { defineComponent,provide,ref } from 'vue'
import Son from './components/Son.vue'
export default defineComponent({
  name: 'APP',
  components:{
    Son
  },
  setup(){
    const color=ref('red')
    //提供数据
    provide('gson_color',color)
    return{
       color,
    
    }
  }
})
</script>