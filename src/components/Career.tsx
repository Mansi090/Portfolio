import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> learning experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Personal Projects</h4>
                <h5>Sorting Visualizer</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed a sorting visualizer using HTML, CSS, and JavaScript to demonstrate sorting algorithms interactively.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Contributions</h4>
                <h5>Hacktoberfest 2024</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Successfully contributed to open-source projects during Hacktoberfest, improving collaboration and version control skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Postman Student Expert</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed API fundamentals training with Postman, gaining expertise in making API requests, handling responses, and scripting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
