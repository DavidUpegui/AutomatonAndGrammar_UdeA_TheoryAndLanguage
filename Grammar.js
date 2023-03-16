
function grammar(){
  const S = ["1U", "1", "0Z"];
  const U = ["1T", "0Z"];
  const T = ["1", "1U", "0Z"];
  const Z = ["0", "B", "0S"];
  const B = ["1U", "1"];
  
  let string = "S";
  let currentChar;
  let array;
  
  while (/[a-zA-Z]/.test(string[string.length - 1])) {
    currentChar = string[string.length - 1];
    if (currentChar === "U") {
      array = U;
    } else if (currentChar === "T") {
      array = T;
    } else if (currentChar === "Z") {
      array = Z;
    } else if (currentChar === "B") {
      array = B;
    } else if (currentChar === "S") {
      array = S;
    }
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = array[randomIndex];
  
    // Reemplazar la letra mayúscula por una gramatica
    let arrayString = string.split("");
    arrayString.splice(arrayString.length - 1, 1, randomElement);
    string = arrayString.join("");
  }
  return string;
}

module.exports = grammar;