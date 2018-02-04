<template>
  <div class="display display--text">{{ value }}</div>
</template>
<script>
  export default {
    name: 'TextContent',
    props: {
      value: {
        default: () => '',
        type: String
      }
    }
  };
</script>
