console.log(" Scrieți o funcție care returnează pătratul unui număr");

const number = 6;
const number1 = 0;
const number2 = -12;

const findSquare = (num) => {
    return  Math.pow(num, 2);
}

const result1 = findSquare(number);
console.log(result1);

const result2 = findSquare(number1);
console.log(result2);

const result3 = findSquare(number2);
console.log(result3);

console.log("\n");

console.log("Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start");

const start = 1;
const end = 9;

const getRandom = (min, max) => {
   return Math.floor(Math.random() * (max - min) + min);
}

const randomNumber = getRandom(start, end);
console.log(`${randomNumber} este un număr mai ≥ ${start} și < ${end}`);

console.log("\n");

console.log("Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir");

const stringValue1 = "Îmi place programarea";
const stringValue2 = "Vreau să lucrez în IT";

const letterCount = (string, letter) => {
    const lowerCaseString = string.toLowerCase();
    return lowerCaseString.split(letter).length - 1;
}

console.log(letterCount(stringValue1, "a"));
console.log(letterCount(stringValue2, "r"));

console.log("\n");

console.log("Scrieți o funcție pentru a adăuga numere nelimitate");

const arr = [1, 2, 3, 4, 5];
const copyArr = [...arr];
const initialValue = 0;

const sum = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, initialValue);

console.log(sum);

