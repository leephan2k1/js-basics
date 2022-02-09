# Đồng bộ & Bất đồng bộ trong Javascript.
## Javascript là ngôn ngữ single-thread
* Trước hết, cần phải khẳng định ngôn ngữ Javascript là một ngôn ngữ đơn luồng (single-thread). Tức tại 1 thời điểm chỉ có 1 luồng duy nhất chạy. (Điều này có thể tham khảo ngôn ngữ Java support multi-threading để hiểu rõ hơn về luồng). Vấn đề đặt ra cho JS là làm sao có thể chạy mà không bị non-blocking khi gặp các tác vụ nặng trên 1 luồng duy nhất? Vì thế, ngay trong chính JS vừa hỗ trợ chạy đồng bộ (synchronous) và bất đồng bộ (asynchronous).
## Xử lý bất đồng bộ
### Callback
* Dựa vào khái niệm HOC, Callback được dùng để xử lý các tác vụ bất đồng bộ.
* Ví dụ ta có 3 tác vụ sau đây:
```
function tacvu1() {
  setTimeout(() => {
    console.log("tac vu 1");
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
tacvu1();
tacvu2();
console.log(`ket qua la: ${kq}`);

```
* Theo như ta quan sát kết quả sẽ là:
```
ket qua la: 4499998500000
tac vu 2
tac vu 1
```
* Ban đầu, JS sẽ thực hiện việc đọc đồng bộ lời gọi hàm tacvu1() sau đó tacvu2() tiếp theo đến console.log(). Do API setTimeout của 2 hàm này là tác vụ bất đồng bộ nên sẽ được web api đưa vào hàng đợi (Queue). Tác vụ nhẹ console.log thực hiện xong tiếp theo đến các tác vụ còn trong queue được đưa vào stack xử lý tiếp(**Event loop** sẽ được nói sau).
* Giả sử nếu tacvu2 cần dữ liệu của tacvu1. Khi đó việc chạy bất đồng bộ như trên sẽ khiến tacvu2 không nhận được dữ liệu để xử lý vì chạy trước tacvu1. Khi này **callback** sẽ được dùng đến để xử lý bất đồng bộ.
* Ta re-factor code lại như sau: 
```
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
```
* Lúc này kết quả là:
```
ket qua la: 4499998500000
tac vu 1
tac vu 2
```
* Vậy là đã hoạt động như ý muốn của chúng ta, tacvu2 được chạy sau tacvu1.