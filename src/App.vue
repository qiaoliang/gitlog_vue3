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
          <RevList :revs="revs" @revHandler="revHandler" />
        </template>
        <template v-slot:fallback>
          <h2>loading Rev ....</h2>
        </template>
      </Suspense>
    </div>
    <div class="revdetail-wrap">
      <RevDetailView :revInfo="revInfo"/>
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import FileList from "./components/FileList.vue";
import RevList from "./components/RevList.vue";
import RevDetailView from "./components/RevDetailView.vue";
import RevDetail from "./types/RevDetail";
export default defineComponent({
  name: "App",
  components: { FileList, RevList ,RevDetailView},

  setup() {
    const state = reactive<{ revs: RevDetail[] }>({
      revs: [],
    });
    const fileHandler = function (origin: string) {
      state.revs = [];
      axios.get("/data/revlist_1.json").then((res) => {
        state.revs.push(...res.data);
      });
    };
    const revInfo = reactive({ id: 0, rev: "", brief: "", detail: "",changes:[] });
    const revHandler = function (revision: string) {
      revision = "175c40a"
      window.alert("rev is changing " + revision);
      //axios.get("http://localhost:1313/revinfo/"+revision).then((res) => {
      axios.get("/data/revdetail.json").then((res) => {
        let result = res.data;
        console.log(result)
        revInfo.id = result.id;
        revInfo.rev = result.rev;
        revInfo.brief = result.brief;
        revInfo.detail = result.detail;
        revInfo.changes = result.changes;
      });
    };
    return {
      ...toRefs(state),
      fileHandler,
      revInfo,
      revHandler,
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
  background-color: aquamarine;
}
.app-container .revlist-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 1000px;
  background-color: bisque;
}

.app-container .revdetail-wrap {
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 500px;
  background-color: lightblue;
}
</style>
