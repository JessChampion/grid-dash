<template>
  <div class="gridDash">
    <GridCell v-bind="schema.root"/>
  </div>
</template>

<script>
  import GridCell from './GridCell';
  import { TYPES } from '../config';

  export default {
    name: 'GridDash',
    components: {
      GridCell
    },
    props: {
      schema: {
        type: Object,
        default: () => ({
          root: {
            children: [],
            id: 1,
            type: TYPES.CONTAINER,
            vertical: false
          }
        })
      }
    }
  };
</script>
<style scoped>
</style>
