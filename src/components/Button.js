import React, { PureComponent } from 'react'

export default class Button extends PureComponent {

  onClick = () => {
    const value = this.props.value ? this.props.value : this.props.children
    console.log('onClick', value)
    this.props.onClick(value)
  }

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


    const styles = ['color', 'backgroundColor', 'fontSize']
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
      <button onClick={this.onClick} style={defaultStyle}>{children}</button>
    )
  }
}
