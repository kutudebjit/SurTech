import React from "react";

const ContactInfo = () => {
  const containerStyle = {
    width: "80%",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.8",
    boxSizing: "border-box",
  };

  const headingStyle = {
    fontWeight: "700",
    fontSize: "20px",
    marginBottom: "8px",
  };

  const detailStyle = {
    marginBottom: "15px",
    fontSize: "16px",
  };

  const mainHeadingStyle = {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#007bff",
  };

  return (
    <div>
      <h1 style={mainHeadingStyle}>Contact Info</h1>
      <div style={containerStyle}>
        <div>
          <div style={headingStyle}>Coordinators:</div>
          <div style={detailStyle}>DTDCFAC</div>
        </div>

        <div>
          <div style={headingStyle}>Email:</div>
          <div style={detailStyle}>dtdcfac2025@gmail.com</div>
        </div>

        <div>
          <div style={headingStyle}>Address:</div>
          <div style={detailStyle}>
            540 Dum Dum Road, Surermath, (Near Dum Dum Jn. Station), Kolkata-700074 West Bengal
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
