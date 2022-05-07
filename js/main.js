
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

function getClientInfo() {
  let name = prompt("Enter your name:");
  let document = parseInt(prompt("Enter your document:"));

  return [name, document];
}

function createNewClient(bank){
  let clientInfo = getClientInfo();
  
  const newClient = new Client(clientInfo[0], clientInfo[1]);

  //Add client to bank
  bank.clients.push(newClient);
}

function main() {
  const bank = new Bank();
  createNewClient(bank);
  createNewClient(bank);

  console.log(bank);
}