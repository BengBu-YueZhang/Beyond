<template>
  <span
    @click="handleClick"
    :class="switchClasses"
    :style="switchStyles">
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

const prefixClass = 'dlz-switch';

@Component({
  name: 'NirvanaSwitch',
  model: {
    prop: 'value',
    event: 'change',
  },
})
export default class Switch extends Vue {
  @Prop({ default: false }) private value!: boolean;
  @Prop({ default: '' }) private activeClass!: string;
  @Prop({ default: '' }) private inactiveClass!: string;
  @Prop({ default: '' }) private disabledActiveClass!: string;
  @Prop({ default: '' }) private disabledInactiveClass!: string;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: '' }) private activeColor!: string;
  @Prop({ default: '' }) private inactiveColor!: string;

  private currentValue: boolean = this.value;

  @Watch('value')
  private onValueChange(newValue: boolean): void {
    this.currentValue = newValue;
  }

  get switchClasses(): object {
    const switchClass = {
      [`${prefixClass}`]: true,
      [`${prefixClass}-disabled`]: this.disabled,
      [`${prefixClass}-active`]: this.currentValue,
      [`${prefixClass}-inactive`]: !this.currentValue,
      [`${this.activeClass}`]: this.currentValue,
      [`${this.inactiveClass}`]: !this.currentValue,
      [`${this.disabledActiveClass}`]: this.disabled && this.currentValue,
      [`${this.disabledInactiveClass}`]: this.disabled && !this.currentValue,
    };
    return switchClass;
  }

  get switchStyles(): object {
    const switchStyle: any = {};
    if (this.currentValue && this.activeColor) {
      switchStyle.backgroundColor = this.activeColor;
      switchStyle.borderColor = this.activeColor;
    } else if (!this.currentValue && this.inactiveColor) {
      switchStyle.backgroundColor = this.inactiveColor;
      switchStyle.borderColor = this.inactiveColor;
    }
    return switchStyle;
  }

  private handleClick(): void {
    if (this.disabled) {
      return;
    }
    this.currentValue = !this.currentValue;
    this.$emit('change', this.currentValue);
  }
}
</script>
