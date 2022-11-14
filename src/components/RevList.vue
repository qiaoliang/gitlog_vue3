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
      v-for="(item) in revs"
      :revItem="item"
    />  </ul>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import RevItem from "./RevItem.vue";
import RevDetail from "../types/RevDetail";
export default defineComponent({
  name: "RevList",
  components: {
    RevItem,
  },
  props: {
    revs: {
      type: Object as () => RevDetail[], //函数返回的是 RevDetail 类型
      required: true,
    },
  },
  setup() {

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
