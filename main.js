// TASK 1

// while (true) {

//     let choice = prompt("1 ile 4 arasinda eded daxil edin: ")

//     if (choice < 5 && choice > 0) {

//         if (choice == 1) {
//             alert("yaz")
//         }
//         else if (choice == 2) {
//             alert("yay")
//         }
//         else if (choice == 3) {
//             alert("payiz")
//         }
//         else {
//             alert("qis")
//         }

//     }
//     else {
//         alert("daxil etdiyiniz eded yanlisdir: ")
//     }

// }


// TASK 2

// let divider=1;
// let number = prompt("eded daxil edin: ")

// while(number>=divider){
//     if (number%divider==0) {
//         console.log(divider)
//     }
//     divider++
// }

// TASK 3

// let nums = [1,32,54,7,9,6]


// nums.forEach((item) => {
  //   if (item>max) {
    //   max=item;
    //   }
    // })
    // console.log(max)

    
//   function getMax (array){

//   let max = array[0]

//   for (const item of array) {

//     if (item>max) {
//       max=item;
//       }

//   }
//   return max
// }

// console.log(getMax(nums))



// TASK 4
// number = prompt("eded daxil edin: ")

// function getFactorial(number) {
//   let factorial=1
//   let count = 1
  
//   while(count<=number){
//       factorial*=count
//       count++
//   }
//   return factorial
  
// }
// alert(getFactorial(number))



// TASK 5

// let loan = prompt("goturmek istediyiniz kreditin meblegini daxil edin: ")
// let currency = prompt("kreditin valyutasini daxil edin: ")
// let month = prompt("kreditin odenileceyi muddeti ay olaraq daxil edin: ")
// let monthNumber = 1
// let amount;
// let lastAmount;

// if (loan%month==0) {

// while(monthNumber<=month){
//     amount=loan/month
//     console.log("Ay "+monthNumber+" : "+amount+" "+currency)
//     monthNumber++
//     }
//   }
  
// if (loan%month!==0) {
//   lastAmount = ((loan-(loan%month))/month) + (loan%month)
//   while(monthNumber<month){
//       amount=(loan-(loan%month))/month
//       console.log("Ay "+monthNumber+" : "+amount+" "+currency)   
//       monthNumber++
//   }
//   console.log("Ay "+monthNumber+" : "+lastAmount+" "+currency)
// }





