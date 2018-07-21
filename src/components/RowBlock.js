import React, { PureComponent } from 'react'

export default class RowBlock extends PureComponent {
  render() {
    const style = {
      display: 'flex',
      flex: 1,
      flexDirection: 'row'
    }

    const fields = ['width', 'height']
    fields.forEach(field => {
      if(this.props[field]) {
        style[field] = `${this.props[field]}px`
      }
    })

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}
