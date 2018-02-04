<template>
  <div class="cell cell--leaf"
       v-if="leaf"
       :id="`cell-${id}`"
  >
    <WebContent class="content"
                v-if="type === TYPES.WEB"
                v-bind="content"/>
    <TextContent class="content"
                 v-else-if="type === TYPES.TEXT"
                 v-bind="content"/>
    <div class="content"
         v-else/>
  </div>
  <div v-else
       :id="`cell-${id}`"
       :class="['cell', `cell--${orientation}`]"
  >
    <GridCell v-bind="children[0]"/>
    <GridCell v-bind="children[1]"/>
  </div>
</template>

<script>
  import TextContent from './TextContent';
  import WebContent from './WebContent';
  import { TYPES } from '../config';
  import { validType } from '../utils';

  const isLeafNode = children => !children || children.length === 0;
  const getOrientation = vertical => (vertical ? 'vertical' : 'horizontal');
  const getClasses = (leaf, orientation) => {
    if (leaf) {
      return 'block leaf';
    }
    return `block ${orientation}`;
  };

  export default {
    name: 'GridCell',
    components: {
      TextContent,
      WebContent
    },
    props: {
      children: {
        default: () => [],
        type: Array
      },
      content: {
        default: () => {
        },
        type: Object
      },
      id: {
        required: true,
        type: Number
      },
      type: {
        required: true,
        type: String,
        validator: validType
      },
      vertical: {
        default: () => true,
        type: Boolean
      }
    },
    data() {
      const leaf = isLeafNode(this.children);
      const orientation = getOrientation(this.vertical);
      const classes = getClasses(this.leaf, orientation);

      return {
        classes,
        leaf,
        orientation,
        TYPES
      };
    }
  };
</script>
<style scoped lang="scss">
  .cell {
    display: grid;
    grid-gap: 0.5rem;
    height: 100%;
    min-height: 100%;
    width: 100%;

    &--vertical {
      grid-template-columns: auto auto;
    }
    &--horizontal {
      grid-template-rows: auto auto;
    }
    &--leaf {
      display: block;
      overflow: auto;
    }
  }

  .content {
    background-color: #ffffff;
    border-radius: 0.1rem;
    height: 100%;
    min-height: 100%;
    width: 100%;
  }
</style>
