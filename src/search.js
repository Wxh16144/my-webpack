
import React from 'react'
import ReactDOM from 'react-dom'

import './search.less'
import my from './images/my.png'

class Search extends React.Component {
  render() {
    return (
      <>
        <img src={my} />
        <div className="search-text"> Search Page </div>
      </>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))