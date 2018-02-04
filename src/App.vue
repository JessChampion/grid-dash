<template>
  <div id="app">
    <GridDash :schema="data"/>
  </div>
</template>

<script>
  import GridDash from './components/GridDash';
  import data from './data.json';

  export default {
    name: 'App',
    components: {
      GridDash
    },
    data() {
      return { data: data };
    }
  };
</script>

<style>
  #app {
    background-color: #dfdfdf;
    display: grid;
    font-family: 'Muli', Helvetica, sans-serif;
    padding: 0.5rem;
    height: calc(100% - 1rem);
    width: calc(100% - 1rem);
  }
</style>
