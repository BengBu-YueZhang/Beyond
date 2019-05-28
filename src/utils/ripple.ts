export interface IRipple {
  initRipple: () => void;
  rippleEle: any;
  circleEle: any;
  animateEle: any;
  fadeoutAnimateEle: any;
}

export default class Ripple {
  private x: number;
  private y: number;
  private r: number;
  private color: string;
  private duration: number;

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
    const ripple: any = document.createElementNS('xmlns', 'svg');
    ripple.setAttribute('class', 'dlz-ripple');

    // init circle
    const circle: any = document.createElementNS('xmlns', 'circle');
    circle.setAttribute('cx', this.x);
    circle.setAttribute('cy', this.y);
    circle.setAttribute('cr', this.r);
    circle.setAttribute('fill', this.color);

    // init animate
    console.log(this.duration)
    console.log(this.y)
    const animate: any = document.createElementNS('xmlns', 'animate');
    animate.setAttribute('attributeName', 'r');
    animate.setAttribute('dur', `${this.duration}ms`);
    animate.setAttribute('fill', 'freeze');
    animate.setAttribute('begin', 'indefinite');
    animate.setAttribute('to', this.r);

    // init fadeoutAnimate
    const fadeoutAnimate: any = document.createElementNS('xmlns', 'animate');
    fadeoutAnimate.setAttribute('attributeName', 'opacity');
    fadeoutAnimate.setAttribute('dur', `${this.duration}ms`);
    fadeoutAnimate.setAttribute('fill', 'freeze');
    fadeoutAnimate.setAttribute('begin', 'indefinite');
    fadeoutAnimate.setAttribute('to', 0);

    // append svg
    circle.appendChild(animate);
    circle.appendChild(fadeoutAnimate);
    ripple.appendChild(circle);

    this.rippleEle = ripple;
    this.circleEle = circle;
    this.animateEle = animate;
    this.fadeoutAnimateEle = fadeoutAnimate;
  }
}
