<template>
  <button :type="nativeType"
          :disabled="disabled"
          @click="handleClick"
          :class="classes">
    <i class="dlz-loading-icon iconfont icon-loading" v-if="loading"></i>
    <i class="dlz-icon" :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

const prefixClass = 'dlz-button'

@Component
export default class Button extends Vue {
  private name: string = 'dlz-button';

  /**
   * primary / success / warning / danger / info
   */
  @Prop() private type!: string;

  /**
   * big / medium / small / mini
   */
  @Prop({
    type: String,
    default: 'big'
  }) private size!: string;

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

  private handleClick (event: any): void {
    this.$emit('click', event);
  }

  get classes (): object {
    const classes = {
      [`${prefixClass}`]: true,
      [`${prefixClass}-${this.type}`]: !!this.type,
      [`${prefixClass}-${this.size}`]: !!this.size,
      [`is-disabled`]: !!this.disabled,
      [`is-round`]: !!this.round,
    }
    return classes
  }
}
</script>
