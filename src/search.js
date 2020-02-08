
import React from 'react'
import ReactDOM from 'react-dom'

import './search.css'

class Search extends React.Component {
  render() {
    return <div className="search-text"> Search Page </div>
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))