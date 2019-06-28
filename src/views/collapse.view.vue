<template>
  <div>
    <Collapse :value="actives">
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
  private actives: string[] = [];
}
</script>

<style lang="less" scoped>
</style>
