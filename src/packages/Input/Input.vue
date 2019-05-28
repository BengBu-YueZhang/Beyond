<template>
  <div>
    <input ref="reference"/>
    <transition name="dropdown">
      <div v-show="visible" ref="popper"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Pop from '../../lib/popper';

@Component({
  name: 'Input',
})
export default class Input extends Vue {
  private popper!: Pop;

  private visible!: Boolean;

  private mounted(): void {
    this.$nextTick(() => {
      this.popper = new Pop(
        this.$refs.reference as Element,
        this.$refs.popper as Element,
      );
    });
  }
}
</script>
