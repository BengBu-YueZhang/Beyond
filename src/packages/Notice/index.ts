import Vue, { VNode } from 'vue';
import Notice from './Notice.vue';
import { noop, uuid } from '../../utils/utils';
import zIndex from '../../utils/zIndex';
import is from '../../utils/is';

const NoticeConstructor = Vue.extend(Notice);

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
}

const defaultOptions = {
  id: uuid(),
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

let queue: INotice[] = [];
let showQueue: INotice[] = [];

const $Notice = function (options = defaultOptions): INotice {
  options = Object.assign({}, options, defaultOptions);
  const id = options.id;
  const userOnClose = options.onClose;
  options.onClose = function() {
    $Notice.remove(id, userOnClose);
  };
  const notice = new NoticeConstructor({
    data: options
  });
  console.log(notice.visible)
  queue.push(notice);
  $Notice.processQueue();
  return notice;
};

$Notice.processQueue = function (): void {
  if (queue.length && showQueue.length < $Notice.len) {
    const notice = queue.shift() as INotice;
    let offset = 0;
    document.body.appendChild(notice.$mount().$el);
    notice.dom = notice.$el as HTMLElement;
    notice.dom.style.zIndex = zIndex.nextZIndex();
    for (let i = 0; i < showQueue.length; i++) {
      if (showQueue[i].dom) {
        let dom = showQueue[i].dom as HTMLElement;
        offset += dom.offsetHeight + 20;
      }
    }
    notice.offset = offset;
    notice.visible = true;
    showQueue.push(notice);
  }
};

$Notice.remove = function(id: string, userOnClose: () => any): void {
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
    // for (let i = 0; i < showQueue.length; i++) {
    // }
    Notice.processQueue();
  }
};

$Notice.clear = function(): void {
  for (let i = 0; i < showQueue.length; i++) {
    showQueue[i].close();
  }
};

$Notice.len = 3;

$Notice.setLen = function(len: number = 10): void {
  this.len = len;
};

export default $Notice;
