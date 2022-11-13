<template>
  <div class="app-container">
    <div class="filelist-wrap">
      <Suspense>
        <template #default>
          <FileList />
        </template>
        <template v-slot:fallback>
          <h2>loading Address ....</h2>
        </template>
      </Suspense>
    </div>
    <div class="revlist-wrap">
      <RevList/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FileList from "./components/FileList.vue";
import RevList from "./components/RevList.vue";
export default defineComponent({
  name: "App",
  components: { FileList,RevList },

  setup() {},
});
</script>
<style scoped>
.app-container {
  width: 600px;
  margin: 0 auto;
}
.app-container .filelist-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.app-container .revlist-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>
