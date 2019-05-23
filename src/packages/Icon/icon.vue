<template>
  <i :style="styles" class="icons" @click="handleClick">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: "Icons",

  props: {
    size: {
      type: [Number, String] 
    },

    color: {
      type: String
    }
  },

  computed: {
    styles () {
      let style = {}

      if (this.size) {
        style['font-size'] = `${this.size}px`
      }

      if (this.color) {
        style['color'] = `${this.color}`
      }

      return style
    }
  },

  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
};
</script>

<style lang="less" scoped>
.icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
