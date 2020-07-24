<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container mt-2">
      <Add :addItem="addTodo" :editItem="editTodo" />
    </div> 
    <div class="container mt-4">
      <label> Total:</label>
      <br>
      <label>{{count}}</label>
    </div> 
    <div class="container mt-3">
      <ListaTodos/>
    </div>  
  </div>
</template>

<script>
  import ListaTodos from './components/ListaTodos.vue'
  import Add from './components/Add.vue'

  export default {
    name: 'App',
    components: {
      ListaTodos,
      Add
    },
    computed:{
      count(){
        return this.$store.state.count
      },
    },
    methods: {
      addTodo: function(newItem){
          this.$store.commit('increment')
          this.$store.state.todos.push(newItem)
      },
      editTodo: function(item){
        this.$store.state.temp.title = item
        this.$store.state.temp.prop =false
        this.$store.state.btnEdit="add"
      
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
