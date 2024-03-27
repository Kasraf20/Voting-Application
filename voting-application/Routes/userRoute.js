const express = require("express");
const router = express.Router();

const User = require("../models/User");
const { jwtAuthMiddleware, generateToken } = require("../jwt");

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    res.send("can not getting user data", err);
  }
});

//For Registration

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const userRole = data.role
    if (userRole === 'admin'){
      const foundAdmin = await User.find({role:'admin'})
      if(foundAdmin.length > 0){
        return res.json({err: 'admin already exists.'})
      }
    }
    
    const newUser = new User(data);
    const savePerson = await newUser.save();
    const payload = {
      id: savePerson.id,
    };
    const token = generateToken(payload);
    res.json({ user: savePerson, token: token });
  } catch (err) {
    res.json({err: err});
  }
});

//for login
router.post("/login", async (req, res) => {
  try {
    const { aadharNumber, password } = req.body;
    const userFound = await User.find({
      aadharNumber: aadharNumber,
      password: password,
    });
    if (userFound.length === 0) {
      return res.json({err:'err'});
    } else {
        const payload = {
        id: userFound[0].id,
      };
      const token = generateToken(payload);
      res.json({ "user": userFound, "token": token });
    }
  } catch (err) {
    res.send("from catch block wrong aadhar and password");
  }
});

//get single userr

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = await User.findById(userId);
    if(userData) res.json(userData);
    
  } catch (err) {
    res.json("user not found", err);
  }
});

//update user

router.put("/:id", jwtAuthMiddleware, async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body;

    const updateData = await User.findByIdAndUpdate(id,data, {
      new: true,
    })
    res.json(updateData);
  } catch (err) {
    res.send("can not update the data", err);
  }
});

//delete user

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(id);
    res.json({ userDelete: deleteUser, message: "user deleted successfully." });
  } catch (err) {
    res.send("can not delete user", err);
  }
});

module.exports = router;
