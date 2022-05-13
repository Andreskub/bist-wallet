class Product {
  constructor(productName, moneyInverted){
    this.name = productName;
    this.inverted = moneyInverted;
  }
}

class Client {
  constructor(name, document) {
    this.name = name;
    this.document = document;
    this.products = {};
  }
}

class Bank {
  constructor(){
    this.clients = [];
    this.products = {};
  }
}

const bank = new Bank();

function calculateInvestment() {
  let moneyInvested = parseInt(prompt("Enter amount of money to invest:"));
  let daysInvested = parseInt(prompt("Period to invest (days):"));

  let investMentReturn = Math.round((moneyInvested * 43 * daysInvested)/36500);


  alert("You will recive a total of " + (moneyInvested+investMentReturn) + " dollars in " + daysInvested + " days with an investment return of "+ investMentReturn + " dollars!");
}

function getClientInfo() {
  let name = prompt("Enter your name:");
  let document = parseInt(prompt("Enter your document:"));

  return [name, document];
}

function createNewClient(){
  let clientInfo = getClientInfo();
  
  const newClient = new Client(clientInfo[0], clientInfo[1]);

  //Add client to bank
  bank.clients.push(newClient);
  console.log(bank);

  alert("Information submited correctly!");
}