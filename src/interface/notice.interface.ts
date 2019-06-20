import { VNode } from 'vue'

export interface INoticeOptions {
  id: string;
  title: string;
  content: string | VNode;
  type: string;
  icon: string;
  duration: number;
  onClose: () => any;
  onOpen: () => any;
  showClose: boolean;
  visible: boolean;
  offset: number;
  closed: boolean;
  timer: number | null;
}
