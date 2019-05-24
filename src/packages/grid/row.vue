<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { findChildComponent, findBrotherComponent } from '../../utils/find';

enum Type {
  flex = 'flex',
}

enum Align {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
}

enum Justify {
  start = 'start',
  end = 'end',
  center = 'center',
  'space-around' = 'space-around',
  'space-between' = 'space-between',
}

interface Style {
  marginLeft?: string;
  marginRight?: string;
}

@Component
export default class Row extends Vue {
  @Prop({ default: 0 }) private gutter!: number;

  @Prop() private type!: Type;

  @Prop() private align!: Align;

  @Prop() private justify!: Justify;

  @Prop({ default: '' }) private 'custom-class'!: string;

  get styles(): Style {
    let style = {};
    if (this.gutter !== 0) {
      style = {
        marginLeft: `-${this.gutter}px`,
        marginRight: `-${this.gutter}px`,
      };
    }
    return style;
  }
}
</script>

<style lang="less" scoped>
</style>
