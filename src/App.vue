<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Suspense>
        <template #default>
          <FileList />
        </template>
        <template v-slot:fallback>
          <h2>loading Address ....</h2>
        </template>
      </Suspense>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FileList from "./components/FileList.vue";
export default defineComponent({
  name: "App",
  components: { FileList },

  setup() {},
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
