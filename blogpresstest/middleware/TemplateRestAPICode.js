// This code sniplets are for making a Get Rest API call 
 const myGetRestCall = require("../middleware/GetRestAPI"); //to top of Route where you wan tto make the Get All Add:


 // this in your route 
 const url = 'https://blogpress.api.hscc.bdpa.org/v1/info' //- where the URL is whatever Get RestAPI Request  you are calling
 const token = process.env.BEARER_TOKEN;

  //########################################## 
 //This function will take the two variables and pass them to the Get RestAPI call 
  myGetRestCall.getWithBearerToken(url, token)
.then(data => console.log("REST CALL ", data))
.catch(error => console.error(error));

//##############################################

// This code sniplets are for making a Post Rest API call 

// this in your route, add all below to the route.  
const myPostRestCall = require('../middleware/PostRestAPI');
const url = 'https://blogpress.api.hscc.bdpa.org/v1/blogs/some-blog/pages';   // Example Post URL, change for the endpoint you are using. 
const token = process.env.BEARER_TOKEN;
const body = req.body;  // this is the json body from the EJS post function

 //########################################## 
 //This function will take the two variables and pass them to the Post RestAPI call 
myPostRestCall.postWithBearerToken(url, token, data)
  .then(data => console.log(data))
  .catch(error => console.error(error));


  // This code sniplets are for making a Post Rest API call 

// this in your route, add all below to the route.  
const myPatchRestCall = require('../middleware/PatchRestAPI');
const url = 'https://blogpress.api.hscc.bdpa.org/v1/blogs/some-blog/pages';   // Example Post URL, change for the endpoint you are using. 
const token = process.env.BEARER_TOKEN;
const body = req.body;  // this is the json body from the EJS post function

 //########################################## 
 //This function will take the two variables and pass them to the Patch RestAPI call 
myPatchRestCall.postWithBearerToken(url, token, data)
  .then(data => console.log(data))
  .catch(error => console.error(error));
//################################################################
 
// This code sniplets are for making a Delete Rest API call 
const myGetRestCall = require("../middleware/DeleteRestAPI"); //to top of Route where you wan tto make the Get All Add:


// this in your route 
const url = 'https://blogpress.api.hscc.bdpa.org/v1/info' //- where the URL is whatever Get RestAPI Request  you are calling
const token = process.env.BEARER_TOKEN;

 //########################################## 
//This function will take the two variables and pass them to the Get RestAPI call 
 myGetRestCall.getWithBearerToken(url, token)
.then(data => console.log("REST CALL ", data))
.catch(error => console.error(error));


