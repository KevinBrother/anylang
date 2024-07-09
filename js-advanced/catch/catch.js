function catchMe() {
  try {
    throw new Error('I am an error');
  } catch (e) {
    console.log("🚀 ~ catchMe ~ e:", e)
    // throw new Error('inner throw I am an error');
  }
}

function main() {
  try {
    console.log(1);
    catchMe();
    console.log(2);
  } catch (e) {
    console.log(3, e);
  } finally {
    console.log(4);
  }
}

main();

// 1
// catchME
// 2
// 4

