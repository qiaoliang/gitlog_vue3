<template>
<h3 :style="{color}">grandSon 组件</h3>
</template>
<script lang='ts'>
import { defineComponent,inject,ref } from 'vue'

export default defineComponent({
    name: 'GrandSon',
    setup(){
        //注入
        const color=inject('gson_color') //从祖父那里得到的
        return{
             color,
        
        }
    }
})
</script>