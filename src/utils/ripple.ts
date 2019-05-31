/**
 * 水滴效果
 */

export interface IRipple {
  initRipple: () => void;
  rippleEle: any;
  circleEle: any;
  animateEle: any;
  fadeoutAnimateEle: any;
}

export default class Ripple implements IRipple {
  public x: number;
  public y: number;
  public r: number;
  public color: string;
  public duration: number;

  public rippleEle: any;
  public circleEle: any;
  public fadeoutAnimateEle: any;
  public animateEle: any;

  constructor(x: number, y: number, r: number, color: string, duration: number) {
    this.x = x;
    this.r = r;
    this.y = y;
    this.color = color;
    this.duration = duration;
    this.initRipple();
  }

  public initRipple() {
    // init svg
    this.rippleEle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.rippleEle.setAttribute('class', 'dlz-ripple');

    // init circle
    this.circleEle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.circleEle.setAttribute('cx', this.x);
    this.circleEle.setAttribute('cy', this.y);
    this.circleEle.setAttribute('r', 0);
    this.circleEle.setAttribute('fill', this.color);

    // init animate
    this.animateEle = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    this.animateEle.setAttribute('attributeName', 'r');
    this.animateEle.setAttribute('dur', `${this.duration}ms`);
    this.animateEle.setAttribute('fill', 'freeze');
    this.animateEle.setAttribute('begin', 'indefinite');
    this.animateEle.setAttribute('to', this.r);

    // init fadeoutAnimate
    this.fadeoutAnimateEle = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    this.fadeoutAnimateEle.setAttribute('attributeName', 'opacity');
    this.fadeoutAnimateEle.setAttribute('dur', `${this.duration}ms`);
    this.fadeoutAnimateEle.setAttribute('fill', 'freeze');
    this.fadeoutAnimateEle.setAttribute('begin', 'indefinite');
    this.fadeoutAnimateEle.setAttribute('to', 0);

    // append svg
    this.circleEle.appendChild(this.animateEle);
    this.circleEle.appendChild(this.fadeoutAnimateEle);
    this.rippleEle.appendChild(this.circleEle);
  }
}
