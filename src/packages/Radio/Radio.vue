<template>
  <label :class="mainClass">
    <span :class="radioClass">
      <span :class="innerClass"></span>
      <input type="radio"/>
    </span>
    <slot>{{ label }}</slot>
  </label>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
const prefixClass = 'dlz-radio';

@Component
export default class Radio extends Vue {
  
}
</script>
