function tacvu1(callback) {
  setTimeout(() => {
    console.log("tac vu 1");
    callback();
  }, 3000);
}

function tacvu2() {
  setTimeout(() => {
    console.log("tac vu 2");
  }, 1000);
}

let kq = 0;
for (i = 0; i < 3000000; i++) {
  kq += i;
}
tacvu1(tacvu2);

console.log(`ket qua la: ${kq}`);
