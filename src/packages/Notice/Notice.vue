<template>
  <transition @after-enter="handleOpen" name="notice">
    <div v-show="visible" :class="noticeClasses" :style="noticeStyles">
      <span v-if="showClose" :class="noticeIconWrapClasses">
        <Icon size="24" :custom-class="noticeIconClasses"/>
      </span>
      <div :class="noticeContentWrapClasses">
        <span :class="noticeTitleClasses">{{ this.title }}</span>
        <slot>
          <div :class="noticeContentClasses">{{ this.content }}</div>
        </slot>
      </div>
      <span :class="noticeCloseClasses" @click="handleCloseClick">
        <Icon custom-class="dlz-icon-font-close-circle"/>
      </span>
    </div>
  </transition>
</template>

<script lang="ts">
// TODO: 样式需要优化
import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';
import is from '../../utils/is';
import { INotice } from './index';
import Icon from '../Icon';

const prefixClass = 'dlz-notice';

@Component({
  name: 'Notice',
  components: {
    Icon,
  },
})
export default class Notice extends Vue implements INotice {
  public visible: boolean = false;
  public offset: number = 0;
  public id!: string;
  public onClose!: () => any;
  public title!: string;
  public content!: string | VNode;
  public type!: string;
  public icon!: string;
  public duration!: number;
  public onOpen!: () => any;
  public showClose!: boolean;
  public timer: number | null = null;
  public dom!: HTMLElement | null;

  get noticeClasses(): object {
    const noticeClass = {
      [`${prefixClass}`]: true
    };
    return noticeClass;
  }

  get noticeStyles(): object {
    const noticeStyle = {
      top: `${this.offset + 15}px`,
    };
    return noticeStyle;
  }

  get noticeIconClasses(): string {
    let iconClass = ''
    console.log(this.type);
    switch(this.type) {
      case 'success':
        iconClass = 'dlz-icon-font-check-circle';
        break;
      case 'warning':
        iconClass = 'dlz-icon-font-warning-circle';
        break;
      case 'error':
        iconClass = 'dlz-icon-font-close-circle';
        break;
      case 'info':
      default:
        iconClass = 'dlz-icon-font-info-circle-fill';
    }
    return iconClass;
  }

  get noticeIconWrapClasses(): object {
    const noticeIconClass = {
      [`${prefixClass}-icon-wrap`]: true,
      [`${prefixClass}-icon-wrap-${this.type}`]: true,
    };
    return noticeIconClass;
  }

  get noticeContentClasses(): object {
    const noticeContentClass = {
      [`${prefixClass}-content`]: true,
    };
    return noticeContentClass;
  }

  get noticeCloseClasses(): object {
    const noticeCloseClass = {
      [`${prefixClass}-close`]: true,
    };
    return noticeCloseClass;
  }

  get noticeTitleClasses(): object {
    const noticeTitleClass = {
      [`${prefixClass}-title`]: true,
    };
    return noticeTitleClass;
  }

  get noticeContentWrapClasses(): object {
    const noticeContentWrapClass = {
      [`${prefixClass}-content-wrap`]: true,
    };
    return noticeContentWrapClass;
  }

  public close(): void {
    this.visible = false;
    this.$el.addEventListener('transitionend', this.destroy);
    if (is(Function, this.onClose)) {
      this.onClose();
    }
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

  private destroy(): void {
    this.$el.removeEventListener('transitionend', this.destroy);
    this.$destroy();
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    } else {
      document.body.removeChild(this.$el);
    }
  }

  private handleCloseClick(): void {
    this.close();
  }
}
</script>
