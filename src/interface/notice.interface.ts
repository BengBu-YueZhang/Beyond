import { VNode } from 'vue'

export interface INoticeOptions {
  title?: string;
  content?: string | VNode;
  type?: string;
  icon?: string;
  duration?: number;
  onClose?: () => any;
  onOpen?: () => any;
  showIcon?: boolean;
}
