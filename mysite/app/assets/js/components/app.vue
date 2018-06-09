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
    </div>
</template>

<script>
import Todo from './Todo/Todo.vue'
import Matrix from './Matrix.vue'
import VueRouter from 'vue-router'
import { mapState } from 'vuex';
const routes = [
  { path: '/', component: Todo },
  { path: '/matrix', component: Matrix },
]
const router = new VueRouter({
  routes // сокращение от `routes: routes`
})

export default {
  router,
  name: 'app',
  data () {
    return {
    }
  },
  computed: mapState({
            apps: state => state.apps
        }),

  components: {}
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