import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Title from "./components/Title";
import OrganizingBody from "./components/OrganizingBody";
import PaperSubmission from "./components/PaperSubmission";
const App = () => {
  return (
    <>
      <Navbar />
      <Title />
      <section id="about" className="section">
        <About />
      </section>
      <section id="organizingbody" className="section">
        <OrganizingBody />
      </section>
      <section id="papersubmission" className="section">
        <PaperSubmission />
      </section>
    </>
  );
};

export default App;
