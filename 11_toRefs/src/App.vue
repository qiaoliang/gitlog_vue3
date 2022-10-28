<template>
  <h1>toRefs 的使用</h1>
  <h2>下面的state1 数据没有使用 toRefs，所以需要使用 state读取，因为state1 是reactive的（响应式）</h2>
  <h3>name:{{ state1.name }}</h3>
  <h3>age:{{ state1.age }}</h3>
  <hr />
  <h2>下面的state1 的 name 和 age 使用 toRefs</h2>
  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
  <hr>
  <h2>下面的 state2 的数据使用 toRefs</h2>
  <h3>name2:{{ name2 }}</h3>
  <h3>age2:{{ age2 }}</h3>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
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
  setup() {
    const state1 = reactive({
      name: "我自由",
      age: 17,
    });
    //toRefs 可以把一个
    const { name, age } = toRefs(state1);
    // 使用定时器，周期性更新数据,1 秒 1 次
    setInterval(() => {
      name.value += "====";
    }, 1000);
    const {name2,age2} = toRefs(useFeatureX()) 
    return {
      state1,
      name,
      age,
      name2,
      age2
    };
  },
});
</script>
