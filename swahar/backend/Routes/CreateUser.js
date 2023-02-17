const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const jwtsecret = "helloEveryoneThisismyFirstCompleteMernProject"
router.post(
  "/createuser",
  body("email").isEmail(),
  body("password", "incorrect password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

     const salt = await bcrypt.genSalt(10);
     let setPassword = await bcrypt.hash( req.body.password, salt)
    try {
      User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: setPassword,
        conpassword: req.body.conpassword,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  body("email").isEmail(),
  body("password", "incorrect password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let user = await User.findOne({ email });
      console.log(user);
            if (!user) {
        return res.status(400).json({ errors: "enter valid credentials" });
      }
      const pwdCompare = await bcrypt.compare(req.body.password,user.password)
      if (!pwdCompare) {
        return res.status(400).json({ errors: "incorrect password" });
      }
      const data = {
        users:{
          id:user.id
        }
      }
      const authToken = jwt.sign(data,jwtsecret)
      return res.json({ success: true ,authToken:authToken});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
