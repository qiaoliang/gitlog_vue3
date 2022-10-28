<template>
  <h2>计算属性与监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.firstName" /><br />
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastName" /><br />
  </fieldset>
  <fieldset>
    <legend>计算属性与监视的演示</legend>
    只使用 get 姓名<input type="text" placeholder="显示姓名" v-model="fullName1" /><br />
    使用Set/get 姓名<input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
    使用监视_姓名<input type="text" placeholder="显示姓名"  v-model="fullName3"/><br />
  </fieldset>
</template>
<script lang="ts">
import { classBody } from "@babel/types";
import { CREATE_BLOCK } from "@vue/compiler-core";
import { computed, defineComponent, queuePostFlushCb, reactive, ref, watch, watchEffect } from "vue";

export default defineComponent({
  name: "APP",
  setup() {
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });
    //vue3 的计算属性, 如果函数中只传入一个回调函数，表示的是 get，返回的是Ref类型的数据
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    //set and get
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val: String) {
        const names = val.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });
    // 立即监视 user 的 fristName 和 LastName 的变化
    const fullName3 = ref("");
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + "_" + lastName;
      },
      { immediate: true,deep:true } //immediate立即运行一次；deep:如果 user 中有嵌套对象，也可以监视
    );

    // 下面代码也是监视，但不需要配置immediate，也会立即运行 
    // watchEffect(()=>{
    //   fullName3.value = user.firstName + "_" + user.lastName;
    // })

    //下面是监视fullname3的数据，并改变 firstName 和 lastName
    watchEffect(()=>{
      const names = fullName3.value.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
    })

    // 下面是 watch 监视非响应式的数据(firstName 和 lastName 是非响应式的数据)，需要使用回调的写法
    watch(
      [()=>user.firstName,()=>user.lastName],()=>{
        console.log("我被调用了")
      })

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>
