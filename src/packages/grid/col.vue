<template>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Col extends Vue {
  private name: string = 'col';

  @Prop() private span!: number | string;

  @Prop() private offset!: number | string;

  @Prop() private order!: number | string;

  @Prop({ default: '' }) private 'custom-class'!: string;
}
</script>
