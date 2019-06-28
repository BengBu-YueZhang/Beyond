<template>
  <div :class="collapseClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch, Provide } from 'vue-property-decorator';

const prefixClass = 'dlz-collapse';

@Component({
  name: 'Collapse',
  model: {
    event: 'change',
    prop: 'value',
  },
})
export default class Collapse extends Vue {
  @Prop({
    default() {
      return []
    }
  }) private value!: string | string[];

  @Prop({ default: false }) accordion!: boolean;

  @Watch('vlaue')
  private onValueChange(newValue: string | string[]) {
    this.currentValue = [].concat(this.value);
  }

  @Provide('collapse')
  private collapse: Collapse = this;

  get collapseClasses(): object {
    const collapseClass = {
      [`${prefixClass}`]: true,
    };
    return collapseClass;
  }

  // 当前激活的collapse-item
  public currentValue: string[] = [].concat(this.value);

  private created(): void {
    this.$on('collapse-item-click', this.handleCollapseItemClick);
  }

  private handleCollapseItemClick(collapseItemName: string): void {
    if (this.accordion) {
      if (this.currentValue[0] === collapseItemName) {
        this.setCurrentValue('');
      } else {
        this.setCurrentValue(collapseItemName);
      }
    } else {
      let tempCurrentValue = [...this.currentValue];
      let index = tempCurrentValue.indexOf(collapseItemName);
      if (index === -1) {
        tempCurrentValue = [...tempCurrentValue, collapseItemName];
      } else {
        tempCurrentValue.splice(index, 1)
      }
      this.setCurrentValue(tempCurrentValue);
    }
  }

  private setCurrentValue(value: string | string[]): void {
    value = [].concat(value);
    if (this.accordion) {
      this.currentValue = [].concat(value[0]);
    } else {
      this.currentValue = [].concat(value);
    }
  }
}
</script>
