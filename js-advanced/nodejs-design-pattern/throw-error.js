const fs = require('fs')


function readJSON(filename, callback) {

    fs.readFile(filename, 'utf-8', (err, data) => {
        let parsed;
        if(err) {
            return callback(err);
        }

        try {
            parsed = JSON.parse(data);
        }catch(err) {
            return callback(err);
        }

        callback(null, parsed);
    })
}

readJSON('./README.md', (err, data) => {
    if(err) {
        console.log('call err: ',err)
    }

    console.log('data===: ',data);
})