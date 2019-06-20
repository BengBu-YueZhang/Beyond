<template>
  <section>
    <Button @click="handleClick">test</Button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Button from '../packages/Button';
import Notice from '../packages/Notice';

@Component({
  components: {
    Button,
  },
})
export default class NoticeView extends Vue {
  private handleClick(): void {
    Notice();
  }
}
</script>

<style lang="less" scoped>
</style>
