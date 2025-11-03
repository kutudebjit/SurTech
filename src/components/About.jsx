import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="about-section container my-5">
      {/* Page Header */}
      <div className="text-center mb-5 pt-5">
        <h1>About SurTech</h1>
        <hr />
      </div>

      {/* Mission Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="src\assets\AboutImg.jpg"
            alt="Our Mission"
            className="img-fluid rounded shadow hei"
            style={{ height: "500px", width: "800px", objectFit: "fill" }}
          />
        </div>
        <div className="col-md-6">
          <h2>Details Of College</h2>
          <p className="font-semibold">
            Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex
            (formerly known as Dr. Sudhir Chandra Sur Degree Engineering
            College) was established under the auspices of JIS Foundation under
            Section 2(f) of the UGC Act, 1956. It is an Autonomous Institute.
            <br />
            <br />
            This Institute, which was founded in 2009, is now well-known for its
            innovative and rigorous curriculum, which has produced experts in a
            variety of businesses and sectors in India and beyond.
            <br />
            <br />
            The Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex,
            which has been known for its research culture and excellence in
            imparting Engineering, Science, and Management education for the
            past 15 years and is located near the Dum Dum Metro Railway Station
            and International Airport, is known for its research culture and
            excellence in imparting Engineering, Science, and Management
            education.
            <br />
            <br />
            The institute is a virtual paradise of pristine environment and
            beautiful beauty, nestled in a rural setting of lush green fields.
            The beautiful avenue of trees and flowers on campus, aptly titled
            "Green Field," attest to the importance of ecology and the
            environment. The atmosphere on campus is ideal for academic
            endeavours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
