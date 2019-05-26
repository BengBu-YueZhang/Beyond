<template>
  <i :style="styles" class="dlz-icons" @click="handleClick">
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

  private handleClick(event: any) {
    this.$emit('click', event);
  }
}
</script>
