import ChangedFile from "../types/ChangedFile";
//保存数据到浏览器的缓存中
export function saveTodos(todos: ChangedFile[]) {
    localStorage.setItem('todos_key', JSON.stringify(todos))
}
//从浏览器的缓存中读数据
export function readTodos(): ChangedFile[] {
    return JSON.parse(localStorage.getItem('todos_key') || '[]')
}


export function readFiles(): ChangedFile[] {
    return JSON.parse(localStorage.getItem('todos_key') || '[]')
}