<template>
  <li
    @mouseenter="mouseHander(true)"
    @click="clickHander()"
    @mouseleave="mouseHander(false)"
    :style="{ backgroundColor: bgcolor, color: ftcolor }"
  >
    <div id="div_rev_wrap">
      <div id="div_rev_id">{{ revItem.rev }}</div>
      <div id="div_rev_brief">{{ revItem.brief }}</div>

    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import RevDetail from "../types/RevDetail";
export default defineComponent({
  name: "RevItem",
  props: {
    revItem: {
      type: Object as () => RevDetail, //函数返回的是 RevDetail 类型
      required: true,
    },
  },
  setup() {
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
    const clickHander =()=>{
      window.alert("这里要显示出这个 Rev 所有的changed File List")
    }
    return {
      mouseHander,
      clickHander,
      bgcolor,
      ftcolor,
    };
  },
});
</script>
