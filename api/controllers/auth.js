import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM User WHERE email = ? OR username = ?";
  console.log(3)
  db.query(q, [req.body.email, req.body.username, req.body.phonenumber], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO User(`username`,`email`,`password`,`phonenumber`) VALUES (?,?,?,?)";
    const values = [req.body.username, req.body.email, req.body.password, req.body.phonenumber];
    console.log(values)
    db.query(q, values, (err, data) => {
      console.log(err)
      if (err) return res.status(500).json(err);
      console.log(5)
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  //CHECK USER
  const q = "SELECT * FROM User WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    console.log(19)
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    console.log(data)

    //Check password
    let isPasswordCorrect;
    console.log("req.body.password " + req.body.password)
    console.log("data[0].PASSWORD " + data[0].PASSWORD)

    isPasswordCorrect = req.body.password == data[0].PASSWORD;

    // const isPasswordCorrect = bcrypt.compareSync(
    //   req.body.password,
    //   data[0].PASSWORD
    // );
    if (!isPasswordCorrect )
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].USERID }, "jwtkey");
    const { password, ...others } = data[0];

    console.log(token);
    res
        .cookie("access_Token", token, {httpOnly: true})
        .status(200)
        .json(others);
  });
};

export const logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")
};
