<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodoItem"/>
      <MyList :todos="todos" />
      <MyFooter/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
import TodoItem from "./types/todo"
export default defineComponent({
  name: "App",
  components: { MyHeader, MyList, MyFooter },

  setup() {
    const state = reactive<{todos:TodoItem[]}>({
      todos: [
        { id: 1, name: "宝马", isCompleted: false },
        { id: 2, name: "奥迪", isCompleted: true },
        { id: 3, name: "奔驰", isCompleted: false },
      ],
    });
    //为列表增加添加数据
    const addTodoItem =(todo)=>{
      state.todos.unshift(todo)
    }
    return {
      ...toRefs(state),
      addTodoItem
    };
  },
});
</script>
<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
