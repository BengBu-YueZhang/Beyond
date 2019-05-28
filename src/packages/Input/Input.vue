<template>
  <div>
    <template v-if="type !== 'textarea'">
      <div v-if="isVisiblePrepend">
      </div>
      <div v-if="isVisiblePrefix">
      </div>
      <input
        :type="type"
        ref="reference"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
        @click="handleClick"
      />
      <Icon
        v-if="isVisibleClear"
        @click="handleClear"
        custom-class="iconfont icon-close-circle-fill"
      />
      <div v-if="isVisiblePrepend">
      </div>
      <div v-if="isVisibleAppend">
      </div>
      <!-- 自动完成下来框 -->
      <transition name="dropdown">
        <div v-show="isVisibleAutoComplete" ref="popper"></div>
      </transition>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Pop from '../../lib/popper';
import Icon from '../Icon';

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
  @Prop({ default: Size.default }) private value!: string | number;
  @Prop({ default: '' }) private placeholder!: string;
  @Prop({ default: false }) private clearable!: boolean;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop() private maxlength!: number;
  @Prop() private prefix!: string;
  @Prop() private suffix!: string;
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
