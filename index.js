class Account {
  
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    // console.log(this.transactions);
    let currentBalance = 0;
    for (const transaction of this.transactions) {
      currentBalance += transaction;
    }
    return currentBalance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.account = account;
    this.amount = amount;
  }

  commit() {
    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this.value);
      return "Transaction Successful";
    } else {
      return 'Insufficient Funds';
    }
    // console.log(this);
    // this.account.balance += this.value;
  }
}
class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }

  isAllowed() {
    return (this.account.balance + this.value >= 0);
  }

}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}



// DRIVER CODE BELOW
const accountA = new Account("xxwydxx");
// console.log(accountA);
console.log('Starting Balance: ', accountA.balance);

const t1 = new Withdrawal(50.25, accountA);
console.log('You are attempting to make a withdrawl of: ', t1.amount);
console.log('Transaction Result:', t1.commit());
console.log('Account Balance: ', accountA.balance);
console.log('Transaction 1:', t1);

const t2 = new Withdrawal(9.99, accountA);
console.log('You are attempting to make a withdrawl of: ', t2.amount);
console.log('Transaction Result:', t2.commit());
console.log('Account Balance: ', accountA.balance);
console.log('Transaction 2:', t2);

const t3 = new Deposit(12.23, accountA);
console.log('You are attempting to make a deposit of: ', t3.amount);
console.log('Transaction Result:', t3.commit());
console.log('Account Balance: ', accountA.balance);
console.log('Transaction 3:', t3);


