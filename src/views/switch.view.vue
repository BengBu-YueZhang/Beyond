<template>
  <section class="block">
    <NirvanaSwitch/>
    <NirvanaSwitch
      active-color="#2ad68e"
      inactive-color="#fa657e"
    />
    <NirvanaSwitch
      :disabled="true"
    />
    <NirvanaSwitch
      v-model="value"
      :disabled="true"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import NirvanaSwitch from '../packages/Switch';

@Component({
  components: {
    NirvanaSwitch,
  },
})
export default class SwitchView extends Vue {
  private value: boolean = true;
}
</script>

<style lang="less" scoped>
.block {
  padding: 20px;
}
</style>
