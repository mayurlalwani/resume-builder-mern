import React, { useState } from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import { Form } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { saveResumeAction } from "../../../../actions/resumeActions";

const { Panel } = Collapse;

const LeftSidebar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const resumeDetails = useSelector((state) => state.resumeDetails);
  const [personalInfoDetails, setPersonalInfoDetails] = useState({});
  const [educationInfoDetails, setEducationInfoDetails] = useState({});

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [expPanelClicked, setAddExperiencePanelClicked] = useState(false);
  const [addNewPanel, setAddNewPanel] = useState(false);

  const [experienceValues, setExperienceValues] = useState([
    {
      companyName: "",
      location: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      teamSize: "",
    },
  ]);
  console.log({ experienceValues });

  const [expDetails, setExpDetails] = useState([]);

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(
      saveResumeAction({
        personalInfo: personalInfoDetails,
        experienceInfo: experienceValues,
      })
    );
  };

  const handleChange = (e) => {
    setPersonalInfoDetails({
      ...personalInfoDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeEducationDetails = (e) => {
    setEducationInfoDetails({
      ...educationInfoDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeExperienceValues = (e, index) => {
    const { name, value } = e.target;
    const list = [...experienceValues];
    list[index][name] = value;
    setExperienceValues(list);
  };

  const personalInfoLabels = [
    {
      label: "Name",
      placeholder: "Full Name",
      name: "fullName",
    },
    {
      label: "Resume Headline",
      placeholder: "Resume Headline",
      name: "resumeHeadline",
    },
    {
      label: "Address Line 1",
      placeholder: "Address",
      name: "address",
    },
    {
      label: "City",
      placeholder: "City",
      name: "city",
    },
    {
      label: "Contact",
      placeholder: "Contact",
      name: "contact",
    },
    {
      label: "Email",
      placeholder: "Email",
      name: "email",
    },
  ];

  const ExperienceDetailsConfig = [
    {
      label: "Company Name",
      placeholder: "Full Name",
      name: "companyName",
    },
    {
      label: "Location",
      placeholder: "Location",
      name: "location",
    },
    {
      label: "Job Title",
      placeholder: "Job Title",
      name: "jobTitle",
    },
    {
      label: "Start Date",
      placeholder: "",
      name: "startDate",
    },
    {
      label: "End Date",
      placeholder: "End Date",
      name: "endDate",
    },
    {
      label: "Team Size",
      placeholder: "Team Size",
      name: "teamSize",
    },
  ];

  function callback(key) {
    console.log(key);
  }

  const educationLabels = [
    {
      id: 1,
      label: "College Name",
      placeholder: "College Name",
      name: "collegeName",
    },
    {
      id: 2,
      label: "Location",
      placeholder: "Location",
      name: "collegeLocation",
    },
    {
      id: 3,
      label: "Degree",
      placeholder: "Degree",
      name: "degree",
    },
    {
      id: 4,
      label: "Start Date",
      placeholder: "Start Date",
      name: "startDate",
    },
    {
      id: 5,
      label: "End Date",
      placeholder: "End Date",
      name: "endDate",
    },
  ];

  const projectsLabels = [
    {
      label: "Project Name",
      placeholder: "Project Name",
    },
    {
      label: "Description",
      placeholder: "Description",
    },
  ];
  const skillsLabels = [
    {
      label: "Programming Languages",
      placeholder: "Programming Languages",
    },
    {
      label: "Tools & Technologies",
      placeholder: "Tools & Technologies",
    },
  ];
  const awardsLabel = [
    {
      label: "Awards",
      placeholder: "Awards",
    },
  ];

  const handleAddExperiencePanel = (event, listCount) => {
    setAddNewPanel(true);
    let values = [...experienceValues];
    values.push([]);
    setExperienceValues(values);
    let planningList = expDetails;
    let index = listCount;

    // planningList.push(ExperienceDetailsConfig[0]);

    setExpDetails(planningList);
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
          <Button onClick={handleSave}>Save</Button>
        </Panel>

        <Panel header="Experience" key="2">
          {experienceValues.map((experienceInfo, index) => (
            <Collapse onChange={callback} className="resume-heading-section">
              <Panel header="Experience" key={index}>
                <TextField
                  addExperiencePanel={handleAddExperiencePanel}
                  label={ExperienceDetailsConfig[0].label}
                  placeholder={ExperienceDetailsConfig[0].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={ExperienceDetailsConfig[0].id}
                  name={ExperienceDetailsConfig[0].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  addExperiencePanel={handleAddExperiencePanel}
                  label={ExperienceDetailsConfig[1].label}
                  placeholder={ExperienceDetailsConfig[1].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={ExperienceDetailsConfig[1].id}
                  name={ExperienceDetailsConfig[1].name}
                  autoComplete={false}
                  className="input-value"
                />

                <TextField
                  addExperiencePanel={handleAddExperiencePanel}
                  label={ExperienceDetailsConfig[2].label}
                  placeholder={ExperienceDetailsConfig[2].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={ExperienceDetailsConfig[2].id}
                  name={ExperienceDetailsConfig[2].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  addExperiencePanel={handleAddExperiencePanel}
                  label={ExperienceDetailsConfig[3].label}
                  placeholder={ExperienceDetailsConfig[3].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={ExperienceDetailsConfig[3].id}
                  name={ExperienceDetailsConfig[3].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  addExperiencePanel={handleAddExperiencePanel}
                  label={ExperienceDetailsConfig[4].label}
                  placeholder={ExperienceDetailsConfig[4].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={ExperienceDetailsConfig[4].id}
                  name={ExperienceDetailsConfig[4].name}
                  autoComplete={false}
                  className="input-value"
                />
                <TextField
                  addExperiencePanel={handleAddExperiencePanel}
                  label={ExperienceDetailsConfig[5].label}
                  placeholder={ExperienceDetailsConfig[5].placeholder}
                  onChange={(e) => handleChangeExperienceValues(e, index)}
                  key={ExperienceDetailsConfig[5].id}
                  name={ExperienceDetailsConfig[5].name}
                  autoComplete={false}
                  className="input-value"
                />
              </Panel>
            </Collapse>
          ))}
          <Button
            type="primary"
            // size={"large"}
            onClick={handleAddExperiencePanel}
          >
            Add
          </Button>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </Panel>

        <Panel header="Education" key="3">
          {educationLabels.map((educationInfo) => (
            <Input
              id="standard-multiline-flexible"
              label={educationInfo.label}
              placeholder={educationInfo.placeholder}
              onChange={handleChangeEducationDetails}
              className="input-value"
              name={educationInfo.name}
            />
          ))}
        </Panel>
        <Panel header="Projects" key="4">
          {projectsLabels.map((educationInfo) => (
            <Input
              id="standard-multiline-flexible"
              label={educationInfo.label}
              placeholder={educationInfo.placeholder}
              onChange={handleChange}
              className="input-value"
            />
          ))}
        </Panel>
        <Panel header="Skills" key="5">
          {skillsLabels.map((educationInfo) => (
            <Input
              id="standard-multiline-flexible"
              label={educationInfo.label}
              placeholder={educationInfo.placeholder}
              onChange={handleChange}
              className="input-value"
            />
          ))}
        </Panel>
        <Panel header="Awards and Achievemnts" key="6">
          {awardsLabel.map((educationInfo) => (
            <Input
              id="standard-multiline-flexible"
              label={educationInfo.label}
              placeholder={educationInfo.placeholder}
              onChange={handleChange}
              className="input-value"
            />
          ))}
        </Panel>
      </Collapse>
      <Button type="primary" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default LeftSidebar;
