if (typeof window === 'undefined') {
  global.window = {}
}
const path = require('path')
const express = require('express')
const { renderToString } = require('react-dom/server')
const SSR = require(path.join(__dirname, '../dist/search-server'))

const server = (port) => {
  const app = express()

  app.use(express.static(path.join(__dirname, '../dist')));

  app.get('/search', (req, res) => {
    res.status(200).send(template(renderToString(SSR)))
  })

  app.listen(port, (err) => {
    if (err) return err
    console.log('Server expects success http://127.0.0.1:' + port)
  })

}
server(process.env.PORT || 3000)

const template = (body) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Search Page SSR</title>
</head>
<body>
  <div id="root">
    ${body}
  </div>
</body>
</html>
`