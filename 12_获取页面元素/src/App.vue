<template>
  <h1>使用 ref 获取页面中的元素</h1>
  <input type="text" ref="inputRef"/>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
function useFeatureX() {
  const state2 = reactive({
    name2: "我真的不自由吗？",
    age2: 57,
  });
  return {
    ...toRefs(state2)
  }
}

export default defineComponent({
  name: "APP",
  // 需求：当页面加载完毕后，页面中的文本框自动获得焦点
  setup() {

    const inputRef = ref<HTMLElement|null>(null);
    onMounted(() => {
      inputRef.value&&inputRef.value.focus()
    })
    return {
      inputRef
    };
  },
});
</script>
