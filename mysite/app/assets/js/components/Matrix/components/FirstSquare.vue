<template>
  <article class="message is-primary">
    <div class="message-header">
      <p>Важные и срочные дела</p>
    </div>
    <div class="message-body">

      <div class="box hellow">
        <div class="matrix_field field">
          <div class="control">
            <input class="input is-primary" v-model="current_text" type="text" placeholder="Primary input">
          </div>
        </div>
        <button class="button is-primary my-button" @click="add_todo()">Добавить</button>
      </div>
      <div v-for="arr in array" class="box matrix_todo">
        {{arr.msq}}
        <ul class="options">
          <li class="matrix__option"><a @click.prevent="delete_item(arr)" href="" class="todo-item__link todo-item__delete"><i
                            class="far fa-times-circle"></i></a></li>
        </ul>
      </div>
    </div>
  </article>

</template>
<script>
    import {Event} from '../../../event';
    import store from '../../../store';
    import * as type from '../../../types';
    export default {
        name:"FirstSquare",
        data(){
            return{
                current_text:"",
                Matrix:1,
                array:this.array = store.getters.get_matrix(this.Matrix)
            }
        },
        mounted(){
            Event.$on('get_update',()=>this.array = store.getters.get_matrix(this.Matrix))
        },
        methods:{
            add_todo(){
                store.dispatch({
                    type: type.AddToMatrix,
                    new_object:JSON.stringify({msq:this.current_text,matrix:this.Matrix}),
                });
                this.array = store.getters.get_matrix(this.Matrix);
                this.current_text = ""
            },
            delete_item(item){
               store.commit('sinchronize',item);
            }
        }
    }
</script>
<style>
  .hellow{
    display: flex;
    justify-content: space-between;
  }
  .matrix_field{
    flex-basis: 80%;
  }
  .my-button{
    flex-basis: 15%;
    height: 34px;
  }
  .matrix_todo{
    display: flex;
    justify-content: space-between;
  }
</style>