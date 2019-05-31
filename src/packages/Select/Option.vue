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
import { EmitterMixin } from '../../mixins';

const prefixClass = 'dlz-select-item';

@Component({
  name: 'Option',
  mixins: [EmitterMixin],
})
export default class Option extends Vue {
  @Prop({ required: true }) private value!: string;
  @Prop() private label!: string;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: false }) private selected!: boolean;
  @Prop({ default: 'Select' }) private targetComponentName!: string;

  get optionClasses(): object {
    const optionClass = {
      [`${prefixClass}`]: true,
      [`${prefixClass}-selected`]: this.selected,
    };
    return optionClass;
  }

  private dispatch!: (...params: any[]) => any

  private handleClick(): void {
    if (this.disabled) {
      return;
    }
    this.$emit('select-option', {
      label: this.label,
      value: this.value,
    });
    this.dispatch(this.targetComponentName, 'select-option', {
      label: this.label,
      value: this.value,
    });
  }
}
</script>
