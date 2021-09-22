const Resume = require("../models/resumeModel");
const asyncHandler = require("express-async-handler");

const getResumeDetails = asyncHandler(async (req, res) => {
  const notes = await Resume.find({ user: req.user._id });
  res.json(notes);
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Resume.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(400).json({ message: "Not not found" });
  }
});

const saveReumeDetails = asyncHandler(async (req, res) => {
  const {
    personalInfo,
    educationInfo,
    experienceInfo,
    projectsInfo,
    skillsInfo,
    toolsAndTechInfo,
    achievementsInfo,
  } = req.body;

  const resume = await Resume.find({ user: req.user._id.toString() });
  if (resume.length === 0) {
    const createResume = new Resume({
      user: req.user._id,
      personalInfo: personalInfo,
      experienceInfo: experienceInfo,
      educationInfo: educationInfo,
      projectsInfo: projectsInfo,
      skillsInfo: skillsInfo,
      toolsAndTechInfo: toolsAndTechInfo,
      achievementsInfo: achievementsInfo,
    });
    const createdResume = await createResume.save();
    res.json(createdResume);
  } else {
    console.log(resume[0]);
    // resume.personalInfo = personalInfo;
    resume[0].experienceInfo = experienceInfo;

    const updatedResume = await resume.save();
    res.json(updatedResume);
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  const note = await Resume.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    throw new Error("You cannot permorm this action");
  }
  if (note) {
    await note.remove();
    res.json({ msg: "Resume removed" });
  } else {
    throw new Error("Resume not found");
  }
});

const shareNote = asyncHandler(async (req, res) => {
  const { noteId, userIds } = req.body;
  const note = await Resume.findById(noteId);
  if (note.user.toString() !== req.user._id.toString()) {
    throw new Error("You cannot permorm this action");
  }

  let users = userIds.map((user) => {
    return {
      id: user,
    };
  });

  if (note) {
    note.sharedUserId = userIds;

    const sharedNote = await note.save();
    res.json(sharedNote);
  } else {
    throw new Error("Resume not found");
  }
});

const getSharedNotes = asyncHandler(async (req, res) => {
  const notes = await Resume.find({ sharedUserId: req.user._id });

  res.json(notes);
});

module.exports = {
  getResumeDetails,
  getNoteById,
  saveReumeDetails,
  deleteNote,
  shareNote,
  getSharedNotes,
};
