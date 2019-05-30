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
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Input from '../packages/Input';
import Icon from '../packages/Icon';

@Component({
  components: {
    Input,
    Icon,
  },
})
export default class InputView extends Vue {
  private value1: string = 'Hello World';
  private value2: string = 'I Love You';

  private handleInput(val: string): void {
    this.value2 = val;
  }
}
</script>

<style lang="less" scoped>
.input-view-wrapper {
  padding: 50px;
}
</style>
