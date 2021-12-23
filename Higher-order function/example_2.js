//hàm lồng hàm chỉ dừng khi return
//trừ khi tiếp tục return lại một hàm
function a(x) {
  x++;
  return function b() {
    x++;
    return function c() {
      console.log(++x);
    };
  };
}
a(1)()();
a(1)()();
a(1)()();
//3 kết quả vẫn là 4. Giống như ví dụ 1
//nếu ta lưu hàm con c vào 1 biến
//thì giá trị x cuối cùng của c (return ++x)
//như 1 biến static
console.log("-------------");
const f = a(1); //f bay gio la ham b
f()(); // ket qua la: 4 ( x++ => ++x)
f()(); // ket qua la: 6 ((gia tri 4) x++ (gia tri 5)  => (gia tri 6) ++x )
f()(); // ket qua la: 8 ((gia tri 6) x++ (gia tri 7) => (gia tri 8) ++x)
f()(); // ket qua la: 10 (tuong tu nhu tren)

//Qua 2 vi du chung ta co the tu hoi x++ o ham b x tu dau ra?
//ham b chua khai bao x thi lam sao co the x++ ?
//Viec nay lien quan den khai niem Scope & Closure
//https://javascript.info/closure
//Xem tiep vi du 3 =>
