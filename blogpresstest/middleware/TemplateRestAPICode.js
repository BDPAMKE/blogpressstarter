// This code sniplets are for makeing a Get Rest API calll 
 const myGetRestCall = require("../middleware/GetRestAPI"); //to top of Route where you wan tto make the Get All Add:


 // this in you route 
 const url = 'https://blogpress.api.hscc.bdpa.org/v1/info' //- where the URL is whatever Get RestAPI Request  you are calling
 const token = process.env.BEARER_TOKEN;

  //########################################## 
 //This function will take the two variables and pass them to the Get RestAPI call 
  myGetRestCall.getWithBearerToken(url, token)
.then(data => console.log("REST CALL ", data))
.catch(error => console.error(error));

//##############################################