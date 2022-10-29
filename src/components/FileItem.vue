<template>
  <li @mouseenter="mouseHander(true)" @mouseup="mouseHander(true)" @mouseleave="mouseHander(false)" :style="
  {backgroundColor:bgcolor,color:ftcolor}">
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ afile.id }}</span>
      <span>{{ afile.rev }}</span>
      <span>{{ afile.origin }}</span>
      <span>{{ afile.target }}</span>
      </label>
  </li>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import ChangedFile from "../types/ChangedFile";
export default defineComponent({
  name: "FileItem",
  props: {
    afile:{
      type:Object as () => ChangedFile, //函数返回的是 ChangedFile 类型
      required:true,
    },
    id:{
      type:String,
      required:true
    }
  },
  setup(props) {
    // Item的前景色
    const bgcolor = ref("white")
    // Item的背景色
    const ftcolor = ref("black")
    // mouse action
    const mouseHander = (flag:boolean)=>{
      if(flag){
        bgcolor.value ='pink'
        ftcolor.value = 'green'
      }else{
        bgcolor.value ='white'
        ftcolor.value = 'black'
      }
    };
    //计算checkbox
    const isCompleted = computed({
      get(){
        return props.afile.isCompleted
      },
      set(val){
        
      }
    })

    return {
      mouseHander,
      bgcolor,
      ftcolor,
      isCompleted
  
    };
  },
});
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
