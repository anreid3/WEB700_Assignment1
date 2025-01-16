// Define arrays to associate server responses with specific verb + path combinations
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by [Your Name]",
    "Student Name: [Your Email]",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

// Function to simulate the web server response
function webServerSimulator(verb, path) {
    for (let i = 0; i < serverVerbs.length; i++) {
        if (serverVerbs[i] === verb && serverPaths[i] === path) {
            return serverResponses[i];
        }
    }
    return "404 Not Found"; // Default response for unmatched routes
}

// Example usage
console.log(webServerSimulator("GET", "/"));       // Expected output: "Welcome to WEB700 Assignment 1"
console.log(webServerSimulator("POST", "/login")); // Expected output: "User Logged In"
console.log(webServerSimulator("GET", "/unknown")); // Expected output: "404 Not Found"
