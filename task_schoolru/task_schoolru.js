// https://wm-school.ru/js/array_exercises.php

// =====================1. Array Clone =====================
// let numbers = ['a', 'b', 'c'];
// let numbersCopy = [ ];

// numbersCopy= [...numbers]; // method #1
// numbersCopy = numbers.slice(0); // method #2
// for(let i=0; i<numbers.length;i++){  // method #3
//     numbersCopy.push(numbers[i]);
// }
// console.log(numbersCopy);

// ===================== 2. Convert Array to String =====================
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let newVegetables = " ";

// newVegetables = vegetables.toString(); // method #1
// newVegetables = vegetables.join(); // method #2
// for(let i=0;i<vegetables.length;i++){  // method #3
//     newVegetables += vegetables[i] + ", "
// }
// console.log(newVegetables);

// ===================== 3. Convert Array to String =====================

// const num = "5397";
// let newNum = [num[0]]

// for (let i = 1; i < num.length; i++) {
//   if (parseInt(num[i-1])%2 != 0 && parseInt(num[i])%2 != 0 ) {
//     // newNum += `${num[i]}:${num[i+1]}`
//     newNum += ":" + num[i];
//   } else {
//     newNum += num[i];
//   }
// }

// console.log(newNum);
// console.log(num);

// ===================== 4. Changeing the case of character =====================

// let caseMix = "HelLo woRlD!";
// let caseChange = '';

// for(let i=0;i<caseMix.length; i++){
//     if(caseMix[i] == caseMix[i].toUpperCase()){
//         caseChange += caseMix[i].toLowerCase();
//     }else{
//         caseChange += caseMix[i].toUpperCase();
//     }
// }
// console.log(caseMix);
// console.log(caseChange);

// ===================== 5. Remove duplicate array elements =====================
// var arr = ["php","php","css","css","script","script","html","html","java",
// ];
// let newArr = [];

// function removeDuplicates(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (!newArr.includes(arr[i])) {
//          newArr.push(arr[i]);
//       }
//     }
//   }
//   removeDuplicates(arr);
//   console.log(newArr);

// ===================== 6. Find leap years ======================
// let leapArr = [];

// function chooseLeapYear(date1,date2) {
//     for(let i=date1; i<=date2;i++){
//         if(i%4==0){
//             leapArr.push(i);
//         }
//     }
//     console.log(leapArr);
// }
// chooseLeapYear(2000,2018)

// ===================== 7.  ======================

// ===================== 8. Get the first elements of an array ======================
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = [];

// function getFirst(array, n) {
//   if (n > 0) {
//     for (let i = 0; i < n; i++) {
//       newArr.push(array[i]);
//     }
//   } else if(n==0){
//     newArr
//   }
//   else{
//     n = n * (-1);
//     for(let j=0;j<array.length-3;j++)
//     newArr.push(array[j]);
//   }
// }
// getFirst(array, -3);
// console.log(newArr);

// ===================== 9. Get the last elements of an array =======================
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = [];

// function getLast(array, n) {

//     for (let i=array.length-1;i>=0;i--){
//         if(n == i){
//            break
//         }
//          newArr.push(array[i]);
//     }
//     newArr.reverse();
// }
// getLast(array, 4);
// console.log(newArr);

// ===================== 10. Sum of elements of two arrays ==========================

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6];
// let sum = 0;
// let sumArr = [];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr1.length; j++) {
//     if (i == j) {
//       if (arr2[j] === undefined) {
//         continue;
//       } else {
//         sum = arr1[i] + arr2[j];
//         sumArr.push(sum);
//       }
//       break;
//     } else if (arr2[j] === undefined) {
//       sumArr.push(arr1[i]);
//     } else {
//       continue;
//     }
//   }
// }
// console.log(sumArr);

// ===================== 11. Number of repeating elements in an array ==========================

// let arr = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]; // 4
// let newArr1 = [];
// let newArr2 = [];

// for (let k = 0; k < arr.length; k++) {
//   if (!newArr1.includes(arr[k])) {
//     newArr1.push(arr[k]);
//   }
// }
// // b = arr; a = newArr1
// console.log(newArr1);
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//        if(!arr.includes(newArr1[j]) && arr[i] === undefined){
//             console.log(newArr1[j]);
//             break
//        }else if(newArr1[i] === undefined){
//         continue
//        }
//        else{
//         continue
//        }
//     }
// }
