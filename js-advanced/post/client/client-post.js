const axios = require("axios");
const fs = require("fs");
const path = require("path");
const {Blob, File} = require('node:buffer')

const file = path.join(__dirname, 'assets',"a.txt");

/* const data = {
  file: fs.readFileSync(file)
}
 */

/* const data = {
  file: fs.createReadStream(file),
}; */

const data = {
  file: new Blob(fs.readFileSync(file), { type: "application/octet-stream" }),
}

axios({
  method: "post",
  url: "http://localhost:13000/uploadFile",
  data,
  headers: {
    "Content-Type": "multipart/form-data",
  },
})
  .then((response) => response.data)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
