class Investment {
  constructor(amount, days, investmentReturn){
    this.amount = amount;
    this.period = days;
    this.return = investmentReturn;
  }
}

class Client {
  constructor(name, document) {
    this.name = name;
    this.document = document;
    this.investments = [];
  }
}

class Bank {
  constructor(){
    this.clients = [];
  }
}

const bank = new Bank();

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

function searchClient() {
  let client;
  let flag = true;
  let i = 0;

  let userInput = prompt("Enter your name or document:");
  
  while (flag && i < bank.clients.length){

    if (userInput == bank.clients[i].name || userInput == bank.clients[i].document){
      client = bank.clients[i];
      flag = false;
    }

    i++;
  }

  return client;
}

function calculateInvestment() {
  //let moneyInvested = parseInt(prompt("Enter amount of money to invest:"));
  //let daysInvested = parseInt(prompt("Period to invest (days):"));

  let moneyInvested = parseInt(document.getElementById("amount_to_invest").value);
  let daysInvested = parseInt(document.getElementById("days_to_invest").value);

  let investMentReturn = Math.round((moneyInvested * 43 * daysInvested)/36500);
  console.log(investMentReturn);
  console.log(typeof(investMentReturn));

  //alert("You will recive a total of " + (moneyInvested + investMentReturn) + " dollars in " + daysInvested + " days with an investment return of "+ investMentReturn + " dollars!");
  
  let p = document.getElementById("resultado");
  console.log(p);
  p.innerText = "You will recive a total of " + (moneyInvested + investMentReturn) + " dollars in " + daysInvested + " days with an investment return of "+ investMentReturn + " dollars!";
}

function createNewInvestment(client){
  let moneyInvested = parseInt(prompt("Enter amount of money to invest:"));
  let daysInvested = parseInt(prompt("Period to invest (days):"));

  let investMentReturn = Math.round((moneyInvested * 43 * daysInvested)/36500);

  const newInvestment = new Investment(moneyInvested, daysInvested, investMentReturn);
  client.investments.push(newInvestment);
}


function clientNewInvestment(){
  const client = searchClient();
  console.log("Client searched:");
  console.log(client);

  if(client != null){
    createNewInvestment(client);
  } else {
    alert("The client does not exist or the information provided is incorrect!");
  }

  console.log("Client's investments");
  console.log(client.investments);
}