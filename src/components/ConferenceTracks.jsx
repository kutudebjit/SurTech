import React from "react";

const ConferenceTracks = () => {
  const tracks = [
    "Emerging Technologies and Digital Transformation",
    "Intelligent Applications and Data-Driven Innovation",
    "Future Trends and Cross-Disciplinary Innovations",
    "Human-Centered and Collaborative Computing",
    "Applications of Computing in Society and Industry",
  ];

  const containerStyle = {
  width: "80%", // changed from maxWidth
  margin: "40px auto",
  padding: "20px",
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  fontFamily: "Arial, sans-serif",
};


  const headerStyle = {
    textAlign: "center",
    color: "#007bff",
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "25px",
  };

  const trackStyle = {
    padding: "15px 20px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #e0e0e0",
    transition: "all 0.3s ease",
    cursor: "pointer",
    color: "#333",
    backgroundColor: "#f9f9f9",
    fontSize: "16px",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = "#e6f0ff"; // light blue hover
    e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,123,255,0.2)";
    e.currentTarget.style.transform = "scale(1.02)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "#f9f9f9";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Conference Tracks</h2>
      {tracks.map((track, index) => (
        <div
          key={index}
          style={trackStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {index + 1}. {track}
        </div>
      ))}
    </div>
  );
};

export default ConferenceTracks;
