function ListComponent() {

  var outerDiv = document.createElement('div');
  var form     = document.createElement('form');
  

}

window.onload = function() {



  // function makeNode(type, attributes, properties) {

  //   var newThing = document.createElement(type);
  //   for (var attr in attributes) {
  //     if (attributes.hasOwnProperty(attr)) {
  //       newThing.setAttribute(attr, attributes[attr]);
  //     }
  //   }
  //   for (var prop in properties) {
  //     if (properties.hasOwnProperty(prop)) {
  //       newThing[prop] = properties[prop];
  //     }
  //   }
  //   return newThing;
  // }

  // var ItemList = function() {

  //   this.node      = makeNode('ul', { 'class': 'itemList' }, {});

  //   this.getArray  = function() { return list.slice(); };

  //   this.addItem   = function(text) { 
  //     var li = makeNode('li', { 'id': 'item' }, { 'innerText': text });
  //     var button = makeNode('input', { 'type': 'submit', 'value': 'X' }, { 'onclick': function() {
  //       li.parentNode.removeChild(li);
  //     }});
  //     li.appendChild(button);
  //     this.node.appendChild(li);
  //   };

  //   this.submit    = function() {
  //     var textItems = Array.prototype.map.call(this.node.children, function(node) { return node.childNodes[0].textContent; });
  //     while (this.node.children.length > 0) {
  //       var topChild = this.node.children[0];
  //       this.node.removeChild(topChild);
  //     }
  //     return textItems;
  //   }
  // };

  // var ItemForm = function() {

  // }

  // var ListComponent = function() {

  //   var node = makeNode('div', { 'class': 'listComponent' });
  //   var form = makeNode('form', {}, {});
  //   var itemList = new ItemList();

  //   form.onsubmit = function(e) {
  //     e.preventDefault();
  //     if (userText.value === '')
  //       return;
  //     itemList.addItem(userText.value);
  //     userText.value = '';
  //   };

  // }

  // var form      = document.getElementById('form');
  // var userText  = document.getElementById('userText');
  // var addButton = document.getElementById('add');
  // var submitter = document.getElementById('submit');



  // submitter.onclick = function(e) {
  //   e.preventDefault();
  //   console.log(itemList.submit());
  // };

}
