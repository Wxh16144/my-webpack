
import React from 'react'
import ReactDOM from 'react-dom'

import { add } from '../../common'

import './search.less'
import my from './images/my.png'

// debugger

class Search extends React.Component {
  render() {
    // a = 1
    return (
      <>
        <img src={my} />
        <div className="search-text"> Search Page </div>
      </>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))