const Module = (function () {
  let private = `Đây là private property được public ra bằng object`;

  const privateFunction = () => {
    console.log(`Đây là private function được public ra bằng object`);
  };

  return {
    publicData: private,
    publicFunction: privateFunction,
  };
})();

console.log(Module.publicData); //Đây là private property được public ra bằng object
console.log(Module.private); //undefined

Module.publicFunction(); //Đây là private function được public ra bằng object

//Module.privateFunction(); => TypeError: Module.privateFunction is not a function
