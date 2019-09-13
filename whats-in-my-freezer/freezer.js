var freezerContents = [] //empty array for items to be added to
var list = "";

// document.addEventListener("DOMContentLoaded", function(event) {
// });

function addItemToFreezer() {
  const itemToAdd = document.getElementById('item_input').value;
  freezerContents.push({
    item: itemToAdd,
    number: 1, // once i have my dropdown menu this will be a parameter
    id: Math.random()
  });
  freezerContents.sort();
  document.getElementById('item_input').value = '';
}

function createDivs(numberOfDivsToCreate) {
  const divs = [];

  for (var i = 0; i < numberOfDivsToCreate; i++) {
    divs.push(document.createElement('div'))
  };

  return divs;
}

function appendElementsToElement(elementToAppendTo, elementsToAppend) {
  for (var i = 0; i < elementsToAppend.length; i++) {
    elementToAppendTo.appendChild(elementsToAppend[i]);
  }
}

function createList() {
  //create the list element
  list = document.createElement('div');
  for (var i = 0; i < freezerContents.length; i++) {
    //create the list items
    var [listNumber, listItem, row, minusButton, plusButton] = createDivs(5);

    // create ids
    minusButton.id = freezerContents[i].id;
    plusButton.id = freezerContents[i].id;

    // add classes
    row.className = "freezerRow";
    minusButton.className = "fa fa-minus freezerButton";
    plusButton.className = "fa fa-plus freezerButton";

    //set its contents
    appendElementsToElement(listNumber, [document.createTextNode(freezerContents[i].number)]);
    appendElementsToElement(listItem, [document.createTextNode(freezerContents[i].item)]);

    //add it to the list
    appendElementsToElement(row, [listNumber, listItem, minusButton, plusButton]);
    appendElementsToElement(list, [row])
  };
};

function writeListToHtml() {
  document.getElementById("freezer").innerHTML = list.innerHTML;
}

function onClickHandling(eventInfo, buttonType) {
  if (buttonType == "plus") {
    for (var i = 0; i < freezerContents.length; i++) {
      if (freezerContents[i].id == eventInfo.target.id) {
        freezerContents[i].number++;
      }
    }
  }
  if (buttonType == "minus") {
    for (var i = 0; i < freezerContents.length; i++) {
      if (freezerContents[i].id == eventInfo.target.id) {
        freezerContents[i].number--;
        if (freezerContents[i].number <= 0) {
          freezerContents.splice(i, 1);
        }
      }
    }
  }
  redraw();
};

function addOnClicks() {
  var plusButtonClick = document.getElementsByClassName("fa-plus");
  var minusButtonClick = document.getElementsByClassName("fa-minus");

  for (var i = 0; i < plusButtonClick.length; i++) {
    plusButtonClick[i].onclick = function (event) { onClickHandling(event, "plus"); }
  }
  for (var i = 0; i < minusButtonClick.length; i++) {
    minusButtonClick[i].onclick = function (event) { onClickHandling(event, "minus"); }
  }
}

function redraw() {
  createList();
  writeListToHtml();
  addOnClicks();
}

function generateFreezer() {
  addItemToFreezer();
  redraw();
}
