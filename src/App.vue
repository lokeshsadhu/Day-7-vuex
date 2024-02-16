<template>
  <h1 class="text-underline">Vuex</h1><br/>
  <Counter /><br/>
  <TodosList/><br/>
</template>

<script setup>
import {computed} from "vue"
import {mapState,mapGetters} from "vuex"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "@/components/Counter.vue"
import TodosList from "@/components/TodosList.vue"

const computedValue=computed(()=>{
  return{
    ...mapState({
      count:(state)=>state.count
    })
  }
})
</script>