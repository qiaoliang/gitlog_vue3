<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodoItem" />
      <MyList :todos="todos" :delTodo="delTodoItem" :updateTodo="updateItem" />
      <MyFooter :todos="todos" :clearAllCompleted="clearAllCompleted"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
import TodoItem from "./types/todo";
export default defineComponent({
  name: "App",
  components: { MyHeader, MyList, MyFooter },

  setup() {
    const state = reactive<{ todos: TodoItem[] }>({
      todos: [
        { id: 1, name: "宝马", isCompleted: false },
        { id: 2, name: "奥迪", isCompleted: true },
        { id: 3, name: "奔驰", isCompleted: false },
      ],
    });
    //为列表添加数据
    const addTodoItem = (todo: TodoItem) => {
      state.todos.unshift(todo);
    };
    //为列表删除数据
    const delTodoItem = (id: number) => {
      state.todos.splice(id, 1);
    };
    // 修改 todoItem 中的 isCompleted 的状态
    const updateItem = (todo: TodoItem, isCompleted: boolean) => {
      todo.isCompleted = isCompleted;
      console.log(todo);
    };
    //删除已经完成的数据
    const clearAllCompleted = () => {
      console.log("App.vue = clearAllCompleted");
      state.todos = state.todos.filter((item) => !item.isCompleted);
    };
    return {
      ...toRefs(state),
      addTodoItem,
      delTodoItem,
      updateItem,
      clearAllCompleted,
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
