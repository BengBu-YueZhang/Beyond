<template>
  <section>
    <Row>
      <Col :span="2">col-2</Col>
      <Col :span="6">col-6</Col>
      <Col :span="12">col-12</Col>
      <Col :span="4">col-4</Col>
    </Row>
    <Row :gutter="50">
      <Col :span="2">col-2</Col>
      <Col :span="6">col-6</Col>
      <Col :span="12">col-12</Col>
      <Col :span="4">col-4</Col>
    </Row>
    <Row type="flex">
      <Col :span="2" order="4">col-2</Col>
      <Col :span="6" order="3">col-6</Col>
      <Col :span="12" order="2">col-12</Col>
      <Col :span="4" order="1">col-4</Col>
    </Row>
    <Row type="flex" justify="end">
      <Col :span="2">col-2</Col>
      <Col :span="2">col-6</Col>
      <Col :span="2">col-12</Col>
      <Col :span="2">col-4</Col>
    </Row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Grid from '../packages/Grid';

const Row = Grid.Row;
const Col = Grid.Col;

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
