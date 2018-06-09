<template>
    <div class="container">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary" @click="addCounter()">ADD</button>
            </div>
        </div>
    </div>
</template>
<script>
import store from '../../store';
import * as type from '../../types';
    export default{
        methods:{
            addCounter(){
                store.dispatch({
                    type: type.Increment,
                    ammount:20
                })
            }
        }
    }
</script>