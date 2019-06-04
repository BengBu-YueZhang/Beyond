<template>
  <section>
    <Switch/>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Switch from '../packages/Switch';

@Component({
  components: {
    Switch,
  },
})
export default class SwitchView extends Vue {
}
</script>

<style lang="less" scoped>
</style>
