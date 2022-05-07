function getValues() {
  var numberList = [];
  let userInput;

  while (numberList.length <= 4) {
    userInput = parseInt(prompt("Enter a number:"));
    numberList.push(userInput);
  }

  return numberList;
}

function insertionSort(list){
  var len = list.length;

  for(i = 1; i < len; i++){

    var elem = list[i];
    let j = i-1;

    while (j >= 0 && elem < list[j]) {
      list[j+1] = list[j];
      j--;
    }

    list[j+1] = elem;
  }

  return list;
}

function main() {
  //Get values to sort
  var list = getValues();
  console.log("Unsorted list: " + list);
  document.getElementById("initialList").innerText=list;

  //Insertion Sort
  var sortedList = insertionSort(list);
  console.log("Sorted list: " + sortedList);
  document.getElementById("resultList").innerText=sortedList;
}