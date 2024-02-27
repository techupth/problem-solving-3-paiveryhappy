// Exercise 1: Length of Last Word

const lengthOfLastWord = function (words) {
  words = words.trim();
  console.log(words);
  let lastSpace = words.lastIndexOf(" ");
  console.log(lastSpace);
  let length = words.length - lastSpace - 1;

  console.log(length);
  return length;
};

const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // 5
console.log(result2); // 4
console.log(result3); // 6
