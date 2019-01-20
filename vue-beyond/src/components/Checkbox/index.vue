<template>
  <label class="checkbox__wrapper">
    <input
      :checked="checked"
      type="checkbox"
      class="checkbox__input"
      @change="handleCheckboxChange"
    />
    <span
      class="ignore"
      :aria-checked="checked">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xuanze"></use>
        </svg>
      </div>
    </span>
    <slot/>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',

  model: {
    prop: 'checked',
    event: 'change'
  },

  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    /**
     * checkbox变化
     */
    handleCheckboxChange ($event) {
      this.$emit('change', $event.target.checked)
    }
  }
}
</script>

<style lang="less" scoped>
.checkbox__wrapper {
  & .checkbox__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    border-width: 0;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 0;
    padding: 0;
  }
  & .ignore {
    position: relative;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex: 0 0 16px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 221, 221);
    border-image: initial;
    transition: all 0.15s ease-in 0s;
  }
}
</style>
