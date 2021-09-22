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

const LeftSidebar = ({
  personalInfoValues,
  setPersonalInfoValues,
  educationValues,
  setEducationValues,
  experienceValues,
  setExperienceValues,
  projectValues,
  setProjectValues,
  skills,
  setSkills,
  toolsAndTech,
  setToolsAndTech,
  achievements,
  setAchievements,
}) => {
  const userLogin = useSelector((state) => state.userLogin);
  const [activeKey, setActiveKey] = useState([]);
  const { userInfo } = userLogin;

  const [addNewPanel, setAddNewPanel] = useState(false);

  const [expDetails, setExpDetails] = useState([]);

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(
      saveResumeAction({
        personalInfo: personalInfoValues,
        experienceInfo: experienceValues,
        educationInfo: educationValues,
        projectsInfo: projectValues,
        skillsInfo: skills,
        toolsAndTechInfo: toolsAndTech,
        achievementsInfo: achievements,
      })
    );
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...personalInfoValues];
    list[index][name] = value;
    setPersonalInfoValues(list);
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
    console.log({ key });
    setActiveKey(key);
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
        defaultActiveKey={["1"]}
        onChange={callback}
        className="resume-heading-section"
        accordion
      >
        <Panel header="Personal Info" key="1">
          {personalInfoValues.map((data, index) => (
            <div key={index}>
              <TextField
                id="standard-multiline-flexible-1"
                label={personalInfoLabels[0].label}
                placeholder={personalInfoLabels[0].placeholder}
                onChange={(e) => handleChange(e, index)}
                className="input-value"
                name={personalInfoLabels[0].name}
                autoComplete={false}
                value={data.fullName}
              />
              <TextField
                id="standard-multiline-flexible-1"
                label={personalInfoLabels[1].label}
                placeholder={personalInfoLabels[1].placeholder}
                onChange={(e) => handleChange(e, index)}
                className="input-value"
                name={personalInfoLabels[1].name}
                autoComplete={false}
                value={data.resumeHeadline}
              />
              <TextField
                id="standard-multiline-flexible-1"
                label={personalInfoLabels[2].label}
                placeholder={personalInfoLabels[2].placeholder}
                onChange={(e) => handleChange(e, index)}
                className="input-value"
                name={personalInfoLabels[2].name}
                autoComplete={false}
                value={data.address}
              />
              <TextField
                id="standard-multiline-flexible-1"
                label={personalInfoLabels[3].label}
                placeholder={personalInfoLabels[3].placeholder}
                onChange={(e) => handleChange(e, index)}
                className="input-value"
                name={personalInfoLabels[3].name}
                autoComplete={false}
                value={data.city}
              />
              <TextField
                id="standard-multiline-flexible-1"
                label={personalInfoLabels[4].label}
                placeholder={personalInfoLabels[4].placeholder}
                onChange={(e) => handleChange(e, index)}
                className="input-value"
                name={personalInfoLabels[4].name}
                autoComplete={false}
                value={data.contact}
              />
              <TextField
                id="standard-multiline-flexible-1"
                label={personalInfoLabels[5].label}
                placeholder={personalInfoLabels[5].placeholder}
                onChange={(e) => handleChange(e, index)}
                className="input-value"
                name={personalInfoLabels[5].name}
                autoComplete={false}
                value={data.email}
              />
            </div>
          ))}
        </Panel>

        <Panel header="Experience" key="2">
          {experienceValues.map((experienceInfo, index) => (
            <Collapse
              onChange={callback}
              className="resume-heading-section"
              accordion
            >
              <Panel header={`Experience #${index + 1}`} key={index}>
                <TextField
                  label={experienceInfoLabels[0].label}
                  placeholder={experienceInfoLabels[0].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[0].id}
                  name={experienceInfoLabels[0].name}
                  autoComplete={false}
                  className="input-value"
                  value={experienceInfo.companyName}
                />
                <TextField
                  label={experienceInfoLabels[1].label}
                  placeholder={experienceInfoLabels[1].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[1].id}
                  name={experienceInfoLabels[1].name}
                  autoComplete={false}
                  className="input-value"
                  value={experienceInfo.location}
                />

                <TextField
                  label={experienceInfoLabels[2].label}
                  placeholder={experienceInfoLabels[2].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[2].id}
                  name={experienceInfoLabels[2].name}
                  autoComplete={false}
                  className="input-value"
                  value={experienceInfo.jobTitle}
                />
                <TextField
                  label={experienceInfoLabels[3].label}
                  placeholder={experienceInfoLabels[3].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[3].id}
                  name={experienceInfoLabels[3].name}
                  autoComplete={false}
                  className="input-value"
                  value={experienceInfo.startDate}
                />
                <TextField
                  label={experienceInfoLabels[4].label}
                  placeholder={experienceInfoLabels[4].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[4].id}
                  name={experienceInfoLabels[4].name}
                  autoComplete={false}
                  className="input-value"
                  value={experienceInfo.endDate}
                />
                <TextField
                  label={experienceInfoLabels[5].label}
                  placeholder={experienceInfoLabels[5].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={experienceInfoLabels[5].id}
                  name={experienceInfoLabels[5].name}
                  autoComplete={false}
                  className="input-value"
                  value={experienceInfo.description}
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
          {educationValues.map((educationInfo, index) => (
            <Collapse
              onChange={callback}
              className="resume-heading-section"
              activeKey={activeKey}
            >
              <Panel header={`Education #${index + 1}`} key={index}>
                <TextField
                  label={educationInfoLabels[0].label}
                  placeholder={educationInfoLabels[0].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[0].id}
                  name={educationInfoLabels[0].name}
                  autoComplete={false}
                  className="input-value"
                  value={educationInfo.universityName}
                />
                <TextField
                  label={educationInfoLabels[1].label}
                  placeholder={educationInfoLabels[1].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[1].id}
                  name={educationInfoLabels[1].name}
                  autoComplete={false}
                  className="input-value"
                  value={educationInfo.collegeLocation}
                />

                <TextField
                  label={educationInfoLabels[2].label}
                  placeholder={educationInfoLabels[2].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[2].id}
                  name={educationInfoLabels[2].name}
                  autoComplete={false}
                  className="input-value"
                  value={educationInfo.degree}
                />
                <TextField
                  label={educationInfoLabels[3].label}
                  placeholder={educationInfoLabels[3].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[3].id}
                  name={educationInfoLabels[3].name}
                  autoComplete={false}
                  className="input-value"
                  value={educationInfo.startYear}
                />
                <TextField
                  label={educationInfoLabels[4].label}
                  placeholder={educationInfoLabels[4].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[4].id}
                  name={educationInfoLabels[4].name}
                  autoComplete={false}
                  className="input-value"
                  value={educationInfo.endYear}
                />
                <TextField
                  label={educationInfoLabels[5].label}
                  placeholder={educationInfoLabels[5].placeholder}
                  onChange={(e) => handleChangeEducationValues(e, index)}
                  key={educationInfoLabels[5].id}
                  name={educationInfoLabels[5].name}
                  autoComplete={false}
                  className="input-value"
                  value={educationInfo.cgpa}
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
          {projectValues.map((data, index) => (
            <Collapse
              onChange={callback}
              className="resume-heading-section"
              activeKey={activeKey}
            >
              <Panel header={`Project #${index + 1}`} key={index}>
                <TextField
                  label={projectsInfoLabels[0].label}
                  placeholder={projectsInfoLabels[0].placeholder}
                  onChange={(e) => handleChangeProjectValues(e, index)}
                  key={projectsInfoLabels[0].id}
                  name={projectsInfoLabels[0].name}
                  autoComplete={false}
                  className="input-value"
                  value={data.projectName}
                />
                <TextField
                  label={projectsInfoLabels[1].label}
                  placeholder={projectsInfoLabels[1].placeholder}
                  onChange={(e) => handleChangeProjectValues(e, index)}
                  key={projectsInfoLabels[1].id}
                  name={projectsInfoLabels[1].name}
                  autoComplete={false}
                  className="input-value"
                  value={data.supervisor}
                />

                <TextField
                  label={projectsInfoLabels[2].label}
                  placeholder={projectsInfoLabels[2].placeholder}
                  onChange={(e) => handleChangeProjectValues(e, index)}
                  key={projectsInfoLabels[2].id}
                  name={projectsInfoLabels[2].name}
                  autoComplete={false}
                  className="input-value"
                  value={data.projectDescription}
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
            value={skills}
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
            value={toolsAndTech}
          />
        </Panel>
        <Panel header="Awards and Achievemnts" key="7">
          <TextField
            label="Awards and Achievemnts"
            placeholder="Awards and Achievemnts"
            onChange={(e) => handleChangeAwards(e)}
            key={1}
            name="achievements"
            autoComplete={false}
            className="input-value"
            value={achievements}
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
