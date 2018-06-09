import Vue from 'vue'
import App from './components/app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import store from './store'
Vue.config.devtools = true
Vue.use(Vuex);
Vue.use(VueRouter);

/*const app_store = new Vuex.Store(){
  state: {
   apps:[
      {
      "name":"Туду лист",
      "href":"/",
      "active":false,
      "has_subapps":false,
      "subapps":[
        {"name":"Общие",
         "href":"/common"}
      ]
      },
      {
      "name":"Матрица эйзенхауера",
      "href":"/matrix",
      "active":false,
      "has_subapps":false,
      }
     ]
  },
  getters: {
   todoName: (state,getters) => {
    return state.apps.forEach(app => app.name)
   }
  }

}*/
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

Array.prototype.remove = function(value){
var idx = this.indexOf(value);
return this.splice(idx,1)
}
