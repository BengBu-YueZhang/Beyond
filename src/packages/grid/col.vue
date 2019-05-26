<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { findParentComponent } from '../../utils/find';

const prefixClass = 'dlz-col';

@Component({
  name: 'Col',
})
export default class Col extends Vue {
  @Prop() private span!: number | string;

  @Prop() private offset!: number | string;

  @Prop() private order!: number | string;

  @Prop({ default: '' }) private 'custom-class'!: string;

  private gutter!: number;

  get classes(): object {
    const classes = {
      [`${prefixClass}`]: true,
      [`${prefixClass}-span-${this.span}`]: !!this.span,
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

  private mounted(): void {
    this.handleGutterChange();
  }

  private handleGutterChange() {
    const Row = findParentComponent(this, 'Row');
    if (Row) {
      Row.handleGutterChange(Row.gutter);
    }
  }
}
</script>
