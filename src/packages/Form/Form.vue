<template>
  <from :class="classes">
    <slot></slot>
  </from>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Provide } from 'vue-property-decorator';
import { findChildsComponent, IComponent } from '../../utils/find';

const prefixClass = 'dlz-form'

export interface IModel {
  [key: string]: any;
}

export enum Trigger {
  Change = 'change',
  Blur = 'blur',
}

export interface IRule {
  required?: boolean;
  message?: string;
  trigger?: Trigger;
  type?: string;
}

export interface IRules {
  [key: string]: IRule[],
}

@Component({
  name: 'Form',
})
export default class Form extends Vue {
  @Prop({
    default() {
      return {};
    }
  }) model!: IModel;

  @Prop({
    default() {
      return {};
    }
  }) rules!: IRules;

  @Prop({ default: 80 }) labelWidth: number;

  get classes(): object {
    return {
    }
  }

  @Provide() form = this;

  private formItems: IComponent[] = [];

  private mounted(): void {
    this.$nextTick(() => {
      this.formItems = findChildsComponent(this, 'FormItem');
    });
  }

  public async validate(): Promise<any> {
  }

  public reset(): void {
    this.formItems.forEach(item => {
      item.reset();
    })
  }
}
</script>