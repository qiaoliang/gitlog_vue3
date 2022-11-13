<template>
  <li
    @mouseenter="mouseHander(true)"
    @click="clickHander()"
    @mouseleave="mouseHander(false)"
    :style="{ backgroundColor: bgcolor, color: ftcolor }"
  >
    <div id="div_file_wrap">
      <div id="div_file_id">{{ afile.id }}</div>
      <div id="div_file_origin">{{ afile.origin }}</div>
      <div id="div_file_revid">{{ afile.rev }}</div>
      <div id="div_file_target">{{ afile.target }}</div>
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ChangedFile from "../types/ChangedFile";
export default defineComponent({
  name: "FileItem",
  props: {
    afile: {
      type: Object as () => ChangedFile, //函数返回的是 ChangedFile 类型
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    rev: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    // Item的前景色
    const bgcolor = ref("white");
    // Item的背景色
    const ftcolor = ref("black");
    // mouse action
    const mouseHander = (flag: boolean) => {
      if (flag) {
        bgcolor.value = "pink";
        ftcolor.value = "green";
      } else {
        bgcolor.value = "white";
        ftcolor.value = "black";
      }
    };
    const clickHander = () => {
      // 返回当前被点击文件的文件名
      emit("fileHandler", props.origin +"_"+props.rev);
    };

    return {
      mouseHander,
      clickHander,
      bgcolor,
      ftcolor,
    };
  },
});
</script>
