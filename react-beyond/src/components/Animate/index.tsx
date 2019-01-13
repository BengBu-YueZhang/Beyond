import * as React from 'react';

interface InterfaceAnimateProps {
  speed?: number,
  animate?: boolean,
  from?: object,
  to?: object,
  children?: any
}

interface InterfaceAnimateState {
  animate?: boolean,
  prevProps?: InterfaceAnimateProps
}

class Animate extends React.Component<InterfaceAnimateProps, InterfaceAnimateState> {

  public static defaultProps: InterfaceAnimateProps = {
    speed: 600,
    animate: true,
    from: {},
    to: {}
  }

  constructor (props: InterfaceAnimateProps) {
    super(props)
    this.state = {
      animate: false,
    }
  }

  public componentDidMount (): void {
    this.handleAnimate()
  }

  public componentDidUpdate (prevProps: InterfaceAnimateProps): void {
    if (prevProps.animate !== this.props.animate) {
      this.handleAnimate()
    }
  }

  public handleAnimate = (): void => {
    const { animate } = this.props
    setTimeout(() => this.setState({ animate }))
  }

  public render () {
    const { children, speed, from, to } = this.props
    const { animate } = this.state
    const addStyles = animate ? to : from
    return React.Children.map(children, (item: any) => {
      return React.cloneElement(item, {
        style: {
          ...{
            opacity: animate ? 1 : 0,
            transform: `translateY(${animate ? 0 : 40}px)`,
            transition: `all ${speed}ms`
          },
          ...addStyles
        }
      })
    })
  }
}

interface InterfaceAnimateGroupState {
  current: number,
  timer: number | undefined
}

interface InterfaceAnimateGroupProps {
  interval?: number,
  children?: any,
  onAnimateEnd?: () => any
}

class AnimateGroup extends React.Component<InterfaceAnimateGroupProps & InterfaceAnimateProps, InterfaceAnimateGroupState> {

  public static defaultProps: InterfaceAnimateGroupProps & InterfaceAnimateProps = {
    interval: 200,
    animate: true
  }

  public constructor (props: InterfaceAnimateGroupProps & InterfaceAnimateProps) {
    super(props)
    this.state = {
      current: 0, // 当前动画对象的指针
      timer: undefined
    }
  }

  public componentDidMount (): void {
    setTimeout(() => this.handleAnimate())
  }

  public componentDidUpdate (prevProps: InterfaceAnimateGroupProps & InterfaceAnimateProps): void {
    if (prevProps.animate !== this.props.animate) {
      this.handleAnimate()
    }
    if (prevProps.children.length !== this.props.children.length) {
      this.handleAnimate()
    }
  }
  
  public handleAnimate = (): void => {
    const { interval, children, animate } = this.props
    const { timer } = this.state
    const MAX_LEN = children ? children.length : 0
    let { current } = this.state
    clearTimeout(timer)
    const loop = (): void => {
      // 指针依次向前移动
      if (!animate && current <= 0) {
        this.setState({ current: 0 })
      } else if (animate && current >= MAX_LEN) {
        this.setState({ current: MAX_LEN })
      } else {
        current = current + (animate ? 1 : -1)
        this.setState({
          current,
          timer: setTimeout(loop, interval)
        })
      }
    }
    loop()
  }

  public componentWillUnmount (): void {
    clearTimeout(this.state.timer)
  }

  public render () {
    const { children, animate, ...rest } = this.props
    const { current } = this.state
    return React.Children.map(children, (item: any, index: number) => {
      return (
        <Animate
          animate={current > index}
          {...rest}
        >
          {
            item
          }
        </Animate>
      )
    })
  }
}

class AnimateGroups extends React.Component {
}

export default {
  Animate,
  AnimateGroup,
  AnimateGroups
}
