const express = require('express');
const router = express.Router();

    const users = require('../controllers/backendUSERSCode.js');


        router.route("/login")
        .post(users.login);

      
      router.route("/register")
      .post(users.Register);


      
      router
      .route('/forgetPassword')
      .post(users.forgetPassword)

      
module.exports = router;