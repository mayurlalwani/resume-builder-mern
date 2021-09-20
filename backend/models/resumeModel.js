const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    personalInfo: {
      fullName: { type: String, required: true },
      resumeHeadline: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      contact: { type: Number, required: true },
    },
    educationInfo: [
      {
        degree: { type: String, required: true },
        university: { type: String, required: true },
        year: { type: Number, required: true },
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
        teamSize: { type: Number, required: true },
      },
    ],
    projects: [
      {
        projectName: { type: String, required: true },
        supervisor: { type: String, required: true },
        projectStart: { type: String, required: true },
        projectEnd: { type: String, required: true },
        projectTeamSize: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);
module.exports = Resume;
