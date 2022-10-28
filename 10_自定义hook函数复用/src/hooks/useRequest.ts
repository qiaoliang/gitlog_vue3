import { assertExpressionStatement } from "@babel/types"
import { ref } from "vue"
import axios from 'axios'
// 发送 ajax 的请求
export default function<T> (url: string) {
    //加载的状态
    const loading = ref(true)
    //返回的数据
    const data = ref<T|null>(null)
    //返回的数据信息
    const errorMsg = ref('')
    axios.get(url).then((response: any) => {
        //改变加载的状态
        loading.value = false
        data.value = response.data
    }).catch((error: any) => {
        //改变加载的状态
        loading.value = false
        errorMsg.value = error.message || '未知'
    })

    return {
        loading,
        data,
        errorMsg
    }
}