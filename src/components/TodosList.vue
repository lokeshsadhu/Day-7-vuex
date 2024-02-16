<template>
    <div>
        <h3>Todos - Done : {{ todoscount }} </h3>
        <ul v-for="(todo, index) in store.state.todos" :key="todo.id">
            <li><a href="#" @click.prevent="onTodoSelected(todo.id)">{{ todo.text }} - {{ todo.done ? "Done" : "Not done" }}</a></li>
        </ul>
        <h3>Selected Todo : {{ getTodo }}</h3>
        <h4>Completed Todos</h4>
        <ul v-for="(todo, index) in doneTodos" :key="todo.id">
            <li>{{ todo.text }}</li>
        </ul>
    </div>
</template>

<script setup>
import {ref,computed} from "vue"
import {useStore} from "vuex"
const store=useStore()
const todoscount=ref(0)
const doneTodos=ref([])
const selectedId=ref(0)
todoscount.value=store.getters.doneTodosCount
doneTodos.value=store.getters.doneTodos

const onTodoSelected=(id)=>{
    selectedId.value=id
}
const getTodo=computed(()=>store.getters.getTodoById(selectedId))
console.log(store.getters.getTodoById(selectedId))
</script>