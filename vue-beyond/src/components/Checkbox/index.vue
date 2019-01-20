<template>
  <label class="checkbox__wrapper">
    <input
      :checked="checked"
      :value="label"
      type="checkbox"
      class="checkbox__input"
      @change="handleCheckboxChange"
    />
    <span
      class="ignore"
      :aria-checked="checked">
      <svg aria-hidden="true" :aria-checked="checked" class="checked__icon">
        <use class="checked__icon-use" xlink:href="#icon-xuanze"></use>
      </svg>
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
    },

    label: {
      type: String,
      required: false
    }
  },

  methods: {
    /**
     * checkbox变化
     */
    handleCheckboxChange ($event) {
      if (this.props.label !== undefined) {
        this.$emit('change', $event.target.value)
      } else {
        this.$emit('change', $event.target.checked)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.checkbox__wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 0px;
  flex: 0 0 auto;
  transition: all 0.3s ease 0s;
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
  .ignore {
    position: relative;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex: 0 0 16px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(221, 221, 221);
    border-image: initial;
    transition: all 0.15s ease-in 0s;
  }
  .ignore[aria-checked="true"] {
    border-color: rgb(234, 67, 53);
    background: rgb(234, 67, 53);
  }
  .checked__icon {
    display: none;
  }
  .checked__icon[aria-checked="true"] {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    fill: currentcolor;
    & .checked__icon-use {
      color: #fff;
    }
  }
}
</style>
