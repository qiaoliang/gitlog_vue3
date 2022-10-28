<template>
  <h2>CustomRef 的使用，实现防抖效果</h2>
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>
<script lang="ts">
import { customRef, defineComponent, ref } from "vue";
function useDebouncedRef<T>(value:T,delay = 200){
  let timeoutId:any
  return customRef((track,trigger)=>{
    return{
      get(){
        track()
        return value
      },
      set(newValue:T){ 
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
          value = newValue
          trigger()
        },delay)
      }
    }
  })
}
export default defineComponent({
  name: "APP",
  setup() {
    const keyword = useDebouncedRef('abc',500)
    return {
      keyword,
    };
  },
});
</script>
