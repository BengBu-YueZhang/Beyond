import * as React from 'react'
import ReactSelect from 'react-select'

const customStyles = {
  indicatorSeparator: () => {
    return {
      backgroundColor: '#fff'
    }
  }
}

interface InterfaceSelectOptions {
  label: string,
  value: string,
  children?: InterfaceSelectOptions[]
}

interface InterfaceSelectProps {
  isClearable?: boolean,
  isSearchable?: boolean,
  isDisabled?: boolean,
  isLoading?: boolean,
  options: InterfaceSelectOptions[],
  value?: string,
  defaultValue?: string,
  onChange?: (value: string) => void,
  placeholder: string
}

interface InterfaceSelectState {
  focus: boolean 
}

class Select extends React.PureComponent<InterfaceSelectProps, InterfaceSelectState> {

  public static defaultProps: InterfaceSelectProps = {
    isClearable: false,
    isSearchable: false,
    isDisabled: false,
    isLoading: false,
    options: [],
    value: '',
    defaultValue: '',
    placeholder: ''
  }

  constructor (props: InterfaceSelectProps) {
    super(props)
    this.state = {
      focus: false
    }
  }

  public handleSelectChange = (value: InterfaceSelectOptions): void => {
    if (this.props.onChange) {
      this.props.onChange(value.value)
    }
  }

  public render () {

    const {
      isClearable,
      isSearchable,
      isDisabled,
      isLoading,
      options ,
      defaultValue,
      value,
      placeholder
    } = this.props

    let option = null

    options.forEach(opt => {
      if (opt.value === value || opt.value === defaultValue) {
        option = opt
      }
    })

    return (
      <React.Fragment>
        <ReactSelect
          styles={customStyles}
          isClearable={isClearable}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          isLoading={isLoading}
          options={options}
          placeholder={placeholder}
          defaultValue={option}
          value={option}
          onChange={this.handleSelectChange}
        />
      </React.Fragment>
    )
  }
}

export default Select
