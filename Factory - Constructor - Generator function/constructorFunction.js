/**
 * Constructor function chỉ là 1 function bình thường.
 * Quy ước đặt tên cho constructor function viết hoa chữ cái đầu.
 * Constructor function không gọi trực tiếp mà dùng keyword "new" để tạo ra object từ function.
 * Constructor function là khuôn mẫu để xây dụng ra các object giống nhau (Như Class trong ES5)
 */

// Ví dụ khai báo 1 Constructor function
// Tạo các state trong Constructor function dùng keyword "this"
function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isAdmin = false;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
// Thực thi Constructor function
const user1 = new User("Lee", "Phan", 20);
// Constructor function trả về object
console.log(typeof user1); // => object
console.log(user1.getFullName()); // => Lee Phan
/**
 * Constructor function trả về object có các không gian riêng
 * trong bộ nhớ (tham chiếu).
 */
const user2 = new User("Triet", "Ly", 21);
console.log(user1 === user2); //false

//Thêm 1 method Constructor function
User.prototype.test = function () {
  return "test";
};
console.log(user1.test()); //test
console.log(user2.test()); //test

/**
 * Các state trong Constructor function không được bao đóng (private)
 * ta hoàn toàn có thể lấy ra các state mà không thông qua method
 */
console.log(user1.firstName); //Lee
console.log(user1.lastName); //Phan
