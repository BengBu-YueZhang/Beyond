import * as React from 'react'
import * as styles from './index.less'
import { isFunc, isStr } from '../../util'

console.log(styles)

function hasValue (value: string): boolean {
  if (isStr(value)) {
    if (value !== '') {
      return true
    }
    return false
  }
  return false
}

interface InterfaceTextFieldProps {
  placeholder: string,
  label?: string,
  error?: boolean,
  value: string,
  defaultValue: string,
  required?: boolean,
  disabled?: boolean,
  fullWidth?: boolean,
  onChange?: () => void,
  onError?: () => void,
  onFocus?: () => void,
  onBlur?: () => void
}

interface InterfaceTextFieldState {
  focus: boolean,
  blur: boolean,
  hasValue: boolean
}

class TextField extends React.PureComponent<InterfaceTextFieldProps, InterfaceTextFieldState> {

  public static defaultProps: InterfaceTextFieldProps = {
    placeholder: '',
    label: '',
    error: false,
    value: '',
    defaultValue: '',
    required: false,
    disabled: false,
    fullWidth: false,
    onChange: () => {},
    onError: () => {},
    onFocus: () => {},
    onBlur: () => {}
  }

  constructor (props: InterfaceTextFieldProps) {
    super(props)
    this.state = {
      hasValue: hasValue(this.props.value || this.props.defaultValue),
      focus: false,
      blur: true
    }
  }

  public handleBlur = (): void => {
    this.setState({
      focus: false,
      blur: true
    })
    const { onBlur = () => {} } = this.props
    isFunc(onBlur) && onBlur()
  }

  public handleChange = (): void => {
    const { onChange = () => {} } = this.props
    isFunc(onChange) && onChange()
  }

  public handleFocus = (): void => {
    this.setState({
      focus: true,
      blur: false
    })
    const { onFocus = () => {} } = this.props
    isFunc(onFocus) && onFocus()
  }

  public handleError = (): void => {
    const { onError = () => {} } = this.props
    isFunc(onError) && onError()
  }

  public render () {
    const { placeholder, label = '' } = this.props
    const { focus } = this.state
    return (
      <div
        className={
          `${styles['text-field__wrapper']} ${hasValue(label) ? styles['text-field-label__wrapper'] : ''}`
        }>
        <div
          className={
            `${focus ? styles['text-field__content-focus']: ''} ${styles['text-field__content']}`
          }
        >
          {
            hasValue(label) && <label className={styles['text-field__label']}>{ label }</label>
          }
          <input
            className={styles['text-field']}
            placeholder={placeholder}
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
