import Vue from 'vue';
import Ripple, { IRipple } from './../../utils/ripple';

let rippleBind: (el: any, binding: any) => void;

Vue.directive('ripple', {
  bind(el, binding) {
    rippleBind = (ele, bind) => {
      const { value } = bind;
      ele.classList.add('dlz-ripple-button');
      let color: string = 'rgba(0, 0, 0, 0.1)';
      let duration: number = 800;

      if (typeof value === 'string') {
        color = value;
      }

      if (typeof value === 'object') {
        duration = value.duration || duration;
        color = value.color || color;
      }

      const initRipple = (event: any) => {
        const { top, left, width, height } = ele.getBoundingClientRect();

        const cx = event.clientX - left;
        const cy = event.clientY - top;
        const cr = Math.ceil(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));

        const svg: IRipple = new Ripple(cx, cy, cr, color, duration);
        ele.appendChild(svg.rippleEle);

        svg.animateEle.beginElement();

        const removeRipple = () => {
          ele.removeEventListener('mouseup', removeRipple);
          ele.removeEventListener('mouseout', removeRipple);

          svg.fadeoutAnimateEle.beginElement();
          setTimeout(() => {
            ele.removeChild(svg.rippleEle);
          }, duration);
        };

        ele.addEventListener('mouseup', removeRipple);
        ele.addEventListener('mouseout', removeRipple);
      };

      // 初始化
      ele.addEventListener('mousedown', initRipple);
    },
    rippleBind(el, binding);
  },

  // update(el, binding) {
  //   rippleBind(el, binding);
  // },
});
