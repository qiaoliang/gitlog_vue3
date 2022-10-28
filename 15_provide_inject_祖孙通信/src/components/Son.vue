<template>
  <h2>Son 组件</h2>
  <hr />
  <GrandSon />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import GrandSon from './GrandSon.vue'

export default defineComponent({
  name: "Son",
  components: {
    GrandSon,
  },
  setup() {
    const state = ref(null);

    return {
      state,
    };
  },
});
</script>
