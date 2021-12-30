/**
 * Ref: https://javascript.info/generators
 * Generators là object được trả về từ generator function
 * Generators không thể tạo trực tiếp.
 * Mỗi một generators object gồm 3 methods chính:
 *      next()
 *          Kết quả trả về của next() luôn luôn có 2 keys: value & done
 *          next() sẽ chạy đến yield gần nhất
 *      return()
 *      throw()
 */

//Cú pháp khai báo 1 generator function:
function* generateSequence() {
  yield 1;

  console.log("continue to run");
  yield 2;

  console.log("resume");
  return 3;
}

// "generator function" tạo ra 1 "generator object"
let generator = generateSequence();

const one = generator.next(); //tra ve object
console.log(one); //{ value: 1, done: false }

const two = generator.next(); //tra ve object
console.log(two);
//continue to run
//{ value: 2, done: false }
const three = generator.next(); //tra ve object
console.log(three);
//resume
//{ value: 3, done: true }

/**
 * Function đã thực hiện xong! nếu ta tiếp tục gọi next
 * thì sẽ trả về 1 object duy nhất {done: true}
 */

//Có thể lặp 1 generator bằng for-of
generator = generateSequence();
for (let e of generator) {
  console.log(`flow is: ${e}`);
}

//Một ví dụ về generator trong vòng lặp:
//while(true) ở đây không còn vộ hạn nữa khi
//được "kiểm soát" bởi yield.
function* Fibonacci() {
  let prev = 0;
  let curr = 1;
  while (true) {
    yield curr;

    const next = curr + prev;
    prev = curr;
    curr = next;
  }
}
const fib = Fibonacci();
console.log(fib.next()); //{ value: 1, done: false } | value o day la yield gan nhat: curr
console.log(fib.next()); //{ value: 1, done: false }
console.log(fib.next()); //{ value: 2, done: false }
console.log(fib.next()); //{ value: 3, done: false }

//Còn tiếp...
