// Ở 2 ví dụ trước, chúng ta  tự hỏi
// x++ ở hàm con ở đâu ra và có khái niệm Closure
// Ở ví dụ này chúng ta xét 1 ví dụ:
function taiKhoan(soTien = 0) {
  let tienCuaToi = soTien;
  return {
    xemSoDu: function () {
      console.log(tienCuaToi);
    },
    rutTien: function (soTienRut) {
      if (soTienRut > tienCuaToi) {
        console.log("Oops! hết tiền rồi");
      } else {
        tienCuaToi -= soTienRut;
      }
    },
    napTien: function (soTienNap) {
      tienCuaToi += soTienNap;
    },
  };
}
const lee = taiKhoan(100);
//buoc nay trong function taiKhoan lam cac viec nhu sau:
//gang tienCuaToi = 100;
//tra ve object gom 3 method, va duoc truy xuat thong qua lee
//vd: lee.xemSoDu(), lee.rutTien(50), lee.napTien(150)

lee.xemSoDu(); //100
lee.rutTien(50);
lee.xemSoDu(); //50
lee.rutTien(100); //message het tien
lee.napTien(200);
lee.xemSoDu(); //250

console.log(lee.tienCuaToi); // undefined
//again
const leephan = new taiKhoan(69);
//làn này chúng ta dùng từ khoá new
leephan.xemSoDu(); //69
console.log(leephan.tienCuaToi); //undefined
//Mình dùng từ khoá new để tạo ra function constructor,
//Nhưng closure đã giúp private biến tienCuaToi la và
//Không thể truy xuất trực tiếp.

//again
//mình sẽ thử định nghĩa lại như này bằng function constructor:
function Account(amount = 0) {
  this.amount = amount;
  this.getAmount = function () {
    console.log(this.amount);
  };
  this.withdraw = function (amountW) {
    if (amountW > this.amount) {
      console.log("Oops! you can't withraw");
    } else {
      this.amount -= amountW;
    }
  };
  this.deposit = function (amountD) {
    this.amount += amountD;
  };
}
// Thử nè:
const leephan2 = new Account(100);
console.log(leephan2.amount); //100, Oops!!!, có thể truy xuất trực tiếp
leephan2.amount = 50; //có thể truy xuất trực tiếp đồng nghĩa với chúng ta có thể làm ntn
console.log(leephan2.amount); //50
leephan2.withdraw(100); // message: Oops! you can't withraw

//Qua các ví dụ trên ta đều thấy chúng ta tương tác
//với biến tienCuaToi bằng các hàm được return ra ngoài
//Hoàn toàn không có cách nào có truy xuất trực tiếp từ biến lee
//việc này khá giống đến tính đóng gói (private) trong class (như Java)
//Khi nó k truy xuất biến tienCuaToi ra ngoài

//Ở ví dụ Account, chúng ta hoàn toàn có quyền truy xuất trực tiếp
//từ biến leephan2 vì nó tham chiếu thông qua keyword "this"
//Việc này closure không thể "gánh" nổi.

//TỔNG KẾT: qua ví dụ về function taiKhoan(), ta có thể hiểu closure
//là việc các function con có thể  truy cập biến trên phạm vi function cha
//ngay cả khi scope bị đóng (tức hàm đã trả về)
// - scope: tạm hiểu là vòng đời của 1 biến, có 3 loại scope (block, local, global)

/*Nếu có gì sai sót mong các bạn góp ý*/
