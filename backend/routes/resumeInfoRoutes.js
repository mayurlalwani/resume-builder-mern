const express = require("express");
const {
  getResumeDetails,
  saveReumeDetails,
} = require("../controllers/resumeController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getResumeDetails);
router.route("/update-resume").post(protect, saveReumeDetails);

module.exports = router;
