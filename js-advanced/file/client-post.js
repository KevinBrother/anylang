const axios = require("axios");
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, 'assets',"ico.svg");

axios({
  method: "post",
  url: "http://localhost:13000/uploadFile",
  data: {
    file: fs.readFileSync(file),
  },
  // headers: {
  //   "Content-Type": "multipart/form-data",
  // },
})
  .then((response) => response.data)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
