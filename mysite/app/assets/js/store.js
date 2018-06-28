//Работаем с vuex Хранилищем
import {Event} from './event';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
const empty_app= {
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
         "items":new Array()
      }
};
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
         "items":new Array()
      }
     }
  },
    getters: {
  // ...
  get_matrix:(state) => {
    return matrix => state.apps.matrix.items.filter((item)=>item.matrix==matrix)
  }},
  mutations: {
    add_todo (state,payload){
     return state.apps.todo.todos = payload.new_object
    },
    set_state_from_db(state,payload){
      return state.apps = payload
    },
      add_to_matrix(state,playload){
        state.apps.matrix.items.push(JSON.parse(playload.new_object));
          Event.$emit('save_data');
          return
      },
      sinchronize(state,playload){
        console.log(playload);
            state.apps.matrix.items.forEach(i=>{
                    if(i.msq===playload.msq && i.matrix == playload.matrix){
                        state.apps.matrix.items.remove(i);
                        Event.$emit('save_data');
                        Event.$emit('create_message',({msq:"Задача успешно удалена",cls:"is-danger"}));
                        Event.$emit('get_update');
                    }
                })
      }

  },
  actions: {
    load(contex,payload){
      //Шлем запросец нам надо сходить за ip
        axios.get('/app/api/'+user_id).then((resp)=>{
          let app = resp.data? JSON.parse(resp.data.app):false;
          if (!app){
            app = empty_app
          }
          contex.commit('set_state_from_db',app);
        Event.$emit('get_update')
        }

          )
    },
     add_todo (context,payload){
   context.commit('add_todo',payload);
  },
      add_to_matrix(context,playload){
      context.commit('add_to_matrix',playload);
      },

  },
});
export default store;