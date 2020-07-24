<template>
    <div class="add">
        <input type="text" v-on:input="item=$event.target.value">
        <button class="btn btn-primary ml-3" v-on:click="addTodo"> {{this.$store.state.btnEdit}} </button>
    </div>     
</template>
<script>
    export default {
        name: 'Add',
        props: {
            editItem:Function,
            addItem: Function
        },
        methods: {
            addTodo : function(){
                if(!(this.item.length<=0)){
                    if(this.$store.state.btnEdit=='add'){
                        this.addItem({id: this.$store.state.todos.length +1,title: this.item,done:false,prop:false})
                    }
                    else{
                        this.editItem(this.item)
                    }
                }
            },
        },
    }
</script>