<template>
  <div class="collapse-view-wrapper">
    <Collapse :value="actives1">
      <CollapseItem name="1" title="明日香">
        <span>老婆</span>
      </CollapseItem>
      <CollapseItem name="2" title="绫波丽">
        <span>老妈</span>
      </CollapseItem>
      <CollapseItem name="3" title="碇真嗣">
        <span>废物</span>
      </CollapseItem>
    </Collapse>
    <br/>
    <br/>
    <Collapse :value="actives2" :accordion="true">
      <CollapseItem name="1" title="明日香">
        <span>老婆</span>
      </CollapseItem>
      <CollapseItem name="2" title="绫波丽">
        <span>老妈</span>
      </CollapseItem>
      <CollapseItem name="3" title="碇真嗣">
        <span>废物</span>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Collapse from '../packages/Collapse';

@Component({
  components: {
    Collapse: Collapse.Collapse,
    CollapseItem: Collapse.CollapseItem,
  },
})
export default class CollapseView extends Vue {
  private actives1: string[] = [];
  private actives2: string[] = [];
}
</script>

<style lang="less" scoped>
.collapse-view-wrapper {
  padding: 40px;
}
</style>
