import React, { PureComponent } from 'react'

export default class Text extends PureComponent {
  render() {
    const {
      children,
    } = this.props

    const defaultStyle = {
      display: 'flex',
      flex: 1,
      padding: '0.7em 1em',
      fontSize: '1em',
      justifyContent: 'center'
    }

    const styles = ['color', 'backgroundColor', 'fontSize', 'textAlign']
    styles.forEach(field => {
      if(this.props[field]) {
        if(field == 'fontSize') {
          defaultStyle[field] = this.props[field] + 'em'
        }
        else {
          defaultStyle[field] = this.props[field]
        }

      }
    })

    return (
      <div style={defaultStyle}>{children}</div>
    )
  }
}
