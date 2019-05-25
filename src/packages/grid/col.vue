<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

const prefixClass = 'dlz-col';

@Component({
  name: 'Col',
})
export default class Col extends Vue {
  private name: string = 'Col';

  @Prop() private span!: number | string;

  @Prop() private offset!: number | string;

  @Prop() private order!: number | string;

  @Prop({ default: '' }) private 'custom-class'!: string;

  private gutter!: number;

  get classes(): object {
    let classes = {
      [`${prefixClass}`]: true,
      [`${prefixClass}-span-${this.span}`]: !!this.span,
      [`${prefixClass}-order-${this.order}`]: !!this.order,
      [`${prefixClass}-offset-${this.offset}`]: !!this.offset,
      [`${this['custom-class']}`]: !!this['custom-class'],
    };
    return classes;
  }

  get styles(): object {
    let style = {};
    if (this.gutter !== 0) {
      style = {
        paddingLeft: `${this.gutter / 2}px`,
        paddingRight: `${this.gutter / 2}px`,
      };
    }
    return style;
  }
}
</script>
