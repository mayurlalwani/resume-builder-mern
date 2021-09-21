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
    personalInfoValues;

  return (
    <div className="main-container-resume-section">
      <div className="resume-details">
        <div className="left-section-primary-details">
          <header>
            <h1>{fullName ? fullName : "Your Name"}</h1>
            <p>{resumeHeadline || "Resume Headline"} </p>
          </header>
          <section className="section-container">
            <h4>Experience</h4>
            <b>Company</b>, Location - Job Title
            <br />
            <span>Month 2010 - PRESENT</span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh.
            </p>
          </section>
          {/* <section className="section-container">
            <h4>Education</h4>
            <b>{universityName || "School Name"}</b>,{" "}
            {collegeLocation || "Location"} - {degree || "Degree"}
            <br />
            <span>
              {startYear || "Month 2010"} - {endYear || "PRESENT"}
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh.
            </p>
          </section> */}

          <section className="section-container">
            <h4>Education</h4>
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
                    <b>{universityName || "University Name - "}-</b>
                    <span>
                      -{collegeLocation || "Location"} - {degree || "Degree"}
                    </span>
                    <span>
                      {startYear || "Month 2010"} - {endYear || "PRESENT"}
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh.
                    </p>
                  </>
                );
              })}
          </section>

          <section className="section-container">
            <h4>Projects</h4>
            <b>Project Name</b>, Detail
            <br />
            <span>Month 2010 - PRESENT</span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh.
            </p>
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
            <h4>Skills</h4>
            Lorem ipsum dolor sit amet. Consectetuer adipiscing elit. Sed diam
            nonummy nibh euismod tincidunt.
          </section>
          <section className="section-container">
            <h4>Awards</h4>
            Lorem ipsum dolor sit amet. Consectetuer adipiscing elit. Sed diam
            nonummy nibh euismod tincidunt.
          </section>
          <section className="section-container">
            <h4>Languages</h4>
            Lorem ipsum dolor sit amet. Consectetuer adipiscing elit. Sed diam
            nonummy nibh euismod tincidunt.
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;
