<template>
  <section>
    <Row :gutter="10">
      <Col :span="2">col-2</Col>
      <Col :span="6">col-6</Col>
      <Col :span="12">col-12</Col>
      <Col :span="4">col-4</Col>
    </Row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Grid from '../packages/grid';

const Row = Grid.row;
const Col = Grid.col;

@Component({
  components: {
    Row,
    Col,
  },
})
export default class IconView extends Vue {
}
</script>

<style lang="less" scoped>
</style>
