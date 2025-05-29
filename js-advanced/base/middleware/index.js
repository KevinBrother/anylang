
const app = {
    middleWares: [],
    use(fn) {
       this.middleWares.push(fn)
    },
    handle(req, res) {
        let i = 0;

        const next = () => {
            if(i === this.middleWares.length) {
                return;
            }

            fn = this.middleWares[i++];
            fn(req, res, next)
        }

        next()
    }
}

function abc(req, res,next) {
    console.log(1)
    next()
}

function abc2(req, res,next) {
    console.log(2)
    next()
}


app.use(abc);
app.use(abc2);

const req = '';
const res = '';
app.handle(req, res);