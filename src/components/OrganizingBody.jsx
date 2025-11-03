import "bootstrap/dist/css/bootstrap.min.css";

const OrganizingBody = () => {
  return (
    <div className="committee-section container my-5">
      <div className="text-center mb-5 pt-5">
        <h1>Organizing Body</h1>
        <hr />
      </div>

      {/* Chief Patron */}
      <div className="mb-4">
        <h2>Chief Patron</h2>
        <ul className="list-unstyled">
          <li>Sardar Taranjit Singh, Managing Director, JIS Group</li>
        </ul>
      </div>

      {/* Patron */}
      <div className="mb-4">
        <h2>Patron</h2>
        <ul className="list-unstyled">
          <li>Sardar Haranjit Singh, Joint MD, JIS Group</li>
          <li>Sardar Amrik Singh, Deputy MD, JIS Group</li>
          <li>Sardar Simarpreet Singh, Director, JIS Group</li>
          <li>Ms. Manpreet Kaur, CEO, JIS Group</li>
          <li>Ms. Jaspreet Kaur, Director, JIS Group</li>
          <li>Sardar Harjot Singh, Director, JIS Group</li>
          <li>Sardar Amanjot Singh, Director, JIS Group</li>
          <li>Sardar Anmol Singh Narula, Director, JIS Group</li>
        </ul>
      </div>

      {/* General Chair */}
      <div className="mb-4">
        <h2>General Chair(s)</h2>
        <ul className="list-unstyled">
          <li>Prof.(Dr.) Neeraj Saxena, Pro-Chancellor, Kolkata, India</li>
          <li>
            Prof.(Dr.) Bhaskar Gupta, Vice Chancellor, JIS University, Kolkata,
            India
          </li>
          <li>Prof.(Dr.) Ajay Kumar Ray, Director, JISIASR, Kolkata, India</li>
        </ul>
      </div>

      {/* Conference Chair */}
      <div className="mb-4">
        <h2>Conference Chair</h2>
        <ul className="list-unstyled">
          <li>Prof.(Dr.) Saradindu Panda</li>
        </ul>
      </div>

      {/* Program Chair */}
      <div className="mb-4">
        <h2>Program Chair(s)</h2>
        <ul className="list-unstyled">
          <li>Abhishek Bysack, DSCSITSC, Kolkata, India</li>
          <li>Madhusmita Mishra, DSCSITSC, Kolkata, India</li>
        </ul>
      </div>
    </div>
  );
};

export default OrganizingBody;
