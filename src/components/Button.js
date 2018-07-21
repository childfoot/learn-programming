import React, { PureComponent } from 'react'

export default class Button extends PureComponent {
  render() {
    const {
      color,
      backgroundColor,
      fontSize,
      children
    } = this.props

    const defaultStyle = {
      display: 'flex',
      flex: 1,
    }

    return (
      <button style={defaultStyle}>{children}</button>
    )
  }
}
