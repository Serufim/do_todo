<template>
    <div>
        <div class="box todo_textbox textbox">
            <input type="text" v-model="content" class="textbox__input input">
            <button class="todo_button button is-info" type="submit" @click.prevent="add_todo">Добавить</button>
        </div>
        <div v-for="item in items">
            <div v-if="!item.editable" class="todo__item todo-item box">
                <div>
                    <i @click="item.completed = item.completed? false:true"
                       :class="(item.completed ? 'fa-check-square':'fa-square') + ' todo-item__checkbox far '"></i>
                    <span class="todo-item_label">{{item.name}}</span>
                </div>
                <ul class="todo-item__options">
                    <li class="todo-item__option"><a href="" @click.prevent="item.open = item.open?false:true" class="todo-item__link todo-item__open"><i

                            :class="(item.open?'fa-chevron-up':'fa-chevron-down')+' fas'"></i>Раскрыть</a></li>
                    <li class="todo-item__option"><a href="" @click.prevent="item.editable=item.editable?false:true"class="todo-item__link todo-item__edit"><i
                            class="far fa-edit"></i>Изменить</a>
                    </li>
                    <li class="todo-item__option"><a @click.prevent="delete_item(item)" href="" class="todo-item__link todo-item__delete"><i
                            class="far fa-times-circle"></i></a></li>
                </ul>
            </div>
            <div v-else class="todo__item todo-item box">
                <input type="text" v-model="item.name" class="textbox__input input">
                <button class="todo_button button is-warning" type="submit" @click.prevent="complete_edit(item)">Изменить</button>
            </div>
            <div v-if="item.open" class="sub-todo">
                <exist-todo :items="item.subtodos"></exist-todo>
            </div>
        </div>
    </div>
</template>
<script>
import {Event} from '../../../event';
    export default {
        name:"ExistTodo",
        props:{
            items:{
                type: Array,
                default:[]
            }
        },
        data(){
            return{
                content:""
            }
        },

        methods:{
            add_todo(){
                let newItem = {
                    name: this.content,
                    completed: false,
                    open: false,
                    editable:false,
                    subtodos:[]
                };
                this.items.push(newItem);
                this.content = "";
                Event.$emit('save_todo');
                Event.$emit('save_data');
                Event.$emit('create_message',({msq:"Задача успешно создана",cls:"is-success"}));
            },
            delete_item(item){
                this.items.forEach(i=>{
                    if(i.name===item.name){
                        this.items.remove(i);
                        Event.$emit('save_data');
                        Event.$emit('create_message',({msq:"Задача успешно удалена",cls:"is-danger"}));
                    }
                })
            },
            complete_edit(item){
                item.editable=false;
                Event.$emit('save_data');
                Event.$emit('create_message',({msq:"Задача успешно изменена",cls:"is-warning"}));
            }
        }
    }
</script>
<style>
.todo-item__link{
    opasity:0.5;
}
.todo-item__link:hover{
color:initial;
    opasity:1;
}
.sub-todo{
    position:relative;
    padding-left:20px;
    margin-bottom:24px;
}
.sub-todo::after{
    top:-24px;
    bottom:-24px;
    content:"";
    position:absolute;
    width:5px;
    left: 10px;
    heigth:100%;
    background-color:#cccccc;
}
    .todo-item__delete{
        color:hsla(348, 100%, 61%,0.5);
    }
    .todo-item__open{
        color:hsla(141, 71%, 48%,0.5);
    }
    .todo-item__edit{
        color:hsla(48, 100%, 67%,0.5)
    }

    .todo-item__delete:hover{
        color:hsla(348, 100%, 61%, 1);
    }
    .todo-item__open:hover{
        color:hsla(141, 71%, 48%, 1);
    }
    .todo-item__edit:hover{
        color:hsla(48, 100%, 67%, 1)
    }
    .textbox__input{
    margin-right:20px;
    }
    .todo_textbox{
        display:flex;
        flex-flow:row no-wrap;
    }
    .todo__item{
    display: flex;
    justify-content: space-between;
    border-radius:0;
    margin-bottom:24px;
    }
    .todo-item__options{
    display:flex;
    }
    .todo-item__option:not(:last-child){
        margin-right:10px;
    }
    .todo-item__checkbox{
        cursor:pointer;
    }
</style>