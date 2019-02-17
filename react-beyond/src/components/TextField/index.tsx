import * as React from 'react'
// import * as styles from './index.less'

interface InterfaceTextFieldProps {
  label?: string,
  error?: boolean,
  value: string,
  required?: boolean,
  disabled?: boolean,
  fullWidth?: boolean,
  onChange?: (value: any) => void,
  onError?: (value: any) => void,
  onFocus?: () => void,
  onBlur?: () => void
}

class TextField extends React.PureComponent<InterfaceTextFieldProps> {

  public static defaultProps: InterfaceTextFieldProps = {
    label: '',
    error: false,
    value: '',
    required: false,
    disabled: false,
    fullWidth: false,
    onChange: () => {},
    onError: () => {},
    onFocus: () => {},
    onBlur: () => {}
  }

  public handleBlur (): void {
  }

  public handleChange (): void {
  }

  public handleFocus (): void {
  }

  public handleError (): void {
  }

  public render () {
    const { label } = this.props
    return (
      <div>
        <div>
          <label>{ label }</label>
          <input
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onError={this.handleError}
          />
        </div>
      </div>
    )
  }
}

export default TextField
