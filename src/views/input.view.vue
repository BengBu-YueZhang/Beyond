<template>
  <section class="input-view-wrapper">
    <Input/>
    <Input :clearable="true"/>
    <Input>
      <span slot="prefix">
        <Icon custom-class="dlz-icon-font-close-circle-fill"/>
      </span>
      <span slot="suffix">
        <Icon custom-class="dlz-icon-font-close-circle-fill"/>
      </span>
    </Input>
    <Input size="large"/>
    <Input size="small"/>
    <Input :disabled="true"/>
    <Input placeholder="我爱你"/>
    <Input v-model="value1"/>
    <Input :value="value2" @input="handleInput"/>
    <Input :maxlength="10"/>
    <Input v-model="value3" :maxlength="300" :show-word-count="true" />
    <Input v-model="value4" :onSearch="handleSearch"/>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Input from '../packages/Input';
import Icon from '../packages/Icon';
import { IOption } from '../interface';

@Component({
  components: {
    Input,
    Icon,
  },
})
export default class InputView extends Vue {
  private value1: string = 'Hello World';
  private value2: string = 'I Love You';
  private value3: string = 'Kiss';
  private value4: string = '';

  private handleInput(val: string): void {
    this.value2 = val;
  }

  private handleSearch(queryString: string, cb: (list: IOption[]) => any): void {
    // 测试
    const list = [];
    for (let i = 0; i < 3; i++) {
      list.push({
        label: `${queryString}-${i}`,
        value: `${queryString}-${i}`,
      });
    }
    cb(list);
  }
}
</script>

<style lang="less" scoped>
.input-view-wrapper {
  padding: 50px;
}
</style>
