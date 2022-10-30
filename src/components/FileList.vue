<template>
  <ul class="todo-main">
    <FileItem
      v-for="(item, index) in files"
      :key="item.id"
      :afile="item"
      :id="item.rev"
    />
  </ul>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import FileItem from "./FileItem.vue";
import ChangedFile from "../types/ChangedFile";
import axios from "axios";
import useRequest from "../hooks/useRequest";
export default defineComponent({
  name: "FileList",
  components: {
    FileItem,
  },
  setup() {
    const state = reactive<{ files: ChangedFile[]|null }>({
      files: [],
    });
    onMounted(async () => {
      const res = await axios.get("http://localhost:1313/addedfiles");
      //const res = await axios.get("/data/changedFile.json");
      state.files = res.data;
      console.log(res);
    });
    console.log(state.files);
    return {
      ...toRefs(state),
    };
  },
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
