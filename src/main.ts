import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// const counterModule={
//     state(){},
//     mutations:{},
//     getters:{},
//     actions:{}
// }

const store = createStore({
    state () {
        return {
            count: 0,
            todos : [
                {id:1,text:"Washing",done:true},
                {id:2,text:"Cleaning",done:true},
                {id:3,text:"Reading",done:true},
                {id:4,text:"Jogging",done:false},
            ]
        }
    },
    mutations: {
        increment (state,n) {
          state.count+=n
        },
        decrement (state,n) {
            state.count-=n
        },
    },
    getters: {
        getTodoById:(state)=>(id)=>{
            return state.todos.find((todo)=>todo.id===id)
        },
        doneTodos (state) {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount (state,getters) {
            return getters.doneTodos.length
        }
    },
    actions:{
        increment(context,payload){
            context.commit('increment',payload)
        },
        decrement(context,payload){
            setTimeout(() => {
                context.commit('decrement',payload)
            }, 1000);
        },
        action1(context){
            return new Promise((resolve)=>{
                setTimeout(() => {
                    context.commit('decrement',{value:1})
                    resolve('decremented the number')
                }, 1000);
            })
        }

    }
})

const app=createApp(App)
app.use(store)
app.mount('#app')
