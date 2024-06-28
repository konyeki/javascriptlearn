let userRole = "admin";
let accessLevel;

//check if the user is an admin and give access

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level: ", accessLevel);

//Nested control

let isLoggedIn = true; 
let userMessage; 

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin";
    } else {
        userMessage = "Welcome, user";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message: ", userMessage);

//user types 
let userType = "subscriber";
let userCategory; 

switch(userType){
    case "admin":
        userCategory = "Administrator"; 
        break;
    case "manager":
        userCategory = "Manager";
        break; 
    case "subscriber":
        userCategory = "Subscriber";
        break; 
    default: 
        userCategory = "Unknown";
}

console.log("User category: ", userCategory);
