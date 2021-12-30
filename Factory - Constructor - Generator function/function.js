/*
 * Giả sử chúng ta đều đã biết function là gì, nên mình sẽ
 * skip qua 1 số khái niệm cơ bản về function. Ở ví dụ này mình sẽ
 * tập trung vào function trong Javascript.
 *
 * Để khai báo 1 function trong Javascript chúng ta có 4 cách:
 * 1. Dùng keyword "function" truyền thống.
 */
function example() {}
/*
 * 2. Dùng expression function.
 */
const example = function () {};
/*
 * 3. Dùng arrow function (ES6).
 *    3.1 Riêng arrow function có 1 chút đặt biệt như sau:
 *        + Không thể bind tham chiếu "this", không dùng được "super", không dùng được  *           như methods.
 *        + Không phù hợp để dùng các method như call(), apply(), bind().
 *        + Và đặc biệt là không được sử dụng làm Constructor function (nằm trong các ví *          dụ khác).
 */
() => {};
/*
 * 4. Dùng Function constructor
 * Cú pháp của Function constructor như sau:
 * new Function(arg1, ... , argN, functionBody)
 */
const sum = Function("a", "b", "return a + b");

// -----------------------------------------

function pureFunction() {
  // Mọi function thuần đều trả về 1 giá trị.
  // function này không có return về gì đó sẽ trả về giá trị undefined.
  // cau lenh return con dung de "break" logic cho function.
  if (true) return;
}
console.log(pureFunction()); // => undefined

const justLog = function (...arr) {
  arr.forEach((e) => {
    console.log(e);
  });
  /*
   * function có 1 object đặc biệt là arguments
     sỡ hũu các key là index còn value là giá trị truyền vào.
   */
  console.log(arguments);
  /**
   * [Arguments] {
  '0': 1,
  '1': 'string',
  '2': null,
  '3': undefined,
  '4': {},
  '5': [Function (anonymous)],
  '6': 2021-12-30T12:38:46.770Z
    }
   */
};

justLog(1, "string", null, undefined, {}, () => {}, new Date());
