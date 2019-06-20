import Vue from 'vue';
import VueComponentNotice from './Notice.vue';
import { INoticeOptions } from '../../interface';
import { noop, uuid } from '../../utils/utils';
import zIndex from '../../utils/zIndex';

const NoticeConstructor = Vue.extend(VueComponentNotice);

let queue: NoticeConstructor[] = [];
let showQueue: NoticeConstructor[] = [];

const defaultOptions: INoticeOptions = {
  id: uuid(),
  title: '',
  content: '',
  type: 'default',
  icon: '',
  duration: 4000,
  onClose: noop,
  onOpen: noop,
  showClose: true,
  visible: false,
  offset: 0,
  closed: false,
  timer: null,
};

const Notice = function (options: INoticeOptions = defaultOptions): NoticeConstructor {
  options = Object.assign(options, defaultOptions);
  const id = options.id;
  const userOnClose = options.onClose;
  options.onClose = function () {
    Notice.remove(id, userOnClose);
  }
  const notice = new NoticeConstructor({
    data: options,
  });
  queue.push(notice);
  Notice.processQueue();
}

Notice.processQueue = function (): void {
  if (queue.length && showQueue.length < Notice.len) {
    const notice = queue.shift();
    let offset = 0
    document.body.appendChild(notice.$mount().$el);
    notice.dom = notice.$el;
    notice.dom.style.zIndex = zIndex.nextZIndex();
    for (let i = 0; i < showQueue.length; i++) {
      offset = showQueue[i].dom.offsetHeight + 20;
    }
    notice.offset = offset;
    notice.visible = true;
    showQueue.push(notice);
  }
};

Notice.remove = function(id: string, userOnClose: () => any): void {};

Notice.len = 10;

Notice.setLen = function(len: number = 10): void {
  this.len = len;
};

Notice.clear = function(): void {};

export default Notice;
