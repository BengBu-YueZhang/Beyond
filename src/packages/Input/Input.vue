<template>
  <div>
    <template v-if="type !== 'textarea'">
      <div v-if="visiblePrepend"></div>
      <input
        :type="type"
        ref="reference"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
        @click="handleClick"
      />
      <div v-if="visibleAppend"></div>
      <Icon @click="handleClear" custom-class="iconfont icon-close-circle-fill"/>
      <!-- 自动完成 -->
      <transition name="dropdown">
        <div v-show="visibleAutoComplete" ref="popper"></div>
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
  tel = 'tel'
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
  @Prop({ default: Type.text }) type!: string;
  @Prop({ default: Size.default }) value!: string | number;
  @Prop({ default: '' }) placeholder!: string;
  @Prop({ default: false }) clearable!: boolean;
  @Prop({ default: false }) disabled!: boolean;
  @Prop() maxlength!: number;
  @Prop() prefix!: string;
  @Prop() suffix!: string;
  @Prop({ default: false }) autofocus!: boolean;
  // 设置自动完成的数据
  @Prop() onSearch!: (queryString: string, cb: () => any) => any;

  private popper!: Pop;
  private visibleAutoComplete: boolean = false;
  private visiblePrepend: boolean = false;
  private visibleAppend: boolean = false;

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
