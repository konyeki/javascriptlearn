let count = 0; 

//create a function to display the counter

function displayCount(){
    document.getElementById("countDisplay").innerHTML=count;
}

//creat a function to increase the counter
function increaseCount(){
    count++; //increment counter by 1
    displayCount();
    checkCountValue();
    resetCount();
}

//Function to check the value of the count and trigger alerts
function checkCountValue(){
    if(count === 10){
        alert("Your instagram post gained 10 followers! Congratulations!");        
    }else if (count === 20){
        alert("Your instagram post gained 20 followers! Keep it up!");
    }
}

//function to reset the count
function resetCount(){
    resetButton.addEventListener('click', resetForm);   
    
}

