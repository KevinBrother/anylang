
const http = require('http');

const app = {
    middleWares: [],
    use(fn) {
        this.middleWares.push(fn)
    },
    handle(req, res) {
        let i = 0;

        const next = () => {
            if (i === this.middleWares.length) {
                return;
            }

            fn = this.middleWares[i++];
            fn(req, res, next)
        }

        next()
    },

    listen(port, fn) {
        http.createServer((req, rep) => {
            this.handle(req, rep)
        }).listen(port, fn)
    }
}

function abc(req, res, next) {
    console.log(1)
    next()
}

function abc2(req, res, next) {
    console.log(2)
    next()
}


app.use(abc);
app.use(abc2);

// app.handle(req, res);

app.listen(3000, () => {
    console.log("server in on http://localhost:3000")
})