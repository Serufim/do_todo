<template>
    <div :class=" `${visible? '' : 'inv'} notification ${message_class}` ">
        <button class="delete" @click="visible= false"></button>
        {{message}}
    </div>

</template>
<script>
    import {Event} from '../event';
    export default {
        name:"EventBus",
        data(){
            return{
                message:"",
                message_class:"is-success",
                visible:false
            }
        },
        mounted(){
            Event.$on('create_message',(message,cls)=>{
                this.create_message(message,cls)
            });
        },
        methods:{
            create_message(data){
                this.message = data.msq;
                this.message_class = data.cls;
                this.visible = true
            }
        }
    }
</script>
<style>
    .notification{
        position:absolute;
        right: 20px;
        top: 20px;
    }
    .inv{
        display: none!important;
    }
</style>