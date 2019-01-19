import * as React from 'react'
import Select from '../Select'
import { InterfaceSelectOptions } from '../Select'

interface InterfaceCascaderProps {
  value?: string[],
  options?: InterfaceSelectOptions[],
  onChange?: (value: any[]) => void
}

interface InterfaceCascaderState {
  cascaderOptions: InterfaceSelectOptions[][],
  cascaderValue: string[]
}

class Cascader extends React.PureComponent<InterfaceCascaderProps, InterfaceCascaderState> {

  public static defaultProps: InterfaceCascaderProps = {
    value: [],
    options: []
  }

  constructor (props: InterfaceCascaderProps) {
    super(props)
    this.state = {
      cascaderOptions: [],
      cascaderValue: []
    }
  }

  public componentDidMount () {
    const { options } = this.props
    if (options) {
      this.setState({
        cascaderOptions: [options]
      })
    } 
  }

  /**
   * 当选择器发生变化
   * @param {Number} level 当前选择器的层级, 数据的层级
   * @param {String} select 当前选择器选择的内容
   */
  public handleCascaderChange = (level: number, select: string): void => {
    let { cascaderOptions, cascaderValue } = this.state
    const { onChange } = this.props
    cascaderOptions = cascaderOptions.filter((co: InterfaceSelectOptions[], index: number) => index <= level)
    cascaderValue = cascaderValue.filter((v: string, index: number) => index <= level)
    cascaderValue.push(select)
    if (cascaderOptions[cascaderOptions.length - 1]) {
      cascaderOptions[cascaderOptions.length - 1].forEach((co: InterfaceSelectOptions) => {
        if (co.value === select && co.children) {
          cascaderOptions.push(co.children)
        }
      })
    }
    this.setState({
      cascaderOptions,
      cascaderValue
    })
    if (onChange) {
      onChange(cascaderValue)
    }
  }

  public render () {
    const { cascaderOptions, cascaderValue } = this.state
    return cascaderOptions.map((co: InterfaceSelectOptions[], index: number) => {
      return (
        <Select
          value={cascaderValue[index]}
          options={co}
          key={index}
          onChange={
            (value: string) => {
              this.handleCascaderChange(index, value)
            }
          }
        />
      )
    })
  }
}

export default Cascader