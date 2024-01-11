// const balance = document.getElementById('balance');
// const moneyPlus = document.getElementById('money-plus');
// const moneyMinus = document.getElementById('money-minus');

// const list = document.getElementById('list');

// const form = document.getElementById('form');

// const text = document.getElementById('text');

// const amount = document.getElementById('amount');

// // Context from Code Snippet f:/expense tracker\index.html:<!DOCTYPE html>

// const dummyTransactions = [
//     {id: 1, text: 'Flower', amount: -20},
//     {id: 2, text: 'salary', amount: -2000},
//     {id: 3, text: 'book', amount: -250},
//     {id: 4, text: 'camera', amount: -200},
// ]

// let Transactions = dummyTransactions;

// function addTransaction(transaction) {
//     const sign = transaction.amount < 0 ? '-' : '+';
//     const item = document.createElement("li");

//     item.classList.add(
//         transaction.amount < 0 ? 'minus' : 'plus',
//     );

//     item.innerText = `
//         ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
//         <button class="delete-btn" >X</button>
//     `;

//     list.appendChild(item);
// }

// addTransaction(Transactions[0]); // Display the first transaction for testing





const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');

const list = document.getElementById('list');

const form = document.getElementById('form');

const text = document.getElementById('text');

const amount = document.getElementById('amount');

const dummyTransactions = [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 2000 },
    { id: 3, text: 'Book', amount: -250 },
    { id: 4, text: 'Camera', amount: -200 },
];

let transactions = dummyTransactions;

function addTransaction(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement("li");

    item.classList.add(
        transaction.amount < 0 ? 'minus' : 'plus'
    );

    item.innerHTML = `
        ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" >X</button>
    `;

    list.appendChild(item);
}

//add transaction


// update value

function updateValues(){
    const amounts = transaction.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)*-1
        ).toFixed(2);

    balance.innerText = `Rs ${total}`;
    moneyPlus.innerText = `Rs ${income}`;
    moneyMinus.innerText = `Rs ${expense}`;
}

//init app

function Init(){
    list.innerHTML="";
    transactions.forEach(addTransaction);
    updateValues();
}
Init();
addTransaction(transactions[0]);