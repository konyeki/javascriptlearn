function performOperation(){
    //Get user input from input field
    let num1 = parseInt( document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);

    //Check if the inputs are valid numbers 
    if(!isNaN(num1) && !isNaN(num2)){
        //Perform the operation here
        let result = multiply(num1, num2);

        //Display the result
        displayResult(result);

    } else {
        displayResult('Please enter a valid number!');
    }

    function multiply(a, b){
        return a * b;

    }

    function displayResult(result){
        //Display the result in the paragraph element
        const resultElement = document.getElementById('result');
        resultElement.textContent = `The result is: ${result}`;

    }
}