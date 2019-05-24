<template>
  <div :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

const prefixClass = 'dlz-row'

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
  private name: string = 'row';

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

  @Watch('gutter')
  private onGutterChange(newGutter: number) {
    this.handleGutterChange(newGutter);
  }

  private handleGutterChange(gutter: number) {
  }
}
</script>
