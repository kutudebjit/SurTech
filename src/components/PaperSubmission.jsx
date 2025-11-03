import React from "react";

const PaperSubmission = () => {
  return (
    <section className="paper-submission-section">
      {" "}
      <div className="container">
        {" "}
        <h2 className="section-title">Paper Submission</h2>{" "}
        <div className="cards-grid top-card">
          {" "}
          <div className="card">
            {" "}
            <h3 className="card-title">Important Dates</h3>{" "}
            <ul className="card-list">
              {" "}
              <li>Paper Submission deadline: 30 Nov, 2025</li>{" "}
              <li>Paper Acceptance Notification:10 Dec, 2025</li>{" "}
              <li>Camera ready Paper Submission:20 Dec, 2025</li>{" "}
              <li>Paper Registration Deadline:24 Dec, 2025</li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom three cards side by side */}{" "}
        <div className="cards-grid bottom-cards">
          {" "}
          <div className="card">
            {" "}
            <h3 className="card-title">Submission Link</h3>{" "}
            <a
              href="https://www.conference-submission-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {" "}
              Submit Your Paper Here{" "}
            </a>{" "}
          </div>{" "}
          <div className="card">
            {" "}
            <h3 className="card-title">Paper Template</h3>{" "}
            <a
              href="https://www.conference-paper-template.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {" "}
              Download Paper Template{" "}
            </a>{" "}
          </div>{" "}
          <div className="card">
            {" "}
            <h3 className="card-title">Copyright Form</h3>{" "}
            <a
              href="https://www.conference-copyright-form.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {" "}
              Download & Submit Copyright Form{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
};

export default PaperSubmission;
