// Exercise 2: Single Number

const singleNumber = function (nums) {
  let newCount = {};

  for (let i of nums) {
    newCount[i] = (newCount[i] || 0) + 1; //กำหนดค่าเริ่มต้นให้เป็น 0 ก่อน ด้วยการใช้ || 0 แล้วเพิ่มจำนวนครั้งของตัวเลขนั้นด้วย 1
    console.log(newCount[i]);
    console.log(newCount);
  }

  for (let i in newCount) {
    if (newCount[i] == 1) {
      return parseInt(i); // ใช้ parseInt เพื่อแปลงเป็นจำนวนเต็ม
    }
  }
};

const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 1
