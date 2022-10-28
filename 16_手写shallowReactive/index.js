//手写shallowReactive

//定义一个 reactiveHander

const reactiveHander={
    get(target,prop){
        const result = Reflect.get(target,prop)
        console.log('读数据',prop,result)
        return result
    },
    set(target,prop,value){
        const result = Reflect.set(target,prop,value)
        console.log('写数据',prop,value);
        return result
    },
    deleteProperty(target,prop){
        const result = Reflect.deleteProperty(target,prop)
        console.log('删除数据',prop,value);
        return result
    }
}
//定义一个 shallowReactive 函数，传入一个目标对象
function shallowReactive(target){
    //判断 target 是否为 object(对象或数组)
    if(target&&typeof target ==='object'){
        return new Proxy(target,reactiveHander)
    }
    return target
}//定义一个 shallowReactive 函数，传入一个目标对象
function reactive(target){
    //判断 target 是否为 object(对象或数组)
    if(target&&typeof target ==='object'){
        if(Array.isArray(target)){ //如果是数组
            target.forEach((item,index)=>{
                target[index] = reactive(item)   //递归处理
            })
        }else{
            Object.keys(target).forEach(key=>{
                target[key] = reactive(target[key])
            })
        }
        return new Proxy(target,reactiveHander)
    }
    return target
}