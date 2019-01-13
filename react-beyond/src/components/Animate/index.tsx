import * as React from 'react';

interface InterfaceAnimateProps {
  speed?: number,
  animate?: boolean,
  from?: object,
  to?: object
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
    this.handleAnimateChange()
  }

  public componentDidUpdate (prevProps: InterfaceAnimateProps): void {
    if (prevProps.animate !== this.props.animate) {
      this.handleAnimateChange()
    }
  }

  public handleAnimateChange = (): void => {
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


export default {
  Animate
}
