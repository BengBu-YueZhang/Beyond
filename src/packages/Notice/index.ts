import Vue, { VNode } from 'vue';
import Notice from './Notice.vue';
import { noop, uuid } from '../../utils/utils';
import zIndex from '../../utils/zIndex';
import is from '../../utils/is';

const NoticeConstructor = Vue.extend(Notice);

export interface INoticeOptions {
  title?: string;
  content?: string | VNode;
  type?: string;
  icon?: string;
  duration?: number;
  onClose?: () => any;
  onOpen?: () => any;
  showClose?: boolean;
}

export interface INotice extends Vue {
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
  timer: number | null;
  dom: HTMLElement | null;
  close: () => any;
}

const defaultOptions = {
  id: '',
  title: '',
  content: '',
  type: 'default',
  icon: '',
  duration: 0,
  onClose: noop,
  onOpen: noop,
  showClose: true,
  visible: false,
  offset: 0,
  timer: null,
  dom: null,
};

const queue: INotice[] = [];
const showQueue: INotice[] = [];

const $Notice = (options: INoticeOptions): INotice => {
  options = Object.assign({}, defaultOptions, options);
  const id = uuid();
  const userOnClose = options.onClose;
  options.onClose = () => {
    $Notice.remove(id, userOnClose);
  };
  const notice = new NoticeConstructor({
    data: {
      ...options,
      id,
    },
  });
  queue.push(notice as INotice);
  $Notice.processQueue();
  return notice as INotice;
};

$Notice.processQueue = (): void => {
  if (queue.length && showQueue.length < $Notice.len) {
    const notice = queue.shift() as INotice;
    let offset = 0;
    document.body.appendChild(notice.$mount().$el);
    notice.dom = notice.$el as HTMLElement;
    notice.dom.style.zIndex = zIndex.nextZIndex();
    showQueue.forEach((not) => {
      const dom = not.dom as HTMLElement;
      offset += dom.offsetHeight + 15;
    });
    notice.offset = offset;
    notice.visible = true;
    showQueue.push(notice);
  }
};

$Notice.remove = (id: string, userOnClose: () => any | null): void => {
  let index: number = -1;
  let notice!: INotice;
  showQueue.forEach((not, i) => {
    if (not.id && not.id === id) {
      index = i;
      notice = not;
    }
  })
  if (notice) {
    if (is(Function, userOnClose)) {
      userOnClose();
    }
    showQueue.splice(index, 1);
    if (showQueue.length) {
      const removeNoticeHeigth = (notice.dom as HTMLElement).offsetHeight;
      showQueue.forEach((not) => {
        (not.dom as HTMLElement).style.top = `
          ${parseInt((not.dom as HTMLElement).style.top as string, 10) - removeNoticeHeigth - 15}px
        `;
      });
    }
    $Notice.processQueue();
  }
};

$Notice.clear = (): void => {
  showQueue.forEach((not) => {
    not.close();
  });
};

$Notice.len = 8;

$Notice.setLen = function(len: number = 8): void {
  this.len = len;
};

export default $Notice;
