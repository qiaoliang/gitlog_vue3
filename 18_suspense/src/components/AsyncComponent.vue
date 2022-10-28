<template>
<h2>AsyncComponent </h2>
<h3>msg:{{msg}}</h3>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AsyncComponent",
  setup() {
    return new Promise((resolve,rejet)=>{
      setTimeout(()=>{
        resolve({
          msg:"what are you doing now"
        })
      },2000)
    });
  },
});
</script>
