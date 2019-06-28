<template>
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
}
</script>

<style lang="less" scoped>
</style>
