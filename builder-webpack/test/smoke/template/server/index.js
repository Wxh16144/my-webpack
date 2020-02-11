if (typeof window === 'undefined') {
  global.window = {}
}
const path = require('path')
const fs = require('fs')
const express = require('express')
const { renderToString } = require('react-dom/server')
const SSR = require(path.join(__dirname, '../dist/search-server'))
const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8')

const { randomColor, randomNumber } = require('private-test-package')

const mockData = Array.from(Array(randomNumber(10, 50)), (_, id) => {
  return {
    id,
    value: randomNumber(1000, 200000),
    color: randomColor()
  }
})

const server = (port) => {
  const app = express()

  app.use(express.static(path.join(__dirname, '../dist')));

  app.get('/search', (req, res) => {
    res.status(200).send(renderMarkup(renderToString(SSR)))
  })

  app.listen(port, (err) => {
    if (err) return err
    console.log('Server expects success http://127.0.0.1:' + port)
  })

}
server(process.env.PORT || 3000)

const renderMarkup = (body) => template
  .replace('<!-- HTML_PLACEHOLDER -->', body)
  .replace('<!-- INITIAL_DATA_PLACEHOLDER -->', `<script>window.__initial_data = ${
    JSON.stringify(mockData)
    }</script>`)
