import React, { PureComponent } from 'react'

export default class Text extends PureComponent {
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
      <div style={defaultStyle}>{children}</div>
    )
  }
}
