<template>
  <h2>shallowReactive and shallowRef 浅响应式</h2>
  <!-- reactive -->
  <div>{{ reactiveState }}</div>
  <button @click="reactiveStateChange">改变reactiveState.b.c</button>

  <!-- shallowReactive -->
  <div>{{ shallowReactiveState }}</div>
  <button @click="shallowReactiveChange">改变shallowReactiveState.b.c</button>
  <hr />

  <!-- shallowRef-->
  <div>{{ shallowRefState }}</div>
  <button @click="shallowRefChange">改变Ref state.b.c</button>
  <hr />

  <!-- shallowReadonlyState-->
  <div>{{ shallowReadonlyState }}</div>
  <button @click="shallowReadonlyChange">改变 shallowReadonly state.b.c</button>

  <div>{{ shallowReadonlyState }}</div>
  <button @click="shallowReadonlyChange">改变 shallowReadonly state.b.c</button>
  <hr />

  <!-- toRaw and markRaw-->
  <!-- toRaw将代理对象变成普通对象，数据发生变化，不会更新 -->
  <!-- markRaw标记的对象数据，从此以后再也不能成为代理对象了 -->
  <h2>toRaw与markRaw</h2>
  <h3>state:{{ state }}</h3>
  <button @click="updateToRaw">测试toRaw</button>
  <button @click="updateMarkRaw">测试markRaw</button>
</template>
<script lang="ts">
import {defineComponent,reactive,ref,shallowReactive,shallowReadonly,shallowRef,triggerRef,toRaw,markRaw,readonly} from "vue";
interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent({
  name: "APP",
  setup() {
    //   #############   reactive && shallowReactive  ########################
    const reactiveState = reactive({
      a: "a",
      b: {
        c: "c",
        d: {
          e: "e",
        },
      },
    });
    function reactiveStateChange() {
      reactiveState.b.c += "99999";
      console.log(reactiveState, "reactiveState发生了变化且视图更新了");
    }
    const shallowReactiveState = shallowReactive({
      a: "a",
      b: {
        c: "c",
        d: {
          e: "e",
        },
      },
    });
    function shallowReactiveChange() {
      shallowReactiveState.b.c += "33333_";
      console.log(shallowReactiveState, "shallowReactiveState发生了变化但视图未更新");
      // 打开下方这行注释视图将进行更新（因为首层对象发生了改变）
      // shallowReactiveState.a = 99999
    }
    //   #############   ref 和 shallowRef  ########################
    // shallowRef为非递归监听，ref为递归监听，与shallowReactive和reactive不同的是shallowRef和ref监听的对象首层是value这一层，
    // 只有当value发生改变时shallowRef声明的变量才会在视图上进行更新
    const shallowRefState = shallowRef({
      a: "a",
      b: {
        c: "c",
        d: {
          e: "e",
        },
      },
    });
    function shallowRefChange() {
      shallowRefState.value.b.c += "555555_";
      console.log(shallowRefState, "shallowRefChange发生了变化但视图未更新");
      // 打开下方代码视图才会进行更新（原因是shallowRefState首层value发生了改变）
      // shallowRefState.value = {
      //   a: 'a',
      //   b: {
      //     c: '变化的数据',
      //     d: {
      //       e: 'e',
      //     },
      //   },
      // }

      // triggerRef的作用则是手动执行与 shallowRef 关联的任何副作用，强制更新视图
      //  triggerRef(shallowRefState)
    }
    // ################# readonly and shallowReadonly  #####################
    //（1）readonly：将包裹的对象变为只读，并且是深度只读
    //（2）shallowReadonly：浅层属性为只读，深层次属性可以修改
    const readState = {
      name: "小明",
      age: 18,
      car: {
        color: "red",
      },
    };
    const readonlyState = readonly(readState);
    const shallowReadonlyState = shallowReadonly(readState);

    function shallowReadonlyChange() {
      //只读，所有数据都不能修改，下面这句会报错。
      //readonlyState.car.color = "black"

      //浅只读，第一层数据不能修改。下面这句会报错。但是，第二层及以下的数据可以被修改
      //shallowReadonlyState.a = "error"
      shallowReadonlyState.car.color += "444444_";
      console.log(shallowReadonlyState, "shallowReadonlyChange 的第二层数据发生了变化");
    }
    //   #############   toRaw 和 MarkRaw  ########################
    const state = reactive<UserInfo>({
      name: "小明",
      age: 12,
    });
    const updateToRaw = () => {
      const user = toRaw(state);
      user.name += "我name变化了";
      console.log("user.name="+user.name+"因为 user 不再是响应式变量，所以即使 user.name 变化了，页面也不会变化。");
    };
    const updateMarkRaw = () => {
      //state.likes = ['吃','喝']
      //state.likes[0] += '-----'
      const likes = ["吃", "喝"]; //这里的 like 不是响应式变量
      state.likes = markRaw(likes); // 这里把它添加为 state 的一个属性，但被定义成了Raw，所以页面不会更新。

      setInterval(() => {
        console.log("定时器走起来");
        if (state.likes) {
          state.likes[0] += "----";
          console.log(state.likes[0] +"变长了吧，但页面不会更新。因为MarkRow。")
        }
      }, 1000);
      console.log("把它变成一个响应式变量");
    };

    return {
      reactiveState,
      reactiveStateChange,

      shallowReactiveState,
      shallowReactiveChange,

      shallowRefState,
      shallowRefChange,

      readonlyState,
      shallowReadonlyState,
      shallowReadonlyChange,

      state,
      updateToRaw,
      updateMarkRaw
    };
  },
});
</script>
