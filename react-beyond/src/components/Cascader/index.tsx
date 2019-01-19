import * as React from 'react'
import Select from '../Select'

interface InterfaceCascaderOption {
  label: string,
  value: string,
  children?: InterfaceCascaderOption[],
  onChange?: (value: string) => void,
}

interface InterfaceCascaderProps {
  value: any[],
  data: InterfaceCascaderOption
}

interface InterfaceCascaderState {
  cascaders: any[]
}

class Cascader extends React.PureComponent<InterfaceCascaderProps, InterfaceCascaderState> {
  public render () {
    return null
  }
}

export default Cascader