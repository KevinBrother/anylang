function promiseError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, 10);
    });
}

function adaptor() {
    return promiseError()
       .then(() => {
            console.log('first origin success');
        }).then(() => {
            console.log('second origin success');
            throw new Error('adaptor throw I am an error');
        }).then(() => {
            console.log('third origin success');
        })
       .catch((e) => {
            console.log('origin error', e);
            // throw new Error('adaptor throw I am an error');
            return e
        })
       .finally(() => {
            console.log('origin finally');
        });
}

function main() {
    adaptor()
       .then(() => {
            console.log('adaptor success');
        })
       .catch((e) => {
            console.log('adaptor error', e);
        })
       .finally(() => {
            console.log('adaptor finally');
        });
}


main();

// origin error
// origin finally
// adaptor success
// adaptor finally