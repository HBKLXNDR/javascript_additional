// let money = 0
//
// function goWork(isWorkingDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWorkingDay) {
//                 money += 1000
//                 resolve(money)
//                 // console.log(money);
//             } else {
//                 console.log("I am relaxing");
//                 reject("its not working day")
//             }
//         }, 800)
//     })
// }
//
// function goToCroatia(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money < 800) {
//                 console.log("No money, no honey");
//                 reject("I wll better go to parents")
//             } else {
//                 console.log("wwoohoo!");
//                 money -= 600
//                 resolve(money)
//             }
//         }, 400)
//     })
// }
//
// function buySouvenirs(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money < 300) {
//                 console.log("only photo");
//                 reject("no money for souvenirs")
//             } else {
//                 console.log("bought souvenirs!!");
//                 money -= 250
//                 resolve(money)
//             }
//         }, 1000)
//     })
// }

// // console.log("_________");
// // console.log(money);
// // console.log("_________");
//
// // goWork(true)
// //     .then(value => {
// //         console.log(`I have received ${value} usd`)
// //         return goToCroatia(value)
// //     }).then(moneyAfterTrip => {
// //     console.log(`after trip I got ${moneyAfterTrip} usd`);
// //     return buySouvenirs(moneyAfterTrip)
// // }).then(moneyAfterShopping => {
// //     console.log(`after shopping i got ${moneyAfterShopping} usd`);
// //     //will work if all goes well
// // }).catch(reason => {
// //     console.warn("ooops",reason)
// //     //will show if you have reject
// // }).finally(()=>{
// //     console.log("finally");
// //     //will show in any way
// // })
//
//
// // buySouvenirs(money)

// async function vacation(isWorkingDay) {
//     try {
//         const payment = await goWork(isWorkingDay)
//         console.log(payment, 'payment');
//
//         const moneyAfterTrip = await goToCroatia(payment)
//         console.log(moneyAfterTrip, "money after trip");
//
//         const moneyAfterShopping = await buySouvenirs(moneyAfterTrip)
//         console.log(moneyAfterShopping, "moneyAfterShopping");
//     } catch (reason) {
//         console.warn("ooops", reason)
//     }
//
// }
//
// vacation(false)
// vacation(true)


// let array = [5, 6, 7]
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
// }
//

//
// let someArray = [10,20,33,98]
//
// for (let i=0 ; i<someArray.length; i++ ){
//     const someArrayElement = someArray[i]
//     document.write(`<div>${someArrayElement}</div>`)
// }
//
// for (const arrayElement of array) {
//     console.log(arrayElement)
// }
//
// for (let i = 0; i < someArray.length; i++) {
//     const someArrayElement = someArray[i];
//
// }
let cleanedTeeth

function morning(didYouWakeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (didYouWakeUp) {
                cleanedTeeth = true
                resolve(cleanedTeeth)
                console.log("good job, it is", cleanedTeeth);
            } else {
                console.log("I am still sleeping");
                reject("Wake up!")
            }

        }, 20)
    })
}

let takeAShower

function goToShower(cleanedTeeth) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cleanedTeeth) {
                takeAShower = true
                resolve(takeAShower)
                console.log("Nice shower!")
            } else {
                console.log("I have a bad smell from my mouth");
                reject("You need to clean your teeth first")

            }
        }, 5)
    })
}

let yummyBreakfast

function breakfast(didYouTakeAShower) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (didYouTakeAShower) {
                yummyBreakfast = true
                resolve(yummyBreakfast)
                console.log("very tasty!")
            } else {
                console.log("I am dirty")
                reject("you have to take a shower first")
            }

        }, 15)
    })
}

//
// morning(true)
//     .then(value => {
//         console.log(`I have cleaned my teeth and it is ${value}`)
//         return goToShower(value)
//     }).then(showerIsTaken => {
//     console.log(`I have taken a shower and it is ${showerIsTaken}`);
//     return breakfast(showerIsTaken)
// }).then(breakfastIsEaten => {
//     console.log(`I have eaten my breakfast and it is ${breakfastIsEaten}`);
// }).catch(reason => {
//     console.warn("oops", reason)
// })


async function goodMo(didYouWakeUp) {
    try {
        let cleanedTeeth = await morning(didYouWakeUp)
        console.log("cleanedTeeth", cleanedTeeth)

        let takenShower = await goToShower(cleanedTeeth)
        console.log("takenShower", takenShower)

        let eatenBreakfast = await breakfast(takenShower)
        console.log("eatenBreakfast", eatenBreakfast)
    } catch (e) {
        console.log("oops", e);
    }
}

goodMo(true)


// // goWork(true)
// //     .then(value => {
// //         console.log(`I have received ${value} usd`)
// //         return goToCroatia(value)
// //     }).then(moneyAfterTrip => {
// //     console.log(`after trip I got ${moneyAfterTrip} usd`);
// //     return buySouvenirs(moneyAfterTrip)
// // }).then(moneyAfterShopping => {
// //     console.log(`after shopping i got ${moneyAfterShopping} usd`);
// //     //will work if all goes well
// // }).catch(reason => {
// //     console.warn("ooops",reason)
// //     //will show if you have reject
// // }).finally(()=>{
// //     console.log("finally");
// //     //will show in any way
// // })

//
// function goToCroatia(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money < 800) {
//                 console.log("No money, no honey");
//                 reject("I wll better go to parents")
//             } else {
//                 console.log("wwoohoo!");
//                 money -= 600
//                 resolve(money)
//             }
//         }, 400)
//     })
// }