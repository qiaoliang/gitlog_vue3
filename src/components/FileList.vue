<template>
  <ul class="todo-main">
    <FileItem
      v-for="(item, index) in files"
      :key="item.id"
      :afile="item"
      :id="index"
    />
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import FileItem from "./FileItem.vue";
export default defineComponent({
  name: "FileList",
  components: {
    FileItem,
  },
  props: ["files", "delTodo","updateTodo"],
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
