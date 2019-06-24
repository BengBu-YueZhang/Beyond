<template>
  <label :class="mainClass">
    <span :class="radioClass">
      <span :class="innerClass"></span>
      <input type="radio"
             :class="inputClass"
             :disabled="disabled"
             :checked="currentValue"
             :name="groupName"
             @change="change"
             @focus="onFocus"
             @blur="onBlur"/>
    </span>
    <slot>{{ label }}</slot>
  </label>
</template>
<script lang="ts">  
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { findParentComponent } from './../../utils/find';
import { EmitterMixin } from './../../mixins'
const prefixClass = 'dlz-radio';

@Component({
  mixins: [EmitterMixin],
})
export default class Radio extends Vue {
  @Prop({
    type: Boolean,
    default: true
  })
  private disabled!: boolean;

  @Prop(String)
  private groupName!: string;

  @Prop([String, Number],)
  private label!: string | number;

  @Prop(String)
  private name!: string;

  @Prop({
    type: [String, Number, Boolean],
    default: false
  })
  private value!: string | number | boolean;

  @Prop({
    type: [String, Number, Boolean],
    default: true
  })
  private trueValue!: string | number | boolean;

  @Prop({
    type: [String, Number, Boolean],
    default: false
  })
  private falseValue!: string | number | boolean;

  private currentValue: string | number | boolean = this.value;
  private group: boolean = false;
  private parent: any = findParentComponent(this, 'RadioGroup');

  private change(event: Event | any) {
    console.log(event)
    if (this.disabled) {
      return false;
    }
    const checked = event.target.checked;
    this.currentValue = checked;

    const value = checked ? this.trueValue : this.falseValue
    this.$emit('input', value)

    if (this.group) {
      if (this.label !== undefined) {
        // 
      }
    } else {
      this.$emit('on-change', value)
      // this.dispatch('')
    }
  }

  private onFocus() {
  }

  private onBlur() {
  }

  get mainClass() {
    return [
      `${prefixClass}-wrapper`,
      {
        [`${prefixClass}-group-item`]: this.group,
        [`${prefixClass}-wrapper-checked`]: this.currentValue,
        [`${prefixClass}-wrapper-disabled`]: this.disabled,
      },
    ];
  }

  get radioClass() {
    return [
      `${prefixClass}-wrapper-container`,
    ];
  }

  get inputClass() {
    return [
      `${prefixClass}-wrapper-container-input`,
    ];
  }

  get innerClass() {
    return [
      `${prefixClass}-wrapper-container-inner`,
    ];
  }

  private mounted() {
    console.log(this.value)
    if (this.parent) {
      this.group = true;
    }

    if (this.group) {
      // this.update
    } else {
      // this.updateValue()
    }
  }
}
</script>
