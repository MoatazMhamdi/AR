# Guide Line Web Services Test 
  
  ### FIRST 📥 :
 Clone the project then Open it in your IDE 
  ### SECOND 🔗 :  
  open terminal and pass ' npm install ' 
  ### THIRD🔗 :  
  pass command line ( node Server.js )
  ### FOURTH🔗 :  
  open Postman then test your EndPoints for BLOGS and User 

#Postman test Scripts and EndPoints : 

   ### USERS

  📍REGISTER :

  METHOD : POST
      
      http://localhost:9090/register
      {
          "username": "exemple",
          "email": "exemple@gmail.com",
          "numTel": "12345678",
          "password": "password123"
      }

   

   📍LOGIN :

  METHOD : POST
      
      http://localhost:9090/login

  Script

      {
        "numTel": "12345678",
        "password": "password123"
      }

     

   📍FORGERT PASSWORD :

  METHOD : POST
      
      http://localhost:9090/forgetPassword
  Script

      {
        "numTel": "12345678",
      }

      
  📍Verify OTP :

  METHOD : POST
      
      http://localhost:9090/verifyOTP
  Script

      {
        "numTel": "12345678",
        "otp": ""
      }

 📍RESET PASSWORD :

  METHOD : POST
      
      http://localhost:9090/resetPassword
  Script

      {
        "numTel": "12345678",
        "newPassword": "password123"
      }

  ### USERS
 📍POST :

  METHOD : POST
      
      http://localhost:9090/blog/
  Script


        {
          "Title": "exempleT",
          "Description": "Des",
          "image": "image.png",
          "Sujet": "webservice"
         }

    
      
 📍GET :

  METHOD : GET
      
      http://localhost:9090/blog/All
 
      
 📍PATCH :

  METHOD : PATCH
      
      http://localhost:9090/blog/updateBlog/id
  Script

      
        {
          "Title": "new",
          "Description": "new",
          "image": "new.png",
          "Sujet": "newwebservice"
         }
      
      
 📍DELETE :

  METHOD : DELETE
      
      http://localhost:9090/resetPassword
 
      
