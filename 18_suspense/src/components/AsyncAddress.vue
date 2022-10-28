<template>
  <h2>AsyncAddress</h2>
  <h3>msg:{{ data }}</h3>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
export default defineComponent({
  name: "AsyncAddress",
  setup() {
    return axios.get("/data/address.json").then((response) => {
      return {
        data: response.data,
      };
    });
  },
  //使用下面的 async-await 方式也可以异步调用
  // async setup(){
  //   const result = await axios.get('/data/address.json')
  //   return {
  //     data:result.data
  //   }
  // }
});
</script>
