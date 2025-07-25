const http = require('http')

http.createServer((req, rsp) => {
    if(req.url === '/ping') {
        rsp.end('pong')
    }else {
        rsp.end('404')
    }
}).listen(3000, () => {
    console.log('http://localhost:3000')
})