<template>
  <!-- 自动联想 -->
  <transition name="dropdown">
    <div v-if="onSearch" v-show="isVisibleAutoComplete" ref="popper" class="dlz-dropdown">
      <div v-if="!autoComplete.length" class="dlz-select-dropdown-list">
        <span>未搜索到相关数据</span>
      </div>
      <ul v-if="autoComplete.length" class="dlz-select-dropdown-list">
        <Option
          v-for="(opt, index) in autoComplete"
          target-component-name="Input"
          :label="opt.label"
          :value="opt.value"
          :key="index"
        />
      </ul>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { directive as clickOutside } from 'v-click-outside-x';
import { Option } from '../Select';
import { IOption } from '../../interface';
import Pop from '../../lib/popper';

export default class Autocomplete extends Vue {
  // 设置自动完成的数据
  @Prop() private onSearch!: (queryString: string, cb: (list: IOption[]) => any) => any;
  

  private popper!: Pop;
  private autoComplete: IOption[] = [];
  private focus: boolean = false;

  @Watch('isVisibleAutoComplete')
  private onVisibleAutoCompleteChange(): void {
    if (this.isVisibleAutoComplete) {
      this.popper.active();
    } else {
      this.popper.destroy();
    }
  }

  get isVisibleAutoComplete(): boolean {
    return this.focus && this.autoComplete.length > 0;
  }

  private mounted(): void {
    this.$on('select-option', this.handleSelectOption);
    this.$nextTick(() => {
      if (is(Function, this.onSearch)) {
        this.popper = new Pop(
          this.$refs.reference as Element,
          this.$refs.popper as Element,
        );
      }
    });
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
    }
  }

  private handleSelectOption(select: IOption): void {
    const { value } = select;
    this.$emit('change', {
      target: {
        value,
      },
    });
    this.$emit('input', value);
  }
}
</script>