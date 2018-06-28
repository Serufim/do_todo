<template>
    <div id="layout">
        <h1 class="layout__title title is-1 has-text-centered">DO TODO: Главное приложение</h1>
        <p class="layout__subtitle subtitle has-text-centered">Вся магия скрывается здесь</p>
        <aside class="layout__menu menu">
            <p class="menu-label">
                Приложения
            </p>
            <ul class="menu-list">
                <li @click="apps.forEach(app=>app.active=false);application.active=true" v-for="application in apps">
                    <router-link :class="$route.path==application.href ? 'is-active':'' " :to="application.href">{{application.name}}</router-link>
                    <ul v-if="application.has_subapps">
                        <li v-for="subapp in application.subapps">
                            <router-link :class="$route.path==(application.href + subapp.href) ? 'is-active':'' " :to="application.href + subapp.href">{{subapp.name}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
        <div class="layout__application">
            <router-view></router-view>
        </div>
        <event-bus></event-bus>
    </div>
</template>

<script>
import Todo from './Todo/Todo.vue'
import Matrix from './Matrix/Matrix.vue'
import EventBus from './EventBus.vue'
 import {Event} from '../event';
import VueRouter from 'vue-router'
import { mapState } from 'vuex';
import axios from 'axios';
import store from "../store";
const routes = [
  { path: '/', component: Todo },
  { path: '/matrix', component: Matrix },
];
const router = new VueRouter({
  routes // сокращение от `routes: routes`
});

export default {
  router,
  name: 'app',
  data () {
    return {
    }
  },
    methods:{
      getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
    },
  computed: mapState({
            apps: state => state.apps
        }),
    mounted(){
      Event.$on('save_data',()=>
      {
          let csrf =this.getCookie('csrftoken');
          axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers["X-CSRFToken"] = csrf;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
          let req_data = {user:user_id,
            app:JSON.stringify(store.state.apps)
          };
          axios.put('/app/api/'+user_id,req_data).then(resp=>{
              Event.$emit('create_message',({msq:"Успешно сохранено",cls:"is-success"}));
          })})
    },
  components: {EventBus}
}

</script>

<style>
#layout{
padding:0 20px;
display: flex;
flex-flow: row wrap;
}
.layout__title{
width:100%;
}
.layout__subtitle{
width:100%;
}
#hello {
  font-family: Verdana;
  color: navy;
}
.layout__menu{
    max-width:250px;
    margin-right:50px;
}
.layout__application{
flex-basis:600px;
flex-grow:1;
}

</style>