<template>
  <i :style="styles" :class="classes" @click="handleClick">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

const prefixClass = 'dlz-icon';

interface Style {
  'font-size'?: string | number;
  color?: string;
}

@Component
export default class Icon extends Vue {
  @Prop() private size!: string | number;

  @Prop() private color!: string;

  @Prop({ default: '' }) private customClass!: string;

  get styles(): Style {
    const style: Style = {};
    if (this.size) {
      style['font-size'] = `${this.size}px`;
    }
    if (this.color) {
      style.color = `${this.color}`;
    }
    return style;
  }

  get classes(): object {
    // dlz-icons 谷歌字体的格式
    // dlz-icon-font ui库中自带的字体的格式
    const classes = {
      'dlz-icon-font': !!this.customClass,
      [`${this.customClass}`]: !!this.customClass,
      'dlz-icons': !this.customClass,
    };
    return classes;
  }

  private handleClick(event: any) {
    this.$emit('click', event);
  }
}
</script>
