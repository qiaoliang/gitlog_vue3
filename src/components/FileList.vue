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
      files: [
        { id: 1, rev: "3433535", origin: "1.txt", target: "1.png", isCompleted: false },
        { id: 2, rev: "ewete54", origin: "2.txt", target: "2.png", isCompleted: true },
        { id: 3, rev: "ttttt33", origin: "3.txt", target: "3.png", isCompleted: false },
      ],
    });
    console.log(state.files);
    onMounted(() => {
      const { loading, data, errorMsg } = useRequest<ChangedFile[]|null>("/data/changedFile.json");
      state.files = data.value
      console.log(state.files);
      return{ 
        ...toRefs(state),
     }
    });
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
