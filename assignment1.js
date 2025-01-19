/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Andrienne Reid 
*  Student ID: 164798233 
*  Date: January 18, 2025
*
********************************************************************************/ 
function getRandomInt(max) {
    let maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (max + 1)); // The maximum is exclusive and the minimum is inclusive
  }

//Step 3
let serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
let serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
let serverResponses = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Andrienne Reid", "Student Name: Andrienne Reid, Student Email: anreid3@myseneca.ca", "User Logged In", "Main Panel", "Logout Complete"];

//Step 4
function httpRequest(httpVerb, path) { 
    for (let i = 0; i < serverVerbs.length; i++) { 
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) { 
            return `200: ${serverResponses[i]}`; // Return the matching response with status code 200  
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

//Step 5
console.log(httpRequest("GET", "/"));
console.log(httpRequest("GET", "/about"));
console.log(httpRequest("GET", "/contact"));
console.log(httpRequest("POST", "/login"));
console.log(httpRequest("GET", "/panel"));
console.log(httpRequest("POST", "/logout"));

console.log(httpRequest("POST", "/"));

let testVerbs = ["GET", "POST"];
let testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];


function automateTests() {
    function randomRequest() {
        let randVerb = testVerbs[getRandomInt(testVerbs.length - 1)];
        let randPath = testPaths[getRandomInt(testPaths.length - 1)];
        
        
        let result = httpRequest(randVerb, randPath);
        console.log(result);
    }

    setInterval(randomRequest, 1000);
}

automateTests();


