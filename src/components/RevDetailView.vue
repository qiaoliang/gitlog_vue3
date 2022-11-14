<template>
  <div class="revdetail_main">
    <div class="div_detail_rev"><strong>Revision:</strong> {{revInfo.rev}}</div>
    <div class="div_detail_brief"><strong>brief:</strong> {{revInfo.brief}}</div>
    <div class="div_detail_detail"><strong>detail:</strong> {{revInfo.detail}}</div>
  </div>
  <div class="div_detail_files">
    <div><strong>变更的文件如下:</strong></div>
    <hr />
    <ul class="revdetail_main">
      <RevDetailFile  v-for="changedfile in revInfo.changes" :fileitem="changedfile" />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import RevDetail from "../types/RevDetail";
import RevDetailFile from "./RevDetailFile.vue";
export default defineComponent({
  name: "RevDetailView",
  components: {
    RevDetailFile,
  },
  props: {
    revInfo: {
      type: Object as () => RevDetail, //函数返回的是 RevDetail 类型
      required: true,
    },
  },
  setup(props,{emit}) {
  },
});
</script>
<style scoped>
/*list*/
.revdetail-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.revdetail-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
