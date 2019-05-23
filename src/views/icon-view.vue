<template>
  <section>
    <Icon size="16">face</Icon>
    <Icon>face</Icon>
    <Icon color="#5cadff">face</Icon>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Icon from '../packages/Icon';

@Component({
  components: {
    Icon
  }
})
export default class IconView extends Vue {
}
</script>

<style lang="less" scoped>
</style>
