<template>
  <h2>子组件</h2>
  <hr />
  <h2>{{ parentmsg }}</h2>
  <button @click="emitXXX">分发</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Child",
  props: ["parentmsg"],
  setup(props, {attrs,emit,slots}) {
    console.log(props.parentmsg);
    console.log(attrs.msg2);
    const emitXXX = function(){
        emit('xxx',"子组件来了")
    } 
    return {
      emitXXX,
    }
  },
});
</script>
