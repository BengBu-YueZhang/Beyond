<template>
  <button class="dlz-button"
          :type="nativeType"
          :disabled="disabled"
          :class="[
            type ? 'dlz-button--' + type : '',
            size ? 'dlz-button--' + size : '',
            {
              'is-disabled': disabled,
              'is-round': round,
            }
          ]">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  private name: string = 'dlz-button';

  /**
   * primary / success / warning / danger / info / text
   */
  @Prop() private type!: string;

  /**
   * big / medium / small / mini
   */
  @Prop() private size!: string;

  @Prop({
    type: String,
    default: 'button',
  }) private nativeType!: string;

  @Prop({
    type: Boolean,
    default: false,
  }) private round!: boolean;

  @Prop({
    type: Boolean,
    default: false,
  }) private disabled!: boolean;
}
</script>
