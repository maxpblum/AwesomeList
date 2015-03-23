# Max's Awesome List Component!

To use, simply include an `<input>` tag with class `"list"`, and the following code somewhere in your HTML: ```<script type='text/javascript' src='awesomeList.js'></script>``` (with an appropriately modified path to `awesomeList.js`, which you will have copied somewhere)

The JavaScript component exposes a global (on the `window` object) variable called listComponents, which is an array of objects representing all of the above tags included in the DOM at the time the script is run. Each one has a property called `"submit"`, whose value is a function that returns an array of the current text items in that list, and empties the list.

It is not necessary to use this method, however, if you prefer to include the component in a form that submits via POST. The script removes your original `<input>` tag, replacing it with a set of native form components whose names are based on the original tag's `name` attribute, if it has one (otherwise these components will not be included in default form submission), and are structured such that PHP will interpret them as an array.
