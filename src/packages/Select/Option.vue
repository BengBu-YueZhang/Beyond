<template>
  <li
    :class="optionClasses"
    @click.stop="handleClick">
    <slot>{{ label }}</slot>
  </li>
</template>

<script lang="ts">
/**
 * Todo:
 * 未来在做Select组件时会重构
 */
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

const prefixClass = 'dlz-select-option';

@Component({
  name: 'Option',
})
export default class Option extends Vue {
  @Prop({ required: true }) private value!: string;
  @Prop() private label!: string;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: false }) private selected!: boolean;

  get optionClasses(): object {
    const optionClass = {
      [`${prefixClass}`]: true,
      [`${prefixClass}-selected`]: this.selected,
    };
    return optionClass;
  }

  private handleClick(): void {
    if (this.disabled) {
      return;
    }
    this.$emit('select-option', {
      label: this.label,
      value: this.value,
    });
  }
}
</script>
