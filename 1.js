'use strict';
let money, time;
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD.");
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
for (let i = 0; i < 2; i++) {
    let q1 = prompt("Введите обязательную статью расходов в этом месяце", '');
    let q2 = prompt("Во сколько обойдется?", '');

    if ((typeof (q1)) === "string" && (typeof (q1)) != null && (typeof (q2)) === "string" && (typeof (q2)) != null &&
        q1 != '' && q2 != '' && q1.length < 50) {
        appData.expenses[q1] = q2;
    } else {

    }

}

//ЦИКЛ С WHILE
// let i = 0;
// while (i < 2) {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let q2 = prompt("Во сколько обойдется?", '');

//     if ((typeof (q1)) === "string" && (typeof (q1)) != null && (typeof (q2)) === "string" && (typeof (q2)) != null &&
//         q1 != '' && q2 != '' && q1.length < 50) {
//         appData.expenses[q1] = q2;
//     }
//     i++;
// }

// ЦИКЛ С DO WHILE
// let i = 0;
// do{
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let q2 = prompt("Во сколько обойдется?", '');

//     if ((typeof (q1)) === "string" && (typeof (q1)) != null && (typeof (q2)) === "string" && (typeof (q2)) != null &&
//         q1 != '' && q2 != '' && q1.length < 50) {
//         appData.expenses[q1] = q2;
//         i++;
//     }
// } while (i<2)



appData.moneyPerDay = appData.budget / 30;
alert("Рассход в день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Миниммальный достаток")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Да ты богач!!");
} else {
    console.log("Чёто пошло не так.")
}

