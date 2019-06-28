<template>
  <div :class="classes"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Inject } from 'vue-property-decorator';
import Validate from '../../utils/validate';
import { IComponent } from '../../utils/find';
import { IRule } from './Form.vue';

const prefixClass = 'dlz-form-item'

export enum ValidateState {
  Success = 'success',
  Error = 'error',
  Validating = 'validating',
}

@Component({
  name: 'FormItem',
})
export default class FormItem extends Vue {
  @Prop({ default: '' }) prop!:string;

  @Prop({ default: '' }) label!:string;

  @Prop({ default: '' }) labelWidth: number;

  get classes(): object {
    return {
    }
  }

  get fieldValue(): any {
    const model = this.form.model;
    return model[this.prop];
  }
 
  @Inject() readonly form!: IComponent;

  private isRequired:boolean = false;

  private validateState: ValidateState = ValidateState.Success;

  private validateMessage: string = '';

  private validateDisabled: boolean = false;

  private validator!: Validate;

  public validate(): void {
  }

  public reset(): void {
  }

  private created(): void {
    this.initIsRequired();
  }

  private getRules(): IRule[] {
    const rules = this.form.rules[this.prop];
    return rules;
  }

  private initIsRequired(): void {
    const rules = this.getRules();
    this.isRequired = false;
    rules.forEach(rule => {
      if (!this.isRequired) {
        this.isRequired = rule.required ? true : false;
      }
    });
  }
}
</script>
