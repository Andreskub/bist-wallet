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

const client = new Client("Usero01", "123456789")

function getInputValues() {
  let moneyInvested = parseInt(document.getElementById("amount_to_invest").value);
  let daysInvested = parseInt(document.getElementById("days_to_invest").value);

  let investMentReturn = Math.round((moneyInvested * 43 * daysInvested)/36500);

  return [moneyInvested, daysInvested, investMentReturn]
}

const clearInputValues = () => {
  document.getElementById("amount_to_invest").value = "";
  document.getElementById("days_to_invest").value = "";
}

const calculateInvestment = button => {
  button.preventDefault();

  let values = getInputValues();
  
  let responseText = document.getElementById("queryResult");
  console.log(responseText);
  responseText.innerText = "You will recive a total of " + (values[0] + values[2]) + " dollars in " + values[1] + " days with an investment return of "+ values[2] + " dollars!";

  clearInputValues();
}

let calculateButton = document.getElementById("calculateInvestmentButton");
calculateButton.addEventListener("click", calculateInvestment);


const createNewInvestment = button => {
  button.preventDefault();

  let values = getInputValues();

  const newInvestment = new Investment(values[0], values[1], values[2]);
  client.investments.push(newInvestment);

  let responseText = document.getElementById("queryResult");
  console.log(responseText);
  responseText.innerText = "Your new investment was registered correctly!";

  console.log("Client");
  console.log(client);

  clearInputValues();
}

let createInvestmentButton = document.getElementById("newInvestmentButton");
createInvestmentButton.addEventListener("click", createNewInvestment);