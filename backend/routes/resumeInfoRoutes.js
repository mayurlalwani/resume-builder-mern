const express = require("express");
const {
  getResumeDetails,
  getNoteById,
  saveReumeDetails,
  deleteNote,
  shareNote,
  getSharedNotes,
} = require("../controllers/resumeController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getResumeDetails);
router.route("/getSharedNotes").get(protect, getSharedNotes);
router.route("/update-resume").post(protect, saveReumeDetails);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, deleteNote)
  .put(protect, saveReumeDetails);
router.route("/share").post(protect, shareNote);
module.exports = router;
