<template>
  <div ref="CheckboxGroup" @change="handleCheckboxGroupChange">
    <slot/>
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

  data () {
    return {
      modle: new Set(this.value)
    }
  },

  watch: {
    value: {
      handler (val) {
        this.modle = new Set(val)
        this.updateChildren()
      },
      immediate: true
    }
  },

  mounted () {
    this.updateChildren()
  },

  methods: {
    handleCheckboxGroupChange (event) {
      const { checked, value } = event.target
      if (checked) {
        this.modle.add(value)
      } else {
        this.modle.delete(value)
      }
      this.$emit('change', [...this.modle])
      this.updateChildren()
    },

    /**
     * 更新子组件
     */
    updateChildren () {
      for (let i = 0; i < this.$children.length; i++) {
        if (this.modle.has(this.$children[i].label)) {
          this.$children[i].currentValue = true
        } else {
          this.$children[i].currentValue = false
        }
      }
    }
  }
}
</script>
