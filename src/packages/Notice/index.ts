import Vue from 'vue';
import VueComponentNotice from './Notice.vue';
import { INoticeOptions } from '../../interface';
import { noop, uuid } from '../../utils/utils';

const NoticeConstructor = Vue.extend(VueComponentNotice);

let queue = [];
let showQueue = [];

const defaultOptions: INoticeOptions = {
  title: '',
  content: '',
  type: 'default',
  icon: '',
  duration: 4000,
  onClose: noop,
  onOpen: noop,
  showIcon: false
}

const Notice = function (options: INoticeOptions = defaultOptions) {
}

Notice.len = 10;

Notice.setLen = function (len: number = 10) {
  this.len = len;
}

Notice.clear = function () {
}

Notice.remove = function (id:string) {
}

export default Notice;
