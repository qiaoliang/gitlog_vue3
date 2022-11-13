<template>
  <div class="app-container">
    <div class="filelist-wrap">
      <Suspense>
        <template #default>
          <FileList />
        </template>
        <template v-slot:fallback>
          <h2>loading Address ....</h2>
        </template>
      </Suspense>
    </div>
    <div class="revlist-wrap">
      <RevList />
    </div>
    <div class="revdetail-wrap">
      <div class="div_detail_rev"><strong>Rev:</strong> Rev_1</div>
      <div class="div_detail_brief"><strong>brief:</strong> i am brief.</div>
      <div class="div_detail_detail"><strong>detail:</strong> i am detail.</div>
      <div class="div_detail_files">
        <div><strong>变更的文件如下:</strong></div>
        <div class="div_detail_fileitem">file1</div>
        <div class="div_detail_fileitem">file2</div>
        <div class="div_detail_fileitem">file3</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FileList from "./components/FileList.vue";
import RevList from "./components/RevList.vue";
export default defineComponent({
  name: "App",
  components: { FileList, RevList },

  setup() {},
});
</script>
<style scoped>
.app-container {
  display: flex;
  flex-direction:row;
}
.app-container .filelist-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.app-container .revlist-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.app-container .revdetail-wrap {
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  width:500px;
}
</style>
