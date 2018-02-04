<template>
  <div class="display display--web">{{ url }}</div>
</template>
<script>
  export default {
    name: 'WebContent',
    props: {
      url: {
        default: () => '',
        type: String
      }
    }
  };
</script>
