import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { randomColor, randomNumber } from 'private-test-package'

import { add } from '../../common'
import { a } from './tree-shaking'

import './search.less'
import my from './images/my.png'

// debugger

class Search extends React.Component {
  render() {
    // a = 1
    if (false) {
      a()
    }
    const style = {
      color: randomColor(),
      fontSize: randomNumber(14, 24) + 'px'
    }
    return (
      <>
        <p style={style}>{randomNumber(1000000000, 99999999999)}</p>
        <img src={my} />
        <div className="search-text"> Search Page </div>
        {/* <span>{a()}</span> */}
      </>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))