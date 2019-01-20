<template>
  <div ref="CheckboxGroup">
    <slot @change="handleCheckboxGroupChange"/>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: Array,
      required: false,
      default () {
        return []
      }
    }
  },

  methods: {
    handleCheckboxGroupChange (value) {
    }
  }
}
</script>
