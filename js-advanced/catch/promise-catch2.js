function promiseError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 10);
  });
}

function main() {
  Promise.resolve()
    .then(() => {
      return promiseError()
        .catch((e) => {
          console.log("inner promise error", e);
        //   throw e;
        })
        .finally(() => {
          console.log("inner promise finally");
        });
    })
    .catch((e) => {
      console.log("outer promise error", e);
    })
    .finally(() => {
      console.log("outer promise finally");
    });
}

main();
