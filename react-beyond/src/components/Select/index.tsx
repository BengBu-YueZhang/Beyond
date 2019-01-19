import * as React from 'react'
import ReactSelect from 'react-select'

interface InterfaceSelectOptions {
  label: string,
  value: string,
  cities?: InterfaceSelectOptions[]
}

interface InterfaceSelectProps {
  options?: InterfaceSelectOptions[],
  value?: string,
  defaultValue?: string,
  onChange?: () => string
}

interface InterfaceSelectState {
  focus: boolean 
}

class Select extends React.PureComponent<InterfaceSelectProps, InterfaceSelectState> {

  constructor (props: InterfaceSelectProps) {
    super(props)
    this.state = {
      focus: false
    }
  }

  public render () {
    return null
  }
}

export default Select
