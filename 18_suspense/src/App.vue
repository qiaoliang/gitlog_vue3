<template>
  <h2>App 父级组件 - Suspense 的使用</h2>
  <hr />
  <Suspense>
    <template #default>
      <!-- #default 就相当于 v-slot:default  -->
      <AsyncComponent />
    </template>
    <template v-slot:fallback>
      <!-- loading 的预备内容，防止白屏 -->
      <h2>loading ....</h2>
    </template>
  </Suspense>


  <Suspense>
    <template #default>
      <!-- #default 就相当于 v-slot:default  -->
      <AsyncAddress />
    </template>
    <template v-slot:fallback>
      <!-- loading 的预备内容，防止白屏 -->
      <h2>loading Address ....</h2>
    </template>
  </Suspense>
</template>
<script lang="ts">
import { defineComponent, ref, defineAsyncComponent } from "vue";
import AsyncAddress from "./components/AsyncAddress.vue";
import AsyncComponent from "./components/AsyncComponent.vue";
// Vue3 动态引入 component
// const AsyncComponent = defineAsyncComponent(
//   () => import("./components/AsyncComponent.vue")
// );
export default defineComponent({
  name: "APP",
  components: {
    AsyncComponent,
    AsyncAddress
},
  setup() {
    const state = ref(null);

    return {
      state,
    };
  },
});
</script>
