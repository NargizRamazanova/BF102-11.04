// function division (number){
//     if (number %7 == 0) {
//         console.log("Eded 7'e bolunur!");
//     }
//     else{
//         let smallNumber = Math.floor(number/7)*7;//7
//         let largeNumber = smallNumber +7;//14
//         if (number - smallNumber < largeNumber - number) {
//             console.log('Eded:'+ smallNumber);
//         }
//         else{
//             console.log('Eded:' + largeNumber);
//         }
//     }
// }
// division(6);


// const myfunction = function(num){
//     if(num%7==0){
//         console.log("7-e bolunur");
//     }
//     else{
//         for(let i=0;i<num;i++){
//             if(num%7!=0){
//                 if((num%7)>3){
//                     num++;
//                 }

//                 else{
//                     num--;
//                 }
//             }
//         }
//         return num;
//     }
// }

// num=23;
// console.log(myfunction(num)) ;


// let sum = num => {
//     let count = 0;
//     if (num < 50) {
//         for (let i = 0; i < num; i +=3) {
//             count++;
//         }
//     }
//     else if (num >= 50 && num < 100) {
//         for (let i = 0; i < num; i +=5) {
//             count++;
//         }
//     }
//     else if (num >= 100) {
//         for (let i = 0; i < num; i +=8) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(sum(80));


// let sum = num => {
//     let count = 0;
//     if (num < 50) {
//         count=Math.floor(num/3);
//     }
//     else if (num >= 50 && num < 100) {
//         count=Math.floor(num/5);
//     }
//     else if (num >= 100) {
//         count=Math.floor(num/8);
//     }
//     return count;
// }
// console.log(sum(20));

// for(var i = 0; i<5; i++){
//     console.log("in loop",i)
// }

// console.log(i)

// myFunc()

// var myFunc = function One(){
//     console.log("hello")
// }

// console.log(myFunc)



//Kalkulyator yaz. 4 emeliyyat eden(+ - * /). Bu emeliyyatlari funksiya ile yaz.
//Istifadechiden deyerleri propmt ile gotur

// let num1= prompt("Enter first number")
// let num2= prompt("Enter second number")
// let operation= prompt("Enter operation (+ - * /)")

// if(operation == "+"){
//     console.log(Sum(num1, num2));
// }else if(operation == "-"){
//     console.log(Sub(num1, num2));
// }else if(operation == "*"){
//     console.log(Mult(num1, num2));
// }else if(operation == "/"){
//     console.log(Div(num1, num2));
// }else{
//     console.log("Operation not found!")
// }


// function Mult(a, b){
//     return a*b;
// }
// function Sum(a, b){
//     return a+b;
// }
// function Div(a, b){
//     return a/b;
// }
// function Sub(a, b){
//     return a-b;
// }


// funksiya soz ve herf qebul edir. Hemin herf sozde varsa onun indeksini qaytarir. Yoxdursa "tapilmadi" yazir


// let wordFromUser = prompt("Enter the word")
// let letterFromUser = prompt("Enter the letter")

// console.log("Result: ", FindLetter(letterFromUser,wordFromUser))


// function FindLetter(letter, word){
//     for(let i = 0; i< word.length; i++){
//         if(word[i] === letter){
//             return i;
//         }
//     }
//     return "Not Found";
// }

// FUNKSIYA YARAT. SOZ QEBUL ELESIN. EN CHOX TEKRARLANAN HERFI CHIXARSIN CONSOLE-A. YOXDURSA "TAPILMADI"

let wordFromUser = prompt("Enter word")

console.log(Find(wordFromUser))


function Find(word){
    let letter = word[0]; //l
    let count = 1; //2
    for(let i = 0; i< word.length; i++){
        let countInner = 1; //2
        for(let k = i; k<word.length; k++){
            if(word[i]===word[k]){
                countInner+=1;
            }
        }
        if(countInner > count){
            letter = word[i];
            count = countInner;
        }
    }
    return letter;
}