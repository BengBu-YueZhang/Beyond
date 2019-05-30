<template>
  <div :class="inputWrapClasses">
    <template v-if="type !== 'textarea'">
      <div v-if="isVisiblePrepend">
      </div>
      <span v-if="isVisiblePrefix" :class="prefixClasses">
        <slot name="prefix"></slot>
      </span>
      <input
        ref="reference"
        :value="value"
        :type="type"
        :class="inputClasses"
        :disabled="disabled"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
        @click="handleClick"
        @input="handleInput"
      />
      <span v-if="isVisibleClear" :class="clearClasses">
        <Icon
          @click="handleClear"
          custom-class="dlz-icon-font-close-circle-fill"
        />
      </span>
      <span v-if="isVisibleSuffix" :class="suffixClasses">
        <slot name="suffix"></slot>
      </span>
      <span v-if="isVisibleWordCount" :class="wordCountClasses">{{ wordCount }}</span>
      <div v-if="isVisibleAppend">
      </div>
      <!-- 自动联想 -->
      <transition name="dropdown">
        <ul
          v-if="onSearch"
          v-show="isVisibleAutoComplete"
          ref="popper"
        >
          <Option
            v-for="(opt, index) in autoComplete"
            :label="opt.label"
            :value="opt.value"
            :key="index"
          />
        </ul>
      </transition>
    </template>
    <template v-else-if="type === 'textarea'">
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Pop from '../../lib/popper';
import Icon from '../Icon';
import { Option } from '../Select';
import is from '../../utils/is';
import { IOption } from '../../interface';

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
    Option,
  },
  model: {
    prop: 'value',
    event: 'input',
  },
})
export default class Input extends Vue {
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
  // 设置自动完成的数据
  @Prop() private onSearch!: (queryString: string, cb: (list: IOption[]) => any) => any;

  private popper!: Pop;
  private autoComplete: IOption[] = [];
  private focus: boolean = false;

  private mounted(): void {
    this.$nextTick(() => {
      if (is(Function, this.onSearch)) {
        this.popper = new Pop(
          this.$refs.reference as Element,
          this.$refs.popper as Element,
        );
      }
    });
  }

  get isVisibleAutoComplete(): boolean {
    return this.focus;
  }

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
    this.focus = false;
    this.$emit('blur', e);
  }

  private handleFocus(e: Event): void {
    this.focus = true;
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
    this.handleOnSearch(value);
    this.$emit('input', value);
  }

  private handleOnSearch(searchValue: string): void {
    if (is(Function, this.onSearch)) {
      this.onSearch(
        searchValue,
        this.handleOnSearchCallback,
      );
    }
  }

  private handleOnSearchCallback(list: IOption[]): void {
    if (is(Array, list)) {
      this.autoComplete = [...list];
      console.log('this.autoComplete', this.autoComplete)
    }
  }
}
</script>
