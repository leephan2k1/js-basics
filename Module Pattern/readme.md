# Module Pattern

## Concepts

- Module Pattern dựa trên **closure** và **HOC** (Higher order function), **IIFE** (Immediately Invoked Function Expression).

* Dùng để xây dựng 1 **Object**, **giấu data** không cho truy xuất từ bên ngoài. -> Tạo 1 object duy nhất (Cơ sở cho Signleton Pattern).
* Có thể phát triển thành Revealing Module Pattern.
* Đóng gói (Encapsulation)

## Support concepts: IIFE

### So sánh Function và IIFE

- Pure function

```
// Khai bao
function doSomeThing(arg){
    console.log('hi', arg);
}
// Thuc thi
doSomeThing('lee');
```

- IIFE

```
//Khai bao + thuc thi ngay
(function doSomeThingIIFE(arg){
    console.log('hi', arg)
})('lee');
```

## Các bước tạo ra 1 Module Pattern:

1. Tạo ra 1 IIFE
2. Gán vào Object, hàm IIFE sẽ return lại một object cho phép public hoặc private data.
3. Truy xuất.

## Triển khai

```
const Module = (function(){
    let private = 'Đây là private property'

    function privateFunction(){
        console.log('Đây là private function')
    }

    return {
        publicData: private,
        publicFunction: privateFunction,
    }
})()
```

## Sử dụng

```
console.log(Module.publicData) //Đây là private function

Module.publicFunction() //Đây là private function
```
