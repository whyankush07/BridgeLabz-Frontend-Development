class BankAccount {
  #balance;

  constructor(accountHolder, initialBalance = 0) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }

    this.#balance += amount;
    console.log(`Deposited: Rs.${amount}`);
    console.log(`New Balance: Rs.${this.#balance}\n`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }

    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }

    this.#balance -= amount;
    console.log(`Withdrawn: Rs.${amount}`);
    console.log(`New Balance: Rs.${this.#balance}\n`);
  }

  getBalance() {
    return this.#balance;
  }

  displayBalance() {
    console.log(`Account Holder: ${this.accountHolder}`);
    console.log(`Current Balance: Rs.${this.#balance}\n`);
  }
}

const account = new BankAccount("Rohan Verma", 5000);

console.log("=== Initial Balance ===");
account.displayBalance();

console.log("=== Valid Deposit ===");
try {
  account.deposit(3000);
} catch (error) {
  console.log(`Error: ${error.message}\n`);
}

console.log("=== Valid Withdrawal ===");
try {
  account.withdraw(2000);
} catch (error) {
  console.log(`Error: ${error.message}\n`);
}

console.log("=== Invalid Withdrawal (Insufficient Balance) ===");
try {
  account.withdraw(10000);
} catch (error) {
  console.log(`Error: ${error.message}\n`);
}

console.log("=== Invalid Deposit (Negative Amount) ===");
try {
  account.deposit(-500);
} catch (error) {
  console.log(`Error: ${error.message}\n`);
}

console.log("=== Final Balance ===");
account.displayBalance();

console.log("=== Private Field Demo ===");
console.log("Accessing balance directly:", account.balance);
console.log("Using getBalance():", account.getBalance());
