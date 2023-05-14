import React, { useState, useEffect, forwardRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getResumeDetails } from "../../../actions/resumeActions";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import ResumeTemplate from "./ResumeTemplate/ResumeTemplate";
import "./ResumePage.scss";

const ResumePage = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const resumeDetails = useSelector(
    (state) => state.resumeDetails.allResumeDetails
  );

  const viewTemplate = useSelector((state) => state.viewTemplate.viewTemplate);
  const fillDetails = useSelector((state) => state.viewTemplate.fillDetails);

  const [personalInfoValues, setPersonalInfoValues] = useState([
    {
      fullName: "",
      resumeHeadline: "",
      address: "",
      city: "",
      contact: "",
      email: "",
    },
  ]);

  const [experienceValues, setExperienceValues] = useState([
    {
      companyName: "",
      location: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [educationValues, setEducationValues] = useState([
    {
      universityName: "",
      collegeLocation: "",
      degree: "",
      startYear: "",
      endYear: "",
      cgpa: "",
    },
  ]);

  const [projectValues, setProjectValues] = useState([
    {
      projectName: "",
      supervisor: "",
      projectDescription: "",
    },
  ]);

  const [skills, setSkills] = useState("");
  const [toolsAndTech, setToolsAndTech] = useState("");
  const [achievements, setAchievements] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const width = window.innerWidth;

  const history = useHistory;

  useEffect(() => {
    dispatch(getResumeDetails());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    // successCreate,
    history,
    userInfo,
    // successUpdate,
    // successDelete,
  ]);

  useEffect(() => {
    if (resumeDetails && resumeDetails.length > 0) {
      const {
        personalInfo,
        educationInfo,
        experienceInfo,
        projectsInfo,
        skillsInfo,
        toolsAndTechInfo,
        achievementsInfo,
      } = resumeDetails[0];
      setPersonalInfoValues(personalInfo);
      setEducationValues(educationInfo);
      setExperienceValues(experienceInfo);
      setProjectValues(projectsInfo);
      setSkills(skillsInfo);
      setToolsAndTech(toolsAndTechInfo);
      setAchievements(achievementsInfo);
    }
  }, [resumeDetails]);

  return (
    <div className="main-container">
      {width > 420 ? (
        <>
          <LeftSidebar
            personalInfoValues={personalInfoValues}
            setPersonalInfoValues={setPersonalInfoValues}
            educationValues={educationValues}
            setEducationValues={setEducationValues}
            experienceValues={experienceValues}
            setExperienceValues={setExperienceValues}
            projectValues={projectValues}
            setProjectValues={setProjectValues}
            skills={skills}
            setSkills={setSkills}
            toolsAndTech={toolsAndTech}
            setToolsAndTech={setToolsAndTech}
            achievements={achievements}
            setAchievements={setAchievements}
            ref={ref}
          />

          <ResumeTemplate
            personalInfoValues={personalInfoValues}
            setPersonalInfoValues={setPersonalInfoValues}
            educationValues={educationValues}
            experienceValues={experienceValues}
            projectValues={projectValues}
            skills={skills}
            toolsAndTech={toolsAndTech}
            achievements={achievements}
          />
        </>
      ) : (
        <>
          {fillDetails ? (
            <LeftSidebar
              personalInfoValues={personalInfoValues}
              setPersonalInfoValues={setPersonalInfoValues}
              educationValues={educationValues}
              setEducationValues={setEducationValues}
              experienceValues={experienceValues}
              setExperienceValues={setExperienceValues}
              projectValues={projectValues}
              setProjectValues={setProjectValues}
              skills={skills}
              setSkills={setSkills}
              toolsAndTech={toolsAndTech}
              setToolsAndTech={setToolsAndTech}
              achievements={achievements}
              setAchievements={setAchievements}
              ref={ref}
            />
          ) : (
            <ResumeTemplate
              personalInfoValues={personalInfoValues}
              setPersonalInfoValues={setPersonalInfoValues}
              educationValues={educationValues}
              experienceValues={experienceValues}
              projectValues={projectValues}
              skills={skills}
              toolsAndTech={toolsAndTech}
              achievements={achievements}
            />
          )}
        </>
      )}
    </div>
  );
});

export default ResumePage;
