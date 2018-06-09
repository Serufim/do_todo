<template>
    <div>
        <counter></counter>
        <add-counter></add-counter>
        <remove-counter></remove-counter>
    </div>
</template>
<script>
import Counter from './Matrix/Counter.vue';
import AddCounter from './Matrix/AddCounter.vue';
import RemoveCounter from './Matrix/RemoveCounter.vue';
export default {
  name: 'Matrix',
  components: {
    Counter,
    AddCounter,
    RemoveCounter
  }
}
</script>
