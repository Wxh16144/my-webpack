
import React from 'react'
import ReactDOM from 'react-dom'

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
    return (
      <>
        <img src={my} />
        <div className="search-text"> Search Page </div>
        {/* <span>{a()}</span> */}
      </>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))