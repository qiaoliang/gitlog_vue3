<template>
  <ul class="todo-main">
    <MyItem
      v-for="(item, index) in todos"
      :key="item.id"
      :todo="item"
      :delTodo="delTodo"
      :id="index"
      :updateTodo="updateTodo"
    />
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import MyItem from "./MyItem.vue";
export default defineComponent({
  name: "MyList",
  components: {
    MyItem,
  },
  props: ["todos", "delTodo","updateTodo"],
});
</script>
<style scoped>
/*list*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
