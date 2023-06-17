var express = require('express');
var router = login.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
  });


router.post('/', async(req, res, next) => {
    console.log(JSON.stringify(req.body)); 
   
    const KEY_SIZE_BYTES = 64;
    
    const SALT_SIZE_BYTES = 16;


        const convertBufferToHex = (buffer) => {
        return (
            
            [...new Uint8Array(buffer)]
                        .map((byte) => byte.toString(16).padStart(2, '0'))
                        .join('')
        );
    };


        const convertHexToBuffer = (hexString) => {
        return Uint8Array.from(
                        hexString.match(/[0-9a-f]{1,2}/gi).map((byte) => parseInt(byte, 16))
        );
    };


        const deriveKeyFromPassword = async (passwordString, keyTest, saltBuffer) => {
                const textEncoder = new TextEncoder('utf-8');
 
               const passwordBuffer = textEncoder.encode(passwordString);
 
                // in:
        saltBuffer =
            saltBuffer ||
            crypto.getRandomValues(new Uint8Array(SALT_SIZE_BYTES));
 
        console.log("SaltBuffer:",saltBuffer);
        
        const plaintextKey = await crypto.subtle.importKey(
            'raw', 
            passwordBuffer, 
            'PBKDF2', 
            false, 
            ['deriveBits'] 
        );
       
        
        const pbkdf2Buffer = await crypto.subtle.deriveBits(
            {
                
                name: 'PBKDF2',
                
                salt: saltBuffer,
                
                iterations: 100000,
                
                hash: 'SHA-256'
            },
           
            plaintextKey,
            
            KEY_SIZE_BYTES * 8
        );
       
        const saltString = convertBufferToHex(saltBuffer);
        const keyString = convertBufferToHex(pbkdf2Buffer);
        console.log("Salt=",saltString);
        console.log("Key=",keyString);


 
        console.log("Comparison",keyString, keyTest);
            if (keyString==keyTest){
                res.render('login', {title: 'Found User', message: 'Login successful'});
            }
            else{
                res.render('login', {title: 'User Not Found', message: 'Login unsuccessful'});
            }


        return { keyString, saltString };


    };


    const fetch = require('node-fetch');
    const varHttpRequest = 'https://bdpamkedev.com/api/v5/users/'+req.body.username ; //Setting uri based on user input
    //console.log(varHttpRequest);
    fetch(varHttpRequest, {
        method: 'GET',
        headers: {
          'Authorization': '934404b0-ddf2-4595-8e2f-3790873ddf20' + global.DB_token,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(async data => {
        console.log("Message & Data ", data);
        if (data.message === 'No record found'){  //Username is not even in the system
            res.render('login', {title:'Login Unsuccessful', message: 'Invalid username or password'});
        }
        else //Username is at least in the system
        {
            var userSalt=data.salt;
            var userKey=data.key;
            var pwTest=req.body.password;
            console.log("Credentials",userSalt,userKey,pwTest);
            var userBuffer=convertHexToBuffer(userSalt);
            const {keyresult,saltresult}=await deriveKeyFromPassword(pwTest,userKey,userBuffer);
           
           
        }
       
      })
      .catch(error => { //Error in the fetch, not necessarily not finding a user
        console.error(error);
        res.render('login', { title: 'Invalid User', message: 'Invalid username or password', data: error.data });
        return "error";
      })


});



  module.exports = router;
