<template>
  <li @mouseenter="mouseHander(true)" @mouseleave="mouseHander(false)" :style="
  {backgroundColor:bgcolor,color:ftcolor}">
    <label>
      <input type="checkbox" v-model="todo.isCompleted" />
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="del">删除</button>
  </li>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import TodoItem from "../types/todo";
export default defineComponent({
  name: "MyItem",
  props: {
    todo:{
      type:Object as () => TodoItem, //函数返回的是 TodoItem 类型
      required:true,
    },
    delTodo:{
      type:Function,
      required:true
    },
    id:{
      type:Number,
      required:true
    }
  },
  setup(props) {
    // Item的前景色
    const bgcolor = ref("white")
    // Item的背景色
    const ftcolor = ref("black")
    // 删除按钮默认不显示
    const isShow = ref(false)
    // mouse action
    const mouseHander = (flag:boolean)=>{
      if(flag){
        bgcolor.value ='pink'
        ftcolor.value = 'green'
        isShow.value = true
      }else{
        bgcolor.value ='white'
        ftcolor.value = 'black'
        isShow.value = false
      }
    };
    const del = () =>{
      if(window.confirm('确定要删除吗？')){
        props.delTodo(props.id)
      }
    }

    return {
      mouseHander,
      bgcolor,
      ftcolor,
      isShow,
      del
  
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
