import { connectDB } from "../../src/middleware/connectDB";
import User from "../../src/models/User";
var CryptoJS = require("crypto-js");

const handler = async function (req, res) {
  try {
    const {email,password,username} = JSON.parse(req.body);

    // Encrypt
    var encryptedPassword = CryptoJS.AES.encrypt(
        password,
      "p2pclouds"
    ).toString();

    const newUser = new User({
      email,
      password:encryptedPassword,
      username
    });
   await newUser.save();

    res.status(200).json({ success: true, message: "Successfully Created" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Something Went Wrong" });
  }
};

export default connectDB(handler);
