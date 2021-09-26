const Resume = require("../models/resumeModel");
const asyncHandler = require("express-async-handler");

const getResumeDetails = asyncHandler(async (req, res) => {
  const resumeDetails = await Resume.find({ user: req.user._id });
  res.json(resumeDetails);
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
    resume[0].personalInfo = personalInfo;
    resume[0].educationInfo = educationInfo;
    resume[0].experienceInfo = experienceInfo;
    resume[0].projectsInfo = projectsInfo;
    resume[0].skillsInfo = skillsInfo;
    resume[0].toolsAndTechInfo = toolsAndTechInfo;
    resume[0].achievementsInfo = achievementsInfo;

    const updatedResume = await resume[0].save();
    res.json(updatedResume);
  }
});

module.exports = {
  getResumeDetails,
  saveReumeDetails,
};
