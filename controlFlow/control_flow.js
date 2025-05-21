let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
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
console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

let person = "Employee";

switch(person){
    case "Employee":
        useraccess = "you have access to dietary services";
        break;
    case "Enrolled Member":
        useraccess = " ypu have access to dietary services and one-on-one interaction with dietician";
        break;
    case "Subscriber":
        useraccess ="you have acess to partial access to facilitate Dietary Services only.";
        break;
    case "Non-Subscriber":
        useraccess = "they need to enroll or at least subscribe first to avail this facility.";
        break;
}
console.log(useraccess)