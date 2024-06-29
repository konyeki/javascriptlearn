let length; 
let width; 

//Create a function that calculate area as onclick

function calculateArea(){
    //Fetch values from user as input
    //convert the string to float number 
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;

    document.getElementById('result').innerText = 'The area of the rectangle is: ${area}';
}