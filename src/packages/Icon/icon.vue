<template>
  <i :style="styles" class="icons" @click="handleClick">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

interface Style {
  'font-size'?: string | number;
  color?: string;
}

@Component
export default class Icons extends Vue {
  @Prop() private size!: string | number;
  @Prop() private color!: string;

  get styles() {
    const style: Style = {};
    if (this.size) {
      style['font-size'] = `${this.size}px`;
    }
    if (this.color) {
      style.color = `${this.color}`;
    }
    return style;
  }

  private handleClick(event: any) {
    this.$emit('click', event);
  }
}
</script>

<style lang="less" scoped>
.icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;
  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;
  /* Support for IE. */
  font-feature-settings: 'liga';
}
</style>
