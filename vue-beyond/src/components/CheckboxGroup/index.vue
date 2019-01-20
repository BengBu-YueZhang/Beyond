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
    },

    isMultiple: {
      type: Boolean,
      required: false,
      default: true
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
      if (this.isMultiple) {
        if (checked) {
          this.modle.add(value)
        } else {
          this.modle.delete(value)
        }
      } else {
        if (checked) {
          this.modle = new Set([value])
        } else {
          this.modle.clear()
        }
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
