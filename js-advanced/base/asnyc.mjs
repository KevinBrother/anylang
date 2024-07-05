async function a() {
  console.log(1);
  c();
}

async function b() {
  console.log(2);
}

async function c() {
  console.log(3);
}

a();
b();
// c();
