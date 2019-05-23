<template>
  <div id="app">
    <div class="content">
      <h1>Icon 图标</h1>
      <div>
        <Icon>add_circle</Icon>
        <Icon color="red">add_circle</Icon>
        <Icon size="30">add_circle</Icon>
      </div>
      <div></div>
      <div>
        <Icon>assignment</Icon>
        <Icon color="green">assignment</Icon>
        <Icon size="15">assignment</Icon>
      </div>
      <div></div>
    </div>
    <div class="content">
      <h1>Message 消息提示</h1>
    </div>
  </div>
</template>

<script>
import Icon from './packages/Icon';

export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less">
</style>
