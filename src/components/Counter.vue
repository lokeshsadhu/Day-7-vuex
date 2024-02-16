<template>
    <div>
        <h3>Count : {{  $store.state.count }}</h3>
        <button class="btn btn-success" @click="onIncrement">Increase</button>
        <button class="btn btn-warning button" @click="onDecrement">Decrease</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store=useStore();

const onIncrement=()=>{
    store.dispatch('increment',2)
}

const onDecrement=()=>{
    store.dispatch('action1',1).then((response)=>{
        console.log(response)
    })
}
// const mapActions = () => {
//   const store = useStore()
//   return Object.fromEntries(
//     Object.keys(store._actions).map(
//       action => [action, value => store.dispatch(action1, 3)]
//     )
//   )
// }
// const {countDown}=mapActions()
// console.log(countDown)
</script>

<style>
.button{
    margin-left: 10px;
}
</style>