import React, { PureComponent } from 'react'

export default class RowBlock extends PureComponent {
  render() {
    const defaultStyle = {
      display: 'flex',
      flex: 1,
      flexDirection: 'row'
    }

    const fields = ['width', 'height']
    fields.forEach(field => {
      if(this.props[field]) {
        defaultStyle[field] = `${this.props[field]}px`
      }
    })

    const styles = ['color', 'backgroundColor']
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
      <div style={defaultStyle}>
        {this.props.children}
      </div>
    )
  }
}
