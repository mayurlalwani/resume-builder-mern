import React, { useState } from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { saveResumeAction } from "../../../../actions/resumeActions";
import {
  personalInfoLabels,
  experienceInfoLabels,
  educationInfoLabels,
  projectsInfoLabels,
} from "../../../constants";

const { Panel } = Collapse;

const LeftSidebar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const resumeDetails = useSelector((state) => state.resumeDetails);

  const [personalInfoDetails, setPersonalInfoDetails] = useState({});

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

  const [addNewPanel, setAddNewPanel] = useState(false);

  const [expDetails, setExpDetails] = useState([]);

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(
      saveResumeAction({
        personalInfo: personalInfoDetails,
        experienceInfo: experienceValues,
        educationInfo: educationValues,
        projectsInfo: projectValues,
      })
    );
  };

  const handleChange = (e) => {
    setPersonalInfoDetails({
      ...personalInfoDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeExperienceValues = (e, index) => {
    const { name, value } = e.target;
    const list = [...experienceValues];
    list[index][name] = value;
    setExperienceValues(list);
  };

  const handleChangeEducationValues = (e, index) => {
    const { name, value } = e.target;
    const list = [...educationValues];
    list[index][name] = value;
    setEducationValues(list);
  };

  const handleChangeProjectValues = (e, index) => {
    const { name, value } = e.target;
    const list = [...projectValues];
    list[index][name] = value;
    setProjectValues(list);
  };

  const handleChangeSkills = (e) => {
    setSkills(e.target.value);
  };

  const handleChangeTools = (e) => {
    setToolsAndTech(e.target.value);
  };

  const handleChangeAwards = (e) => {
    setAchievements(e.target.value);
  };

  function callback(key) {
    console.log(key);
  }

  const handleAddExperiencePanel = () => {
    setAddNewPanel(true);
    let values = [...experienceValues];
    values.push([]);
    setExperienceValues(values);
  };

  const handleAddEducationPanel = () => {
    setAddNewPanel(true);
    let values = [...educationValues];
    values.push([]);
    setEducationValues(values);
  };

  const handleAddProjectPanel = () => {
    setAddNewPanel(true);
    let values = [...projectValues];
    values.push([]);
    setProjectValues(values);
  };

  return (
    <div className="left-sidebar-container">
      <Collapse
        // defaultActiveKey={["1"]}
        onChange={callback}
        className="resume-heading-section"
      >
        <Panel header="Personal Info" key="1">
          {personalInfoLabels.map((personalInfo) => (
            <TextField
              id="standard-multiline-flexible-1"
              label={personalInfo.label}
              placeholder={personalInfo.placeholder}
              onChange={handleChange}
              className="input-value"
              name={personalInfo.name}
              autoComplete={false}
            />
          ))}
        </Panel>

        <Panel header="Experience" key="2">
          {experienceValues.map((experienceInfo, index) => (
            <Collapse onChange={callback} className="resume-heading-section">
              <Panel header={`Experience #${index + 1}`} key={index}>
                <TextField
                  label={experienceInfoLabels[0].label}
                  placeholder={experienceInfoLabels[0].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[0].id}
                  name={experienceInfoLabels[0].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  label={experienceInfoLabels[1].label}
                  placeholder={experienceInfoLabels[1].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[1].id}
                  name={experienceInfoLabels[1].name}
                  autoComplete={false}
                  className="input-value"
                />

                <TextField
                  label={experienceInfoLabels[2].label}
                  placeholder={experienceInfoLabels[2].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[2].id}
                  name={experienceInfoLabels[2].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  label={experienceInfoLabels[3].label}
                  placeholder={experienceInfoLabels[3].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[3].id}
                  name={experienceInfoLabels[3].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  label={experienceInfoLabels[4].label}
                  placeholder={experienceInfoLabels[4].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[4].id}
                  name={experienceInfoLabels[4].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  label={experienceInfoLabels[5].label}
                  placeholder={experienceInfoLabels[5].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[5].id}
                  name={experienceInfoLabels[5].name}
                  autoComplete={false}
                  className="input-value"
                />
              </Panel>
            </Collapse>
          ))}
          <Button
            type="primary"
            className="add-button"
            onClick={handleAddExperiencePanel}
          >
            Add
          </Button>
        </Panel>

        <Panel header="Education" key="3">
          {experienceValues.map((experienceInfo, index) => (
            <Collapse onChange={callback} className="resume-heading-section">
              <Panel header={`Education #${index + 1}`} key={index}>
                <TextField
                  label={educationInfoLabels[0].label}
                  placeholder={educationInfoLabels[0].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[0].id}
                  name={educationInfoLabels[0].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  label={educationInfoLabels[1].label}
                  placeholder={educationInfoLabels[1].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[1].id}
                  name={educationInfoLabels[1].name}
                  autoComplete={false}
                  className="input-value"
                />

                <TextField
                  label={educationInfoLabels[2].label}
                  placeholder={educationInfoLabels[2].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[2].id}
                  name={educationInfoLabels[2].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  label={educationInfoLabels[3].label}
                  placeholder={educationInfoLabels[3].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[3].id}
                  name={educationInfoLabels[3].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  label={educationInfoLabels[4].label}
                  placeholder={educationInfoLabels[4].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[4].id}
                  name={educationInfoLabels[4].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  label={educationInfoLabels[5].label}
                  placeholder={educationInfoLabels[5].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[5].id}
                  name={educationInfoLabels[5].name}
                  autoComplete={false}
                  className="input-value"
                />
              </Panel>
            </Collapse>
          ))}
          <Button
            type="primary"
            className="add-button"
            onClick={handleAddExperiencePanel}
          >
            Add
          </Button>
        </Panel>

        <Panel header="Projects" key="4">
          {experienceValues.map((experienceInfo, index) => (
            <Collapse onChange={callback} className="resume-heading-section">
              <Panel header={`Project #${index + 1}`} key={index}>
                <TextField
                  label={projectsInfoLabels[0].label}
                  placeholder={projectsInfoLabels[0].placeholder}
                  onChange={(e) => handleChangeProjectValues(e, index)}
                  key={projectsInfoLabels[0].id}
                  name={projectsInfoLabels[0].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  label={projectsInfoLabels[1].label}
                  placeholder={projectsInfoLabels[1].placeholder}
                  onChange={(e) => handleChangeProjectValues(e, index)}
                  key={projectsInfoLabels[1].id}
                  name={projectsInfoLabels[1].name}
                  autoComplete={false}
                  className="input-value"
                />

                <TextField
                  label={projectsInfoLabels[2].label}
                  placeholder={projectsInfoLabels[2].placeholder}
                  onChange={(e) => handleChangeProjectValues(e, index)}
                  key={projectsInfoLabels[2].id}
                  name={projectsInfoLabels[2].name}
                  autoComplete={false}
                  className="input-value"
                />
              </Panel>
            </Collapse>
          ))}
          <Button
            type="primary"
            className="add-button"
            onClick={handleAddExperiencePanel}
          >
            Add
          </Button>
        </Panel>

        <Panel header="Skills" key="5">
          <TextField
            label="Skills"
            placeholder="Skills"
            onChange={(e) => handleChangeSkills(e)}
            key={1}
            name="skills"
            autoComplete={false}
            className="input-value"
          />
        </Panel>
        <Panel header="Tools and Technologies" key="6">
          <TextField
            label="Tools and Technologies"
            placeholder="Tools and Technologies"
            onChange={(e) => handleChangeTools(e)}
            key={1}
            name="toolsAndTechnologies"
            autoComplete={false}
            className="input-value"
          />
        </Panel>
        <Panel header="Awards and Achievemnts" key="6">
          <TextField
            label="Awards and Achievemnts"
            placeholder="Awards and Achievemnts"
            onChange={(e) => handleChangeAwards(e)}
            key={1}
            name="achievements"
            autoComplete={false}
            className="input-value"
          />
        </Panel>
      </Collapse>
      <Button type="primary" className="save-button" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default LeftSidebar;
