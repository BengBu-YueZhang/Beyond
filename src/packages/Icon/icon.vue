<template>
  <i :style="styles" class="icons" @click="handleClick">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'Icons',

  props: {
    size: {
      type: [Number, String],
    },

    color: {
      type: String,
    },
  },

  computed: {
    styles() {
      const style = {};

      if (this.size) {
        style['font-size'] = `${this.size}px`;
      }

      if (this.color) {
        style.color = `${this.color}`;
      }

      return style;
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style lang="less" scoped>
.icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;
  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;
  /* Support for IE. */
  font-feature-settings: 'liga';
}
</style>
