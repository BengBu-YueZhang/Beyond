<template>
  <section class="input-view-wrapper">
    <div class="block"><Input/></div>
    <div class="block"><Input :clearable="true"/></div>
    <div class="block">
      <Input>
        <span slot="prefix">
          <Icon custom-class="dlz-icon-font-close-circle-fill"/>
        </span>
        <span slot="suffix">
          <Icon custom-class="dlz-icon-font-close-circle-fill"/>
        </span>
      </Input>
    </div>
    <div class="block">
      <Input size="large"/>
    </div>
    <div class="block">
      <Input size="small"/>
    </div>
    <div class="block">
      <Input :disabled="true"/>
    </div>
    <div class="block">
      <Input placeholder="我爱你"/>
    </div>
    <div class="block">
      <Input v-model="value1"/>
    </div>
    <div class="block">
      <Input :value="value2" @input="handleInput"/>
    </div>
    <div class="block">
      <Input :maxlength="10"/>
    </div>
    <div class="block">
      <Input v-model="value3" :maxlength="300" :show-word-count="true" />
    </div>
    <div class="block">
      <Input v-model="value4" type="textarea" />
    </div>
    <div class="block">
      <Input v-model="value5" :max-rows="maxRows" type="textarea" :autosize="true" />
    </div>
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
  private value5: string = '';
  private maxRows: number = 4;

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

.block {
  padding: 60px;
  margin: 10px;
}
</style>
