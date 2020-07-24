<template>
    <div class="add">
        <input type="text" v-on:keyup="changeTitle" v-bind:value="titleItem">
        <button class="btn btn-primary ml-3" v-on:click="addTodo"> {{this.$store.state.btnEdit}} </button>
    </div>     
</template>
<script>
    export default {
        name: 'Add',
        computed:{
            titleItem(){
                return this.$store.state.titleTemp
            }
        },
        props: {
            editItem:Function,
            addItem: Function
        },
        methods: {
            changeTitle(event){
                var e = event.target.value
                this.$store.commit('test',e)
            },
            addTodo : function(){
                if(!(this.titleItem.length<=0)){
                    if(this.$store.state.btnEdit=='add'){
                        this.addItem({id: this.$store.state.todos.length +1,title: this.$store.state.test ,done:false,prop:false})
                    }
                    else{
                        this.editItem(this.$store.state.test)
                    }
                }
                this.$store.state.titleTemp =''
            }
        },
    }
</script>