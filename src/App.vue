<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <FileList :files="files"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import FileList from "./components/FileList.vue";
import ChangedFile from "./types/ChangedFile";
import { readFiles } from "./utils/localStorage";
export default defineComponent({
  name: "App",
  components: { FileList},

  setup() {
    const state = reactive<{ files: ChangedFile[] }>({
      files: [
        { id: 1, rev: "3433535",origin:"1.txt", target:"1.png", isCompleted: false },
        { id: 2, rev: "ewete54",origin:"2.txt", target:"2.png", isCompleted: true },
        { id: 3, rev: "ttttt33",origin:"3.txt", target:"3.png", isCompleted: false },
      ],
    });
    //界面加载完毕后，再读数据
    onMounted(() => {
    })
    //为列表添加数据
    const addTodoItem = (todo: ChangedFile) => {
      state.files.unshift(todo);
    };
    //为列表删除数据
    const delTodoItem = (id: number) => {
      state.files.splice(id, 1);
    };
    // 修改 todoItem 中的 isCompleted 的状态
    const updateItem = (afile: ChangedFile, isCompleted: boolean) => {
      afile.isCompleted = isCompleted;
      console.log(afile);
    };
    //删除已经完成的数据
    const clearAllCompleted = () => {
      console.log("App.vue = clearAllCompleted");
      state.files = state.files.filter((item) => !item.isCompleted);
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
