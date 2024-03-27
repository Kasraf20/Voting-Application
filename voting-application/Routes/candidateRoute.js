const express = require("express");
const router = express.Router();

const Candidate = require("../models/Candidate");
const User = require("../models/User");
const { jwtAuthMiddleware, generateToken } = require("../jwt");

router.get("/", async (req, res) => {
  try {
    const data = await Candidate.find();
    res.json(data);
  } catch (err) {
    res.json({ err: "internal server error" });
  }
});

const checkAdmin = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user.role === "admin";
  } catch (err) {
    return false;
  }
};

//Add new Candidate

router.post("/", jwtAuthMiddleware, async (req, res) => {
  try {
    if (!(await checkAdmin(req.user.id))) {
      return res.json({ err: "user has no admin role" });
    }
    const data = req.body;
    const newUser = new Candidate(data);
    const saveCandidate = await newUser.save();

    res.json({ candidate: saveCandidate });
  } catch (err) {
    res.json({ err: err });
  }
});

//Update Candidate

router.put("/:candidateId", jwtAuthMiddleware, async (req, res) => {
  try {
    if (!(await checkAdmin(req.user.id))) {
      return res.json({ err: "user has no admin role" });
    }
    const candidateId = req.params.candidateId;
    const updatedData = req.body;
    const candidateData = await Candidate.findByIdAndUpdate(
      candidateId,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    res.json(candidateData);
  } catch (err) {
    res.json({ err: "can not update a candidate" });
  }
});

//Delete Candidate

router.delete("/:id", jwtAuthMiddleware, async (req, res) => {
  try {
    if (!(await checkAdmin(req.user.id))) {
      return res.json({ err: "user has no admin role" });
    }
    const id = req.params.id;
    const deleteUser = await Candidate.findByIdAndDelete(id);
    res.json({ userDelete: deleteUser, message: "user deleted successfully." });
  } catch (err) {
    res.json({ err: "internal server error" });
  }
});

//vote candidate
router.post("/vote/:candidateId", jwtAuthMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);
  const candidateId = req.params.candidateId;
  const candidate = await Candidate.findById(candidateId);
  try {
    if (user.isVoted) {
      return res.json({ message: "voted" });
    }

    candidate.votes.push({ user: user.id });
    candidate.voteCount++;
    await candidate.save();

    //user data updated
    user.isVoted = true;
    await user.save();

    res.json({ message: "vote recorded successfully" });
  } catch (err) {
    res.json({ err: "internal server error" });
  }
});

//vote count
router.get("/vote/count", async (req, res) => {
  try {
    const candidate = await Candidate.find().sort({ voteCount: "desc" });
    const candidateCount = candidate.map((data) => {
      return {
        party: data.partyName,
        count: data.voteCount,
      };
    });

    res.json(candidateCount);
  } catch (err) {
    res.json({ err: "internal server error" });
  }
});

module.exports = router;
