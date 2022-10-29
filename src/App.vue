<template>
  <div class="todo-container">
    <div class="todo-wrap">
      
      <Suspense>
    <template #default>
      <!-- #default 就相当于 v-slot:default  -->
      <FileList />
    </template>
    <template v-slot:fallback>
      <!-- loading 的预备内容，防止白屏 -->
      <h2>loading Address ....</h2>
    </template>
  </Suspense>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, } from "vue";
import FileList from "./components/FileList.vue";
import ChangedFile from "./types/ChangedFile";
export default defineComponent({
  name: "App",
  components: { FileList},

  setup() {
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
