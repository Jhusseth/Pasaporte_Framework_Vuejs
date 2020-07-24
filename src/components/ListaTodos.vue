<template>
  <div class="todos">
    <table class="table">
      <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Done</th>
            <th>Enable</th>
            <th>Edit</th>
            <th>Delete</th> 
          </tr>
      </thead>
      <tbody>    
          <tr v-for="todo in todos" v-bind:key="todo.id">
            <td>{{todo.id}}</td>
            <td>{{todo.title}}</td>
            <td>{{todo.done}}</td>
            <td>
              <input type="checkbox" v-on:change="changeDone(todo)" v-bind:checked="todo.done">
            </td>
            <td>
              <div v-if="todo.prop">
                <button type="button" class="btn btn-warning" v-on:click="editTodo(todo)"> editing </button>         
              </div>
              <div v-else>
                <button type="button" class="btn btn-primary" v-on:click="editTodo(todo)"> edit </button>
              </div>
            </td>
            <td>
              <button type="button" class="btn btn-danger" v-on:click="deleteTodo(todo)"> delete </button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ListaTodos',
    computed:{
      todos(){
        return this.$store.state.todos
      }
    },
    methods: {
      changeDone: function(todo){
        todo.done = !todo.done
      },

      deleteTodo: function(todo){
        this.$store.commit('deleteTodo',todo)
        this.$store.commit('decrement')
      },
      editTodo: function(todo){
        this.$store.commit('btnChange')
        todo.prop = true
        this.$store.commit('changeTitle',todo)
        this.$store.commit('setTempId',todo)
      }
    },
  }
</script>

<style>
</style>
