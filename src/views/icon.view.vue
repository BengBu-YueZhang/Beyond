<template>
  <section>
    <Icon size="16">face</Icon>
    <Icon>face</Icon>
    <Icon color="#5cadff">face</Icon>
    <Icon color="#5cadff" custom-class="fas fa-camera"></Icon>
    <Icon custom-class="dlz-icon-font-loading"/>
    <Icon custom-class="dlz-icon-font-dianhua"/>
    <Icon custom-class="dlz-icon-font-weixin"/>
    <Icon custom-class="dlz-icon-font-check-circle"/>
    <Icon custom-class="dlz-icon-font-close-circle"/>
    <Icon custom-class="dlz-icon-font-left-circle"/>
    <Icon custom-class="dlz-icon-font-down-circle"/>
    <Icon custom-class="dlz-icon-font-minus-circle"/>
    <Icon custom-class="dlz-icon-font-plus-circle"/>
    <Icon custom-class="dlz-icon-font-right-circle"/>
    <Icon custom-class="dlz-icon-font-up-circle"/>
    <Icon custom-class="dlz-icon-font-warning-circle"/>
    <Icon custom-class="dlz-icon-font-location"/>
    <Icon custom-class="dlz-icon-font-calendar"/>
    <Icon custom-class="dlz-icon-font-cloud-download"/>
    <Icon custom-class="dlz-icon-font-heart"/>
    <Icon custom-class="dlz-icon-font-shrink"/>
    <Icon custom-class="dlz-icon-font-arrawsalt"/>
    <Icon custom-class="dlz-icon-font-verticalright"/>
    <Icon custom-class="dlz-icon-font-verticalleft"/>
    <Icon custom-class="dlz-icon-font-right"/>
    <Icon custom-class="dlz-icon-font-left"/>
    <Icon custom-class="dlz-icon-font-up"/>
    <Icon custom-class="dlz-icon-font-down"/>
    <Icon custom-class="dlz-icon-font-fullscreen"/>
    <Icon custom-class="dlz-icon-font-fullscreen-exit"/>
    <Icon custom-class="dlz-icon-font-doubleleft"/>
    <Icon custom-class="dlz-icon-font-doubleright"/>
    <Icon custom-class="dlz-icon-font-arrowright"/>
    <Icon custom-class="dlz-icon-font-arrowup"/>
    <Icon custom-class="dlz-icon-font-arrowleft"/>
    <Icon custom-class="dlz-icon-font-arrowdown"/>
    <Icon custom-class="dlz-icon-font-upload"/>
    <Icon custom-class="dlz-icon-font-check-circle-fill"/>
    <Icon custom-class="dlz-icon-font-info-circle-fill"/>
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
