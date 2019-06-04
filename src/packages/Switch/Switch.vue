<template>
  <span @click="handleClick" :class="switchClasses">
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

const prefixClass = 'dlz-switch';

@Component({
  name: 'Switch',
})
export default class Switch extends Vue {
  @Prop({ default: false }) private value!: boolean;
  @Prop({ default: '' }) private activeClass!: string;
  @Prop({ default: '' }) private inactiveClass!: string;
  @Prop({ default: false }) private disabled!: boolean;

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
    };
    return switchClass;
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
