const Pedding = 'pedding'
const Resolved = 'resolved'
const Rejected = 'rejected'

class MyPromise {
    constructor(executor) {
    
        this.status = Pedding;


        const resolve = (data) => {
            this.status = Resolved
            this.data = data;
            return this;
        }

        const reject = (data) => {
            this.status = Rejected
            this.data = data;
            return this;
        }

        executor(resolve, reject)
    }

    then(onFulfilled, onRejected) {
        onFulfilled = isFunction(onFulfilled)? onFulfilled: (value) => value;
        onRejected = isFunction(onRejected)? onRejected: (value) => {
            throw err;
        };

        return new MyPromise((resolve, reject) => {
            if(this.status === Resolved) {
                onFulfilled(this.data);
            }else if(this.status === Rejected) {
                onRejected
            }
        })
    }

    catch() {

    }

    finally() {

    }
}

function isFunction(fn) {
    return fn instanceof Function;
}


const  abc = new Promise((resolve,reject) => {
    resolve(1)
})


abc.then((data) => {
    console.log(data);
})




