<template>
  <div :class="inputWrapClasses">
    <template v-if="type !== 'textarea'">
      <!-- 前置组合组件 -->
      <div v-if="isVisiblePrepend">
      </div>
      <!-- 前置icon -->
      <span v-if="isVisiblePrefix" :class="prefixClasses">
        <slot name="prefix"></slot>
      </span>
      <input
        ref="inputRef"
        :name="name"
        :value="value"
        :type="type"
        :class="inputClasses"
        :disabled="disabled"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :autofocus="autofocus"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
        @click="handleClick"
        @input="handleInput"
      />
      <!-- clear icon -->
      <span v-if="isVisibleClear" :class="clearClasses">
        <Icon
          @click="handleClear"
          custom-class="dlz-icon-font-close-circle-fill"
        />
      </span>
      <!-- 后置icon -->
      <span v-if="isVisibleSuffix" :class="suffixClasses">
        <slot name="suffix"></slot>
      </span>
      <!-- 输入字数 -->
      <span v-if="isVisibleWordCount" :class="wordCountClasses"><span>{{ wordCount }}</span></span>
      <!-- 后置组合组件 -->
      <div v-if="isVisibleAppend">
      </div>
    </template>
    <template v-else-if="type === 'textarea'">
      <textarea
        ref="textareaRef"
        :name="name"
        :autofocus="autofocus"
        :rows="rows"
        :spellcheck="spellcheck"
        :disabled="disabled"
        :placeholder="placeholder"
        :value="value"
        :readonly="readonly"
        :class="textareaClasses"
        :maxlength="maxlength"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
        @keyup="handleKeyUp"
        @keypress="handleKeyPress"
        @keydown="handleKeyDown"
        @keyup.enter="handleEnter">
      </textarea>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Icon from '../Icon';
import is from '../../utils/is';

const prefixClass = 'dlz-input';

enum Type {
  text = 'text',
  password = 'password',
  textarea = 'textarea',
  url = 'url',
  email = 'email',
  date = 'date',
  number = 'number',
  tel = 'tel',
}

enum Size {
  large = 'large',
  small = 'small',
  default = 'default',
}

@Component({
  name: 'Input',
  components: {
    Icon,
  },
  model: {
    prop: 'value',
    event: 'input',
  },
})
export default class Input extends Vue {
  @Prop() private name!: string;
  @Prop({ default: Type.text }) private type!: string;
  @Prop({ default: Size.default }) private size!: string;
  @Prop({ default: '' }) private value!: string;
  @Prop({ default: '' }) private placeholder!: string;
  @Prop({ default: false }) private clearable!: boolean;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop() private maxlength!: number;
  @Prop({ default: false }) private autofocus!: boolean;
  // 是否显示自数统计
  @Prop({ default: false }) private showWordCount!: boolean;

  @Prop({ default: 2 }) private rows!: number;
  @Prop({ default: false }) private spellcheck!: boolean;
  @Prop({ default: false }) private readonly!: boolean;

  get isVisiblePrefix(): boolean {
    if (this.$slots.prefix) {
      return true;
    }
    return false;
  }

  get isVisibleSuffix(): boolean {
    if (this.$slots.suffix && !this.clearable) {
      return true;
    }
    return false;
  }

  get isVisiblePrepend(): boolean {
    if (this.$slots.prepend) {
      return true;
    }
    return false;
  }

  get isVisibleAppend(): boolean {
    if (this.$slots.append) {
      return true;
    }
    return false;
  }

  get isVisibleClear(): boolean {
    if (this.clearable) {
      return true;
    }
    return false;
  }

  get isVisibleWordCount(): boolean {
    if (this.showWordCount && !this.clearable && !this.$slots.suffix) {
      return true;
    }
    return false;
  }

  get textareaClasses(): object {
    const textareaClass = {
    };
    return textareaClass;
  }

  get inputWrapClasses(): object {
    const wrapClass = {
      [`${prefixClass}-wrapper`]: true,
      [`${prefixClass}-wrapper-${this.size}`]: true,
    };
    return wrapClass;
  }

  get inputClasses(): object {
    const inputClass = {
      [`${prefixClass}`]: true,
      [`${prefixClass}-${this.size}`]: true,
      [`${prefixClass}-include-suffix`]: this.isVisibleSuffix,
      [`${prefixClass}-include-prefix`]: this.isVisiblePrefix,
      [`${prefixClass}-disabled`]: this.disabled,
    };
    return inputClass;
  }

  get prefixClasses(): object {
    const prefixClas = {
      [`${prefixClass}-icon`]: true,
      [`${prefixClass}-icon-prefix`]: true,
    };
    return prefixClas;
  }

  get suffixClasses(): object {
    const suffixClass = {
      [`${prefixClass}-icon`]: true,
      [`${prefixClass}-icon-suffix`]: true,
    };
    return suffixClass;
  }

  get clearClasses(): object {
    const clearClass = {
      [`${prefixClass}-icon`]: true,
      [`${prefixClass}-icon-clear`]: true,
    };
    return clearClass;
  }

  get wordCountClasses(): object {
    const wordCountClass = {
      [`${prefixClass}-word-count`]: true,
      [`${prefixClass}-icon-suffix`]: true,
    };
    return wordCountClass;
  }

  get wordCount(): string {
    let total!: number;
    const current = this.value.length;
    if (typeof this.maxlength === 'number' && !isNaN(this.maxlength)) {
      total = this.maxlength;
    }
    return `${current}/${total}`;
  }

  private handleBlur(e: Event): void {
    this.$emit('blur', e);
  }

  private handleFocus(e: Event): void {
    this.$emit('focus', e);
  }

  private handleChange(e: Event): void {
    this.$emit('change', e);
  }

  private handleClick(e: Event): void {
    this.$emit('click', e);
  }

  private handleClear(e: Event): void {
    this.$emit('input', '');
    this.$emit('change', {
      target: {
        value: '',
      },
    });
    this.$emit('clear');
  }

  private handleInput(e: Event): void {
    const value: string = (e.target as HTMLInputElement).value;
    this.$emit('input', value);
  }

  private handleKeyUp(e: Event): void {
    this.$emit('keyup', e);
  }

  private handleKeyPress(e: Event): void {
    this.$emit('keypress', e);
  }

  private handleKeyDown(e: Event): void {
    this.$emit('keydown', e);
  }

  private handleEnter(e: Event): void {
    this.$emit('enter', e);
  }
}
</script>
