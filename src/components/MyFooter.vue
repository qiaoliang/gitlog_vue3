<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAllCompleted">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import TodoItem from "../types/todo";
export default defineComponent({
  name: "MyFooter",
  props: {
    todos: {
      type: Array as () => TodoItem[],
      required: true,
    },
    clearAllCompleted: {
      type: Function,
      required: true,
    },
  },
  setup(props, ctx) {
    const doneTotal = computed(() => {
      return props.todos.reduce(
        (pre, todo, index) => pre + (todo.isCompleted ? 1 : 0),
        0
      );
    });
    //全选或全不选
    const isAll = computed({
      get() {
        return props.todos.every((item) => item.isCompleted == true);
      },
      set(val) {
        props.todos.forEach((item) => (item.isCompleted = val));
      },
    });
    const clearAllCompleted = () => {
      console.log("Myfooter = clearAllCompleted");
      props.clearAllCompleted();
    };
    const total = computed(() => {
      return props.todos.length;
    });
    return {
      total,
      doneTotal,
      isAll,
      clearAllCompleted,
    };
  },
});
</script>
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: relative;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
