<template>
  <transition @after-enter="handleOpen" @after-leave="handleClose" name="notice">
    <div v-show="visible">123</div>
  </transition>
</template>

<script lang="ts">
import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';
import is from '../../utils/is';

@Component({
  name: 'Notice',
})
export default class Notice extends Vue {
  public visible: boolean = false;
  public offset: number = 0;
  public id!: string;
  public onClose!: () => any;
  private title!: string;
  private content!: string | VNode;
  private type!: string;
  private icon!: string;
  private duration!: number;
  private onOpen!: () => any;
  private showClose!: () => any;
  private timer: number | null = null;

  public close(): void {
    if (is(Function, this.onClose)) {
      this.onClose();
    }
    this.visible = false;
  }

  private mounted(): void {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        this.close()
      }, this.duration);
    }
  }

  private handleOpen(): void {
    if (is(Function, this.onOpen)) {
      this.onOpen();
    }
  }

  private handleClose(): void {
    this.destroy();
  }

  private destroy(): void {
    this.$destroy();
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    } else {
      document.body.removeChild(this.$el);
    }
  }
}
</script>
