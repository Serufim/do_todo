<template>
    <div class="todo">
        <div class="todo__header">
            <h2 class="todo__title">Список задач</h2>
        </div>
        <div class="todo__body">
                <exist-todo :items="todos"></exist-todo>
        </div>
        </div>
    </div>
</template>
<script>
import ExistTodo from './components/ExistTodo.vue'
import store from '../../store';
import * as type from '../../types';
import {Event} from '../../event';
import { mapState } from 'vuex';
export default {
  name: 'todo',
  data () {
    return {
    }
  },
   computed: mapState({
            todos: state => state.apps.todo.todos
        }),
  components:{ExistTodo},
  created(){
    Event.$on('save_todo',()=>{store.dispatch({
                    type: type.AddTodo,
                    new_object:this.todos,
                })})
  }
}
</script>
<style>

</style>