import * as React from 'react'
import * as styles from './index.less'

interface InterfaceRowProps {
  gutter?: number
}

interface InterfaceColProps {
  span?: number,
  style?: object
}

class Col extends React.PureComponent<InterfaceColProps> {

  public static defaultProps: InterfaceColProps = {
    span: 1
  }

  public render () {
    const { span, style } = this.props
    return (
      <div className={`${styles[`col-${span}`]} ${styles.col}`} style={style}>
        {
          this.props.children
        }
      </div>
    )
  }
}

class Row extends React.PureComponent<InterfaceRowProps> {

  public static defaultProps: InterfaceRowProps =  {
    gutter: 0
  }

  public render () {
    const { gutter = 0 } = this.props
    let { children } = this.props
    children = gutter > 0 ? React.Children.map(children, (item: any) => {
      return React.cloneElement(item, {
        style: {
          'paddingLeft': `${gutter/2}px`,
          'paddingRight': `${gutter/2}px`
        }
      })
    }) : children
    return (
      <div className={styles.row}>
        {
          children
        }
      </div>
    )
  }
}

export default {
  Row,
  Col
}