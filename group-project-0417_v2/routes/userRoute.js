// routes/users.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const User = require("../models/user");

// Set up multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 1_000_000 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  },
}).single("image");

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = req.query.name
      ? await User.find({ name: req.query.name })
      : await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Sign up
router.post("/", upload, async (req, res) => {
  try {
    const { name, password, email, gender, phoneNumber } = req.body;

    if (await User.findOne({ name }))
      return res.status(400).json({ message: "duplicated name field" });
    if (await User.findOne({ email }))
      return res.status(400).json({ message: "duplicated email field" });

    const user = new User({
      name,
      password,
      email,
      gender,
      phoneNumber,
      avatar: req.file
        ? {
            data: req.file.buffer,
            contentType: req.file.mimetype,
            filename: req.file.originalname,
          }
        : undefined,
    });

    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// POST: Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ name: username });
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid username or password");
    }

    res.redirect(`/home.html?uid=${encodeURIComponent(user._id)}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// POST: Get current logged-in user info
router.post("/info", async (req, res) => {
  try {
    const userId = req.session.userId;
    if (!userId) return res.status(401).send("Not logged in");

    const user = await User.findById(userId);
    if (!user) return res.status(404).send("User not found");

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// POST: Logout
router.post("/logout", (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
});

// GET: Get avatar by userId
router.get("/avatar/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user || !user.avatar || !user.avatar.data) {
      return res.status(404).send("Avatar not found");
    }

    res.set("Content-Type", user.avatar.contentType);
    res.send(user.avatar.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch avatar");
  }
});

// GET: Get user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT: Update user by ID
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    const updated = await user.save();
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Delete user by ID
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user)
      return res
        .status(404)
        .json({ message: `User ${req.params.id} not found.` });

    res.json({ message: `User ${req.params.id} deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
