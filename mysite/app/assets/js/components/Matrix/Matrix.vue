<template>
    <div class="matrix_layout">
        <first-square class="first"></first-square>
        <second-square class="first"></second-square>
        <third-square class="first"></third-square>
        <fourth-square class="first"></fourth-square>
    </div>
</template>
<script>
import FirstSquare from './components/FirstSquare.vue'
import SecondSquare from './components/SecondSquare.vue'
import ThirdSquare from './components/ThirdSquare.vue'
import FourthSquare from './components/FourthSquare.vue'
export default {
  name: 'Matrix',
  components: {
    FirstSquare,SecondSquare,ThirdSquare,FourthSquare
  }
}
</script>
<style>
    .matrix_layout{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
    }
    .first{
        width: 49%;
        margin-bottom: 20px;
    }
</style>