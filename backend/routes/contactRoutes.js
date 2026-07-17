const express = require("express");
const router = express.Router();

const {
  sendContactEmail,
} = require("../controllers/contactcontroller");

// POST /api/contact
router.post("/", sendContactEmail);

module.exports = router;