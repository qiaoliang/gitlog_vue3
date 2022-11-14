<template>
  <div class="app-container">
    <div class="filelist-wrap">
      <Suspense>
        <template #default>
          <FileList @fileHandler="fileHandler" />
        </template>
        <template v-slot:fallback>
          <h2>loading Address ....</h2>
        </template>
      </Suspense>
    </div>
    <div class="revlist-wrap">
      <Suspense>
        <template #default>
          <RevList :revs="revs" />
        </template>
        <template v-slot:fallback>
          <h2>loading Rev ....</h2>
        </template>
      </Suspense>
    </div>
    <div class="revdetail-wrap">
      <div class="div_detail_rev"><strong>Rev:</strong> Rev_1</div>
      <div class="div_detail_brief"><strong>brief:</strong> i am brief.</div>
      <div class="div_detail_detail"><strong>detail:</strong> i am detail.</div>
      <div class="div_detail_files">
        <div><strong>变更的文件如下:</strong></div>
        <hr />
        <div class="div_detail_fileitem">file1</div>
        <div class="div_detail_fileitem">file2</div>
        <div class="div_detail_fileitem">file3</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import FileList from "./components/FileList.vue";
import RevList from "./components/RevList.vue";
import RevDetail from "./types/RevDetail";
export default defineComponent({
  name: "App",
  components: { FileList, RevList },

  setup() {
    const state = reactive<{ revs: RevDetail[] }>({
      revs: [],
    });
    const fileHandler = function (origin: string) {
      state.revs=[]
      axios.get("/data/revlist_1.json").then((res) => {
        state.revs.push(...res.data);
      });
    };
    return {
      ...toRefs(state),
      fileHandler,
    };
  },
});
</script>
<style scoped>
.app-container {
  display: flex;
  flex-direction: row;
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
  width: 1000px;
}

.app-container .revdetail-wrap {
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 500px;
}
</style>
