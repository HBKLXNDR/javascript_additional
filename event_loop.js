let money = 0

function goWork(isWorkingDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkingDay) {
                money += 1000
                resolve(money)
                // console.log(money);
            } else {
                console.log("I am relaxing");
                reject("its not working day")
            }
        }, 800)
    })
}

function goToCroatia(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 800) {
                console.log("No money, no honey");
                reject("I wll better go to parents")
            } else {
                console.log("wwoohoo!");
                money -= 600
                resolve(money)
            }
        }, 400)
    })
}

function buySouvenirs(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 300) {
                console.log("only photo");
                reject("no money for souvenirs")
            } else {
                console.log("bought souvenirs!!");
                money -= 250
                resolve(money)
            }
        }, 1000)
    })
}

// console.log("_________");
// console.log(money);
// console.log("_________");

// goWork(true)
//     .then(value => {
//         console.log(`I have received ${value} usd`)
//         return goToCroatia(value)
//     }).then(moneyAfterTrip => {
//     console.log(`after trip I got ${moneyAfterTrip} usd`);
//     return buySouvenirs(moneyAfterTrip)
// }).then(moneyAfterShopping => {
//     console.log(`after shopping i got ${moneyAfterShopping} usd`);
//     //will work if all goes well
// }).catch(reason => {
//     console.warn("ooops",reason)
//     //will show if you have reject
// }).finally(()=>{
//     console.log("finally");
//     //will show in any way
// })


// buySouvenirs(money)

async function vacation(isWorkingDay) {
    try {
        const payment = await goWork(isWorkingDay)
        console.log(payment, 'payment');

        const moneyAfterTrip = await goToCroatia(payment)
        console.log(moneyAfterTrip, "money after trip");

        const moneyAfterShopping = await buySouvenirs(moneyAfterTrip)
        console.log(moneyAfterShopping, "moneyAfterShopping");
    } catch (reason) {
        console.warn("ooops", reason)
    }

}
vacation(false)
vacation(true)

