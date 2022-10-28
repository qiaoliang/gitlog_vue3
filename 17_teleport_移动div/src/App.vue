<template>
<h2>App 父级组件</h2>
<hr>
<ModelButton/>
</template>
<script lang='ts'>
import { defineComponent,ref } from 'vue'
import ModelButton from './components/ModelButton.vue'
export default defineComponent({
  name: 'APP',
  components:{
    ModelButton
  },
  setup(){
    const state=ref(null)
    
    return{
       state,
    
    }
  }
})
</script>