<template>
  <button :type="nativeType"
          :disabled="disabled"
          @click="handleClick"
          :class="classes">
    <i class="dlz-loading-icon dlz-icon-font-loading" v-if="loading"></i>
    <i class="dlz-icon" :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script lang="ts">

enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info',
}

enum ButtonSize {
  Big = 'big',
  Medium = 'medium',
  Small = 'small',
  Mini = 'mini',
}

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

const prefixClass = 'dlz-button';

@Component
export default class Button extends Vue {
  private name: string = 'dlz-button';

  @Prop({
    type: String,
    default: ButtonType.Default,
  }) private type!: ButtonType;

  @Prop({
    type: String,
    default: ButtonSize.Big,
  }) private size!: ButtonSize;

  @Prop({
    type: String,
    default: 'button',
  }) private nativeType!: string;

  @Prop({
    type: Boolean,
    default: false,
  }) private round!: boolean;

  @Prop({
    type: Boolean,
    default: false,
  }) private disabled!: boolean;

  @Prop({
    type: Boolean,
    default: false,
  }) private loading!: boolean;

  @Prop({
    type: String,
    default: '',
  }) private icon!: string;

  @Prop({
    type: Boolean,
    default: false,
  }) private plain!: boolean;

  private handleClick(event: any): void {
    this.$emit('click', event);
  }

  get classes(): object {
    const classes = {
      [`${prefixClass}`]: true,
      [`${prefixClass}-${this.type}`]: !!this.type,
      [`${prefixClass}-${this.size}`]: !!this.size,
      [`is-disabled`]: !!this.disabled,
      [`is-round`]: !!this.round,
      [`is-loading`]: !!this.loading,
      [`${prefixClass}-${this.type}-plain`]: !!this.plain && !!this.type,
    };
    return classes;
  }
}
</script>
