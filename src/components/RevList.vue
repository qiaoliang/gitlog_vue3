<template>
  <ul class="revlist-main">
    <h2>与 xxx file 相关的所有版本变更</h2>
    <hr />
    <li>
      <div id="div_rev_wrap">
        <div id="div_rev_id">Revision</div>
        <div id="div_rev_brief">Commit Brief</div>
      </div>
    </li>
    <RevItem
      v-for="(item) in revisions"
      :revItem="item"
    />  </ul>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import RevItem from "./RevItem.vue";
import RevDetail from "../types/RevDetail";
import axios from "axios";
export default defineComponent({
  name: "RevList",
  components: {
    RevItem,
  },
  setup() {
    const revisions = reactive<RevDetail[]>([]);
    onMounted(async () => {
      //const res = await axios.get("http://localhost:1313/getRevision");
      const res = await axios.get("/data/revlist.json");
      revisions.push(...res.data);
      console.log(revisions);
    });
    return {
      revisions,
    };

  },
});
</script>
<style scoped>
/*list*/
.revlist-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.revlist-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
