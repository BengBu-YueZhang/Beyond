<template>
  <div :style="styles" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { findChildsComponentByFirstLLevel } from '../../utils/find';

const prefixClass = 'dlz-row';

enum Type {
  flex = 'flex',
  default = '',
}

enum Align {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
  default = '',
}

enum Justify {
  start = 'start',
  end = 'end',
  center = 'center',
  'space-around' = 'space-around',
  'space-between' = 'space-between',
  default = '',
}

@Component({
  name: 'Row',
})
export default class Row extends Vue {
  @Prop({ default: 0 }) private gutter!: number;

  @Prop({ default: '' }) private 'custom-class'!: string;

  @Prop({ default: Type.default }) private type!: Type;

  @Prop({ default: Align.default }) private align!: Align;

  @Prop({ default: Justify.default }) private justify!: Justify;

  get styles(): object {
    let style = {};
    if (this.gutter !== 0) {
      style = {
        marginLeft: `-${this.gutter}px`,
        marginRight: `-${this.gutter}px`,
      };
    }
    return style;
  }

  get isFlexType(): boolean {
    return this.type !== Type.default;
  }

  get classes(): object {
    console.log(this.align)
    const classes = {
      [`${prefixClass}`]: true,
      [`${prefixClass}-${this.type}`]: this.isFlexType,
      [`${prefixClass}-${this.align}`]: this.isFlexType && this.align,
      [`${prefixClass}-${this.justify}`]: this.isFlexType && this.justify,
      [`${this['custom-class']}`]: !!this['custom-class'],
    };
    return classes;
  }

  @Watch('gutter')
  private onGutterChange(newGutter: number) {
    this.handleGutterChange(newGutter);
  }

  private handleGutterChange(gutter: number) {
    const cols = findChildsComponentByFirstLLevel(this, 'Col');
    if (cols.length) {
      cols.forEach((col) => {
        col.gutter = this.gutter;
      });
    }
  }
}
</script>