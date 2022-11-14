<template>
  <li :style="{ backgroundColor: bgcolor, color: ftcolor }">
    <div id="div_file_wrap">
      <div id="div_file_id">{{fileitem.id}}</div>
      <div id="div_file_origin">{{fileitem.rev}}</div>
      <div id="div_file_revid">{{fileitem.origin}}</div>
      <div id="div_file_target">{{fileitem.target}}</div>
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ChangedFile from "../types/ChangedFile";
export default defineComponent({
  name: "RevDetailFile",
  props: {
    fileitem: {
      type: Object as () => ChangedFile, //函数返回的是 ChangedFile 类型
      required: true,
    },
  },
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
