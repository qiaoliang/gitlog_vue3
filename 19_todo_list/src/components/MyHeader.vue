<template>
  <div class="todo-header">
    <input type="text" v-model="name" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MyHeader",
  props: {
    addTodo:{
      type:Function, // 这个prop 是Function 类型
      required:true, //App 必须传过来这个 prop
    }
   },

  setup(props,ctx) {
    const name=ref('')
    //响应输入框的回车事件函数 add
    const add = ()=>{
      //获取文本框中输入的数据，判空
      const text = name.value
      if(!text.trim()) return
      const todo ={
        id:Date.now(),
        name:text,
        isCompleted:false
      }
      props.addTodo(todo)
      //清空文本框
      name.value = ""
    };

    return {
      add,
      name
    };
  },
});
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
