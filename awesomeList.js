function makeOuterDiv() {
  var div = document.createElement('div');
  div.setAttribute('class', 'listComponent');
  return div;
}

function makeNonSubmitButton(onclick, text) {

  var newButton = document.createElement('button');
  newButton.setAttribute('type', 'button');
  if (text !== undefined)
    newButton.innerHTML = text;
  newButton.onclick = onclick;
  return newButton;

}

function makeListTextItem(text, name) {

  var textItem     = document.createElement('input');
  textItem.readOnly = true;
  textItem.value = text;
  textItem.setAttribute('class', 'listTextItem');
  textItem.setAttribute('name', name);
  return textItem;

}

function makeDeleteButton(toDelete, cleanUp) {

  return makeNonSubmitButton(function(e) {

    e.preventDefault();

    toDelete.parentNode.removeChild(toDelete);

    cleanUp();

  });

}

function makeAddButton(textBox, itemList, namer) {

  return makeNonSubmitButton(function(e) {

    e.preventDefault();
    if (textBox.value.length === 0)
      return;

    var newDOMItem   = document.createElement('li');

    var textItem     = makeListTextItem( textBox.value, namer( itemList.children.length ) );

    var deleteButton = makeDeleteButton( newDOMItem, Array.prototype.forEach.bind(itemList.children, function(li, index) {
      li.children[0].setAttribute('name', namer(index));
    }));

    newDOMItem.appendChild( textItem );
    newDOMItem.appendChild( deleteButton );
    itemList.appendChild( newDOMItem );

    textBox.value = '';

  }, 'ADD');

}

function makeListFromNode(listNode) {

  // Co-opt the original HTML form component's name
  var listName  = listNode.name;

  // Format list-item names so that they will be POSTed as a
  // PHP array.
  var makeTextItemName = function(index) {
    return listName + "[" + index + "]";
  }

  var componentDiv = makeOuterDiv();
  var textBox   = document.createElement('input');
  var itemList  = document.createElement('ul');
  var addButton = makeAddButton(textBox, itemList, makeTextItemName);
  [textBox, addButton, itemList].forEach(componentDiv.appendChild.bind(componentDiv));

  // Remove original component, insert our new ones
  var parentForm = listNode.parentNode;
  parentForm.insertBefore(componentDiv, listNode);
  parentForm.removeChild(listNode);

  return {
    reset: function() {
      while (itemList.children.length > 0) {
        itemList.removeChild(itemList.children[0]);
      }
    },
    getArray: function() {
      return Array.prototype.map.call(itemList.children, function(li) {
        var textItem = li.children[0];
        var text     = textItem.value;
        return text;
      });
    },
    submit: function() {
      var textArray = this.getArray();
      this.reset();
      return textArray;
    }
  };

}

window.onload = function() {

  window.listComponents = [];

  while (true) {
    var lists = document.getElementsByClassName('list');
    if (lists.length === 0)
      break;
    window.listComponents.push(makeListFromNode(lists[0]));
  }

};
