<template>
  <section>
    <Icon size="16">face</Icon>
    <Icon>face</Icon>
    <Icon color="#5cadff">face</Icon>
    <Icon color="#5cadff" custom-class="fas fa-camera"></Icon>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Icon from '../packages/Icon';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/solid.css';

@Component({
  components: {
    Icon,
  },
})
export default class IconView extends Vue {
}
</script>

<style lang="less" scoped>
</style>
