<template>
  <section>
    <Input/>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Input from '../packages/Input';

@Component({
  components: {
    Input,
  },
})
export default class InputView extends Vue {
}
</script>

<style lang="less" scoped>
</style>
