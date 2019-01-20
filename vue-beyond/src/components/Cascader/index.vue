<template>
</template>

<script>
export default {
  name: 'Cascader',

  props: {
    isMultiple: {
      type: Boolean,
      required: false,
      default: false
    },

    options: {
      type: Array,
      required: false,
      default: false
    },

    value: {
      type: Array,
      required: false,
      default: []
    }
  },

  data () {
    return {
      cascaderOptions: []
    }
  }
}
</script>

<style lang="less" scoped>
</style>
