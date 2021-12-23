// HOC hay higher order function là cách
// truyền và trả về các function như 1 biến,
// function được xem là 'first class'
// Mình thử xét ví dụ này:

function cha() {
  let x = 0;
  return function con(p) {
    x++;
    return x + p;
  };
}
console.log(cha()); //trả về function con
console.log(cha()(10)); //khoi tao x=0 => x++ => 10+1
console.log(cha()(10)); //khoi tao x=0 => x++ => 10+1

const f = cha(); //f bay gio la function con
console.log(f(10)); //x++ (x=1) => 10+1, dac biet gia tri x bay gio nhu 1 bien static
console.log(f(10)); //x++ (x=2) => x++ => 10+2
//xem tiep vi du 2 =>
