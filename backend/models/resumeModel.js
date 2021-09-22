const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    personalInfo: [
      {
        fullName: { type: String, required: true },
        resumeHeadline: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        contact: { type: Number, required: true },
      },
    ],
    educationInfo: [
      {
        universityName: { type: String, required: true },
        collegeLocation: { type: String, required: true },
        degree: { type: String, required: true },
        startYear: { type: String, required: true },
        endYear: { type: String, required: true },
        cgpa: { type: String, required: true },
      },
    ],
    experienceInfo: [
      {
        companyName: { type: String, required: true },
        location: { type: String, required: true },
        jobTitle: { type: String, required: true },
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    projectsInfo: [
      {
        projectName: { type: String, required: true },
        supervisor: { type: String, required: true },
        projectDescription: { type: String, required: true },
      },
    ],
    skillsInfo: { type: String, required: true },
    toolsAndTechInfo: { type: String, required: true },
    achievementsInfo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);
module.exports = Resume;
