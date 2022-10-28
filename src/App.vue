<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader />
      <MyList />
      <MyFooter/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default defineComponent({
  name: "App",
  components: { MyHeader,MyList,MyFooter },
  setup() {
    const state = ref(null);

    return {
      state,
    };
  },
});
</script>
<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
