<template>
  <button @click="modelOpen = true">打开一个对话框</button>
  <!-- 对话框 --使用 teleport ,将 子组件的 div 放到 父组件的 body 内，与app的 div 平级，而不是在父组件 app 的div 之内 -->
  <teleport to="body">
    <div v-if="modelOpen">
      <div>这是一个对话框</div>
      <button @click="modelOpen = false">关闭对话框</button>
    </div>
</teleport> 
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ModelButton",
  setup() {
    const modelOpen = ref(false);

    return {
      modelOpen,
    };
  },
});
</script>
