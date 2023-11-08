import { createServer } from 'node:http'

const server = createServer((req, res) => {
  return res.end('hello ')
})

server.listen(3333)