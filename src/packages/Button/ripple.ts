import Vue from 'vue';
import Ripple, { IRipple } from './../../utils/ripple';

Vue.directive('ripple', {
  bind(name, value: any, oldvalue) {
    let svg: IRipple;
    let rippleColor: string = 'rgba(0, 0, 0, 0.3)';
    let duration: number = 1000;
    if (typeof value === 'string') {
      rippleColor = value;
    }

    if (typeof value === 'object') {
      duration = value.duration || duration
    }

    const initRipple = (event: any) => {
      const { top, left, width, height } = name.getBoundingClientRect();
      // console.log(top, left, width)
      // console.log(event.clientX - left)
      // console.log(event.clientY - top)
      const cx = event.clientX - left;
      const cy = event.clientY - top;
      const cr = Math.ceil(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));

      svg = new Ripple(cx, cy, cr, rippleColor, duration);
      name.appendChild(svg.rippleEle);
      console.log(svg.animateEle)
      svg.animateEle.beginElement();

      name.addEventListener('mouseup', removeRipple);
      name.addEventListener('mouseout', removeRipple);
    };

    const removeRipple = () => {
      name.removeEventListener('mouseup', removeRipple);
      name.removeEventListener('mouseout', removeRipple);
      svg.fadeoutAnimateEle.beginElement();
      setTimeout(() => {
        name.removeChild(svg.rippleEle);
      }, duration);
    };
    name.addEventListener('mousedown', initRipple);
  }
});
