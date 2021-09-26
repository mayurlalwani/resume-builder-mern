const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
    personalInfo: [
      {
        fullName: { type: String, required: true },
        resumeHeadline: { type: String, required: false },
        email: { type: String, required: false },
        address: { type: String, required: false },
        city: { type: String, required: false },
        contact: { type: Number, required: false },
      },
    ],
    educationInfo: [
      {
        universityName: { type: String, required: false },
        collegeLocation: { type: String, required: false },
        degree: { type: String, required: false },
        startYear: { type: String, required: false },
        endYear: { type: String, required: false },
        cgpa: { type: String, required: false },
      },
    ],
    experienceInfo: [
      {
        companyName: { type: String, required: false },
        location: { type: String, required: false },
        jobTitle: { type: String, required: false },
        startDate: { type: String, required: false },
        endDate: { type: String, required: false },
        description: { type: String, required: false },
      },
    ],
    projectsInfo: [
      {
        projectName: { type: String, required: false },
        supervisor: { type: String, required: false },
        projectDescription: { type: String, required: false },
      },
    ],
    skillsInfo: { type: String, required: false },
    toolsAndTechInfo: { type: String, required: false },
    achievementsInfo: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);
module.exports = Resume;
