
class Account {
  constructor(username) {
    this.username = username;
    this.transactions = []
    //this.balance = 0;
  }
  get balance(){
    let balance = 0;
    for (let num of this.transactions){
      balance += num.amount
    }
    return balance
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}


class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    console.log(this.isAllowed)
    if(this.isAllowed()){
      this.time = new Date();
      this.amount = this.value
      this.account.addTransaction(this);
    }
  }

}

class Withdrawal extends Transaction {
   isAllowed (){
    if(this.account.balance - this.amount < 0){

      return false
    } else {
      return true
    }
  }
  get value() {
    return (-this.amount);
  }
}


class Deposit extends Transaction {
  isAllowed(){
    return true
  }
  get value() {
    return  this.amount;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol")

console.log('Starting Balance:', myAccount.balance)

const t1 = new Withdrawal(50.25, myAccount);
t1.commit();


const t2 = new Withdrawal(9.99, myAccount);
t2.commit();


const t3 = new Deposit(120.00, myAccount);
t3.commit();


console.log('Balance:', myAccount.balance);
console.log(myAccount)
