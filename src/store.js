import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        count:2,
        btnEdit:'add',
        temp:'',
        titleTemp:' ',
        test : 'g',
        todos:[
            {
                id:1,
                title:'Item uno',
                done: false,
                prop:false
            },
            {
                id:2,
                title:'Item dos',
                done: true,
                prop:false
            }
        ]
    },
    mutations:{
        increment (state){
            state.count++
        },
        decrement (state){
            state.count--
        },
        deleteTodo (state,todo){
            var i = state.todos.indexOf(todo)
            state.todos.splice(i,1)
        },
        btnChange (state){
            state.btnEdit='save'
        },
        setTempId(state,todo){
            state.temp=todo
        },
        changeTitle(state,todo){
            state.titleTemp =  todo.title
        },
        test(state,txt){
            state.test = txt
        }
    }
})