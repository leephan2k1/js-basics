// Ở 3 ví dụ trước mình đã xem xét HOC cùng
// khái niệm closure. Ví dụ này, mình sẽ tiếp
// tục nghĩ ra thêm các trường hợp của HOC.
// Ví dụ này sẽ liên quan đến bất đồng bộ trong JS
// (asynchronous), mình sẽ k đào sâu khái niệm bất
// đồng bộ trong ví dụ này!

function first() {
  setTimeout(() => {
    console.log("print by function first");
  }, 500);
}
function second() {
  console.log("print by function sencond");
}

first();
second();
//ket qua la:
//print by function sencond
//print by function first
//Khi ta dùng setTimeout thì trong JS
//đã xảy ra sự kiện "bất đồng bộ".
//Mặc dù first() được gọi trước second();
//nhưng do cơ chế "event loop" giúp second()
//chạy mà k cần chờ first() được thực thi xong

//Mình có thể dùng HOC - callback để viết
//lại theo cách đồng bộ mà mình mong muốn:
function ham1(callback) {
  setTimeout(() => {
    console.log("print by function ham1 (sync)");
    callback();
  }, 500);
}
function ham2() {
  console.log("print by function ham2 (sync)");
}
//đã được đồng bộ thông qua callback
ham1(ham2);

//Cách viết này có thể phát sinh vấn đề "callback hell"
//Nếu có quá nhiều function cần chờ đợi nhau
//JS có cách giải quyết bằng async - await hoặc promise
//Vấn đề này mình sẽ viết trong các ví dụ khác.
