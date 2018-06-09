//Работаем с vuex Хранилищем

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    apps:{
      todo:{
      "name":"Туду лист",
      "href":"/",
      "active":false,
      "has_subapps":false,
      "subapps":[
        {"name":"Общие",
         "href":"/common"}
      ],
      "todos":[]
      },
      matrix:{
      "name":"Матрица эйзенхауера",
      "href":"/matrix",
      "active":false,
      "has_subapps":false,
      }
     }
  },
  mutations: {
    increment (state, payload){
      return state.count = state.count + payload.ammount;
    },
    add_todo (state,payload){
     return state.apps.todo.todos = payload.new_object
    }
  },
  actions: {
    increment (context, payload) {
      context.commit('increment', payload)
  },
  add_todo (context,payload){
  console.log('Куку');
   context.commit('add_todo',payload);
  }
}})
export default store;