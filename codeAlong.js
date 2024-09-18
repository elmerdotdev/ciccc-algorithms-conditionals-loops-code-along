// let isRaining = false
// let isCold = false

// if (isRaining && isCold) {
//   console.log("It's raining and it's cold!")
// } else {
//   console.log("It's not raining and it's not cold")
// }


// let username = "johnsmith"
// const isNewUser = false
// const isLoggedIn = true
//       // T         // T         // T
// // if (username && !isNewUser && isLoggedIn) {
// //   console.log(`Welcome back!`)
// // } else {
// //   console.log(`You are a new user!`)
// // }

// // let num1 = 0
// // let num2 = 1
// //     // F           // T
// // if (num1 > 5 && num2 > 5) {
// //   console.log("Both numbers are greater than 5")
// // } else if (num1 >= 1 && num2 >= 1) {
// //   console.log("Both numbers are greater than 1")
// // } else {
// //   console.log("Both numbers are less than 1")
// // }

// // let isWorking = true

// // if (!isWorking) {
// //   console.log("You are not working!")
// // } else {
// //   console.log("You are working!")
// // }


// // SAME:
// // !isStudent
// // isStudent === false

// // SAME:
// // isStudent
// // isStudent === true

// // const isStudent = true
// //         // F
// // if (!isStudent) {
// //   // if isStudent is false
// //   console.log("You are not a student")
// // } else {
// //   // if isStudent is true
// //   console.log("You are a student")
// // }

// // let wallet = 25

// // if (wallet >= 50 && wallet <= 100) {
// //   console.log("You can buy two burgers in Vancouver")
// // } else if (wallet >= 30 && wallet <= 49) {
// //   console.log("You can buy 6 sticks of french fries in McDonalds")
// // } else {
// //   console.log("Stay at home.")
// // }

// // const isRaining = false
// // const isCold = true
// // const message = !isRaining ? "It's not raining" : "It's raining"
// // console.log(message)

// let userName = "mary"

// if (userName === "john") {
//   console.log("You are John")
// } else if (userName === "joe") {
//   console.log("You are Joe")
// } else if (userName === "mary") {
//   console.log("You are Mary")
// } else {
//   console.log("You are somebody")
// }

// switch (userName) {
//   case "john":
//     console.log("You are John")
//     break;
//   case "joe":
//     console.log("You are Joe")
//     break;
//   case "mary":
//     console.log("You are Mary")
//     break;
//   default:
//     console.log("You are somebody")
// }

// let age = 40

// switch (age) {
//   case 50:
//     console.log("You are semi-old")
//     break;
//   case 40:
//     console.log("You are the perfect age")
//     break;
//   case 20:
//     console.log("You are big kids")
//     break;
//   default:
//     console.log("You are a youngling")
// }

// let position = 4
// let medal;

// switch (position) {
//   case 1:
//     medal = "gold";
//     break;
//   case 2:
//     medal = "silver";
//     break;
//   case 3:
//     medal = "bronze";
//     break;
//   default:
//     medal = "a pat on the back";
// }

// console.log(`You got the ${medal} medal.`)

 // 1             // T    // 4
// for (let i = 1; i <= 100; i = i * 2) {
//   console.log(i) // 2
// }

// for (let i = 0; i < 5; i++) {
//   console.log(`Current i is: ${i}`)
// }

// let start = 0
// while(start < 5) {
//   console.log(start)
//   start++
// }
// console.log(start) // 5

for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 2; y++) {
    console.log(`x: ${x}, y: ${y}`)
  }
}