/**
 * Factory function không cần dùng từ khoá new Constructor function.
 * Factory function dựa trên closure và HOC (Constructor function thì không)
 */

//Xây dựng 1 Factory function
function User(lastName, firstName, age) {
  let fullName = `${lastName} ${firstName}`;
  let usrAge = age;
  let isAdmin = false;

  function getFullName() {
    return fullName;
  }
  function getInfo() {
    return {
      fullName,
      usrAge,
      isAdmin,
    };
  }
  function setName(lastName, firstName) {
    fullName = `${lastName} ${firstName}`;
  }

  return {
    getFullName,
    getInfo,
    setName,
  };
}

const user1 = User("Lee", "Phan", 20);
//Nội dung của user1 nhận về giá trị mà User trả về (là function thường)
console.log(typeof user1); //object
//lấy các giá trị trong user1 thông qua các methods User cung cấp
console.log(user1.getFullName());
/**
 * Dựa vào khái niệm closure (Mình có viết trong ex 3 HOC)
 * mà các state trong Factory function được private
 * => Ta không thể lấy trực tiếp ra như Constructor function
 * (Vì giá trị của Constructor function là 1 object)
 */
user1.fullName = ""; // Có cái nịt
user1.setName("Triet", "Ly"); //working
console.log(user1.getFullName()); //Triet Ly
