<template>
  <div :class="collapseItemClasses">
    <div>
      <div
        @click="handleCollapseItemClick"
        :class="collapseItemHeaderClasses">
        <slot name="title">{{ title }}</slot>
        <span :class="collapseItemHeaderIconClasses">
          <Icon
            color="#909399"
            custom-class="dlz-icon-font-right"
          />
        </span>
      </div>
    </div>
    <transition>
      <div
        v-show="isActive"
        :class="collapseItemContentWrapClasses">
        <div :class="collapseItemContentClasses">
          <slot>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Inject } from 'vue-property-decorator';
import { EmitterMixin } from '../../mixins';
import Collapse from './Collapse.vue';
import Icon from '../Icon';
import { uuid } from '../../utils/utils';

const prefixClass = 'dlz-collapse-item'

@Component({
  name: 'CollapseItem',
  mixins: [EmitterMixin],
  components: {
    Icon,
  },
})
export default class CollapseItem extends Vue {
  @Prop({ default: uuid() }) private name!: string;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: '' }) private title!: string;

  @Inject('collapse') private collapse: Collapse;

  get collapseItemClasses(): object {
    const collapseItemClass = {
      [`${prefixClass}`]: true,
      [`${prefixClass}-disabled`]: this.disabled,
    };
    return collapseItemClass;
  }

  get collapseItemHeaderClasses(): object {
    const collapseItemHeaderClass = {
      [`${prefixClass}-header`]: true,
      [`${prefixClass}-header-disabled`]: this.disabled,
      [`${prefixClass}-header-active`]: this.isActive,
    };
    return collapseItemHeaderClass;
  }

  get collapseItemHeaderIconClasses(): string {
    const collapseItemHeaderIconClass = this.isActive ?
      `${prefixClass}-header-icon-active` :
      `${prefixClass}-header-icon`;
    return collapseItemHeaderIconClass;
  }

  get collapseItemContentWrapClasses(): object {
    const collapseItemContentWrapClass = {
      [`${prefixClass}-content-wrap`]: true,
      [`${prefixClass}-content-wrap-disabled`]: this.disabled,
    };
    return collapseItemContentWrapClass;
  }

  get collapseItemContentClasses(): object {
    const collapseItemContentClass = {
      [`${prefixClass}-content`]: true
    };
    return collapseItemContentClass;
  }

  private created(): void {
    this.$on('collapse-active-update', this.handleCollapseActiveUpdate);
  }

  private isActive: boolean = this.collapse.currentValue.indexOf(this.name) > -1;

  private dispatch!: (targetName: string, eventName: string, params: any) => void;

  private handleCollapseItemClick(): void {
    if (!this.disabled) {
      this.dispatch('Collapse', 'collapse-item-click', this.name);
    }
  }

  private handleCollapseActiveUpdate(actives: string[]): void {
    this.isActive = actives.indexOf(this.name) > -1;
  }
}
</script>
