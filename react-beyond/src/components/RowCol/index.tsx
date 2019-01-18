import * as React from 'react'
import * as styles from './index.less'

interface InterfaceRowProps {
  gutter?: number
}

interface InterfaceColProps {
  span?: number
}

class Col extends React.PureComponent<InterfaceColProps> {

  public static defaultProps: InterfaceColProps = {
    span: 1
  }

  public render () {
    return <div/>
  }
}

class Row extends React.PureComponent<InterfaceRowProps> {
  public render () {
    console.log('row', styles)
    return (
      <div className={styles.row}>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default {
  Row,
  Col
}