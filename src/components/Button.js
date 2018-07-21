import React, { PureComponent } from 'react'

export default class Button extends PureComponent {

  onClick = () => {
    const value = this.props.value ? this.props.value : this.props.children
    console.log('onClick', value)
    this.props.onClick(value)
  }

  render() {
    const {
      color,
      backgroundColor,
      fontSize,
      children,
    } = this.props

    const defaultStyle = {
      display: 'flex',
      flex: 1,
      padding: '0.7em 1em',
      fontSize: '18px',
      justifyContent: 'center'
    }

    return (
      <button onClick={this.onClick} style={defaultStyle}>{children}</button>
    )
  }
}
