<template>
  <div :class="inputWrapClasses">
    <template v-if="type !== 'textarea'">
      <div v-if="isVisiblePrepend">
      </div>
      <span v-if="isVisiblePrefix">
      </span>
      <input
        :type="type"
        ref="reference"
        :class="inputClasses"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
        @click="handleClick"
      />
      <span v-if="isVisibleClear">
        <Icon
          @click="handleClear"
          custom-class="dlz-icon-font-close-circle-fill"
        />
      </span>
      <span v-if="isVisibleSuffix">
      </span>
      <div v-if="isVisibleAppend">
      </div>
      <!-- 自动完成下来框 -->
      <transition name="dropdown">
        <div v-show="isVisibleAutoComplete" ref="popper"></div>
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
})
export default class Input extends Vue {
  @Prop({ default: Type.text }) private type!: string;
  @Prop({ default: Size.default }) private size!: string;
  @Prop({ default: '' }) private value!: string | number;
  @Prop({ default: '' }) private placeholder!: string;
  @Prop({ default: false }) private clearable!: boolean;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop() private maxlength!: number;
  @Prop({ default: false }) private autofocus!: boolean;
  // 设置自动完成的数据
  @Prop() private onSearch!: (queryString: string, cb: () => any) => any;

  private popper!: Pop;
  private isVisibleAutoComplete: boolean = false;

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
      [`${prefixClass}-suffix`]: this.isVisibleSuffix,
      [`${prefixClass}-prefix`]: this.isVisiblePrefix,
    };
    return inputClass;
  }

  private mounted(): void {
    this.$nextTick(() => {
      this.popper = new Pop(
        this.$refs.reference as Element,
        this.$refs.popper as Element,
      );
    });
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
    this.$emit('clear', '');
  }
}
</script>
