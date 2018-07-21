#!/usr/bin/env node

const [,, ...args] = process.argv


var fs = require('file-system');
if(!args || args.length == 0) {
  console.error('No name is sepcified.')
  return
}


var dir = args[0]
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}



const { exec } = require('child_process')
exec(`cd ${dir}; yarn init -y; yarn add next react react-dom learn-programming; mkdir pages`, function() {

  const content =
`import { Component } from 'react'
import {
  Button,
  RowBlock,
  ColumnBlock,
  Text
} from 'learn-programming'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: 'Hello'
    }
  }

  render() {
    return (
      <ColumnBlock width='300' height='400'>
        <Text>{this.state.text} ${dir}</Text>
      </ColumnBlock>
    )
  }
}
`

  fs.writeFile(`./${dir}/pages/index.js`, content)


  var jsonfile = require('jsonfile')
  var file = `./${dir}/package.json`
  jsonfile.readFile(file, function(err, obj) {
    if(!obj.scripts) {
      obj.scripts = {
        "dev": "next",
        "build": "next build",
        "start": "next start"
      }
    }

    jsonfile.writeFile(file, obj)
  })
})
