var CryptoJS = require("crypto-js");
import SAdmin from "../../src/models/SAdmin";
import { connectDB } from "../../src/middleware/connectDB";
import User from "../../src/models/User";
import Admin from "../../src/models/Admin";
var jwt = require("jsonwebtoken");

const handler = async function (req, res) {
  try {
    if (req.method === "POST") {
      const body = JSON.parse(req.body);
      // Fetching the Credentials
      let u =
        (await SAdmin.findOne({ email: body.email })) ||
        (await Admin.findOne({ email: body.email })) ||
        (await User.findOne({ email: body.email }));
      var bytes = CryptoJS.AES.decrypt(u.password, "p2pclouds");
      let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

      // SAdmin Check
      if (
        body.isSAdmin &&
        u.email === body.email &&
        decryptedPass == body.password
      ) {
        var token = jwt.sign({ email: body.email }, "p2pclouds", {
          expiresIn: "1h",
        }); //Token Expires in 1 hours
        res.status(200).json({ success: true, token });
      } else if (  //// Admin Check
        body.isAdmin &&
        u.email === body.email &&
        decryptedPass == body.password
      ) {
        var token = jwt.sign({ email: body.email }, "p2pclouds", {
          expiresIn: "1h",
        }); //Token Expires in 1 hours
        res.status(200).json({ success: true, token });
      } else if ( // User Check
        body.isUser &&
        u.email === body.email &&
        decryptedPass == body.password
      ) {
        var token = jwt.sign({ email: body.email }, "p2pclouds", {
          expiresIn: "1h",
        }); //Token Expires in 1 hours
        res.status(200).json({ success: true, token });
      } else {
        res.status(400).json({ success: false });
      }
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Something Went Wrong" });
  }
};

export default connectDB(handler);
