<template>
  <ul class="filelist-main">
  <h2>新增的文件</h2>
  <hr>
  <li>
  <div id="div_file_wrap">
      <div id="div_file_id">ID</div>
      <div id="div_file_origin">origin</div>
      <div id="div_file_revid">revId</div>
      <div id="div_file_target">target</div>
    </div>
  </li>
    <FileItem
      v-for="(item) in files"
      :afile="item"
      @fileHandler ="emitFileHandler"
    />
  </ul>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import FileItem from "./FileItem.vue";
import ChangedFile from "../types/ChangedFile";
import axios from "axios";
export default defineComponent({
  name: "FileList",
  components: {
    FileItem,
  },
  setup(props,{attrs,emit}) {
    const files = reactive<ChangedFile[]>([]);
    onMounted(async () => {
      //const res = await axios.get("http://localhost:1313/addedfiles");
      const res = await axios.get("/data/changedFile.json");
      files.push(...res.data);
    });
    const emitFileHandler = function(revid:string){
      window.alert("get__"+revid +"__from file item")
      emit('fileHandler',revid)
    } 
    return {
      files,
      emitFileHandler,
    };
  },
});
</script>
<style scoped>
/*list*/
.filelist-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.filelist-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
