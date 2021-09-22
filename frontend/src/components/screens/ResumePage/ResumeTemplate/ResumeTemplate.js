import React from "react";

const ResumeTemplate = ({
  personalInfoValues,
  educationValues,
  experienceValues,
  projectValues,
  skills,
  toolsAndTech,
  achievements,
}) => {
  const { fullName, email, resumeHeadline, address, city, contact } =
    personalInfoValues[0];

  return (
    <div className="main-container-resume-section">
      <div className="resume-details">
        <div className="left-section-primary-details">
          <header className="header">
            <h1 className="full-name">{fullName ? fullName : "Your Name"}</h1>
            <p>{resumeHeadline || "Resume Headline"} </p>
          </header>

          <section className="section-container">
            <span className="section-heading">Experience</span>
            {experienceValues &&
              experienceValues.map((data) => {
                const {
                  companyName,
                  location,
                  jobTitle,
                  startDate,
                  endDate,
                  description,
                } = data;
                return (
                  <>
                    <div className="section-details">
                      <span className="section-details name">
                        {companyName ? companyName + "," : "Comapany,"}
                      </span>
                      <span className="section-details location">
                        &nbsp; {location || " Location"} ---
                      </span>
                      <span className="section-details section-title">
                        {jobTitle ? jobTitle + " " : "   Job Title "}
                      </span>
                    </div>
                    <span className="duration">
                      {/* {`${startDate ||  "Month 20XX" && ${endDate} || "-PRESENT"`} */}
                      {startDate || "Month 20XX "}
                      {endDate || " - PRESENT"}
                    </span>
                    <p className="description">
                      {description ||
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, se diam nonummy nibh."}
                    </p>
                  </>
                );
              })}
          </section>

          <section className="section-container">
            <span className="section-heading">Education</span>
            {educationValues.length > 0 &&
              educationValues.map((data) => {
                const {
                  universityName,
                  collegeLocation,
                  degree,
                  startYear,
                  endYear,
                  cgpa,
                } = data;
                return (
                  <>
                    <div className="section-details">
                      <span className="section-details name">
                        {universityName
                          ? universityName + ", "
                          : "University Name,  "}
                      </span>
                      <span className="section-details location">
                        {collegeLocation ? " " + collegeLocation : "Location "}{" "}
                        {"---  "}
                      </span>
                      <span className="section-details section-title">
                        {degree || "  Degree"}
                      </span>
                    </div>
                    <span className="duration">
                      {startYear || "Month 20XX"} - {endYear || "PRESENT"}
                    </span>
                  </>
                );
              })}
          </section>

          <section className="section-container">
            <span className="section-heading">Projects</span>
            {projectValues?.map((data) => {
              const { projectName, supervisor, projectDescription } = data;
              return (
                <>
                  <div className="section-details">
                    <span className="section-details name">
                      {projectName ? projectName + "," : "Comapany,"}
                    </span>
                    <span className="section-details location">
                      &nbsp; {supervisor || " Supervisor"}
                    </span>
                  </div>
                  <p className="description">
                    {projectDescription ||
                      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh."}
                  </p>
                </>
              );
            })}
          </section>
        </div>
        <div className="right-section-secondary-details">
          <header>
            <address>
              {address || "Address"} <br />
              {city || "City"},
              <br /> {contact} <br />
              {email || "abc@example.com"}
            </address>
          </header>
          <section className="section-container">
            <span className="section-heading">Skills</span>
            <p className="right-section description">
              {skills ||
                "Lorem ipsum dolor sit amet. Consectetuer adipiscing elit. Sed diam nonummy nibh euismod tincidunt."}
            </p>
          </section>
          <section className="section-container">
            <span className="section-heading">Awards</span>
            <p className="right-section description">
              {achievements ||
                "Lorem ipsum dolor sit amet. Consectetuer adipiscing elit. Sed diam nonummy nibh euismod tincidunt."}
            </p>
          </section>
          <section className="section-container">
            <span className="section-heading">Tools And Technologes</span>
            <p className="right-section description">
              {toolsAndTech ||
                "Lorem ipsum dolor sit amet. Consectetuer adipiscing elit. Sed diam nonummy nibh euismod tincidunt."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;
