 // Assigning two variables and linking the element with the ids named 'Cost' and 'Litres'
let cost = document.getElementById("Cost");
let litres = document.getElementById("Litres");

// Defining a function with the name 'Calculate'
function Calculate() {
    // Assigning a variable and multiplying the two values
    let totalcost = cost.value * litres.value;
    // Displaying the text in the webpage
    document.getElementById("totalcost").innerHTML = `Your total cost is ${totalcost}`;
    return false;
}
