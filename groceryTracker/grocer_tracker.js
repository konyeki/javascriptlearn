let grocer_1; 
let grocer_2;
let grocer_3; 

function computeTotalAmount(){
    grocer_1 = parseFloat(document.getElementById("grocery_1").value);
    grocer_2 = parseFloat(document.getElementById("grocery_2").value);
    grocer_3 = parseFloat(document.getElementById('grocery_3').value);

    let totalAmount = grocer_1 + grocer_2 + grocer_3;

    document.getElementById("result").innerText = `The total amount for the grocery is: ${totalAmount}`;
}