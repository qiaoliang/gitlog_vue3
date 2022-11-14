<template>
  <li :style="{ backgroundColor: bgcolor, color: ftcolor }">
    <div id="div_file_wrap">
      <div id="div_file_id">revInfo.id</div>
      <div id="div_file_origin">revInfo.brief</div>
      <div id="div_file_revid">revInfo.rev</div>
      <div id="div_file_target">revInfo.detail</div>
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ChangedFile from "../types/ChangedFile";
export default defineComponent({
  name: "RevDetailFile",
  setup() {
    // Item的前景色
    const bgcolor = ref("white");
    // Item的背景色
    const ftcolor = ref("black");
    // mouse action

    return {
      bgcolor,
      ftcolor,
    };
  },
});
</script>
