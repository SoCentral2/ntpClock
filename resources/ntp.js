var myArray = new Array("1", "2", "3", "4", "5");


// Get dropdown element from DOM
var dropdown = document.getElementById("selectHours");

// Loop through the array
for (var i = 0; i < myArray.length; ++i) {
    // Append the element to the end of Array list
    dropdown[dropdown.length] = new Option(myArray[i], myArray[i]);
}