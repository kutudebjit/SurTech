import React from "react";

const RegistrationFeesTable = () => {
    const tableContainerStyle = {
        width: "80%", // changed from maxWidth
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
    };


    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "left",
        borderRadius: "12px",
        overflow: "hidden",
    };

    const thStyle = {
        backgroundColor: "#007bff",
        color: "#ffffff",
        padding: "14px 16px",
        fontSize: "16px",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
    };

    const tdStyle = {
        padding: "12px 16px",
        borderBottom: "1px solid #eee",
        fontSize: "15px",
        color: "#333",
        transition: "background-color 0.3s ease, transform 0.2s ease",
    };

    const rowHoverStyle = {
        backgroundColor: "#f1f8ff",
        transform: "scale(1.01)",
        cursor: "pointer",
    };

    const data = [
        { category: "Regular Author (Student/Academician)", fees: "1500 INR" },
        { category: "Regular Author (Industry)", fees: "2000 INR" },
        { category: "Attendees (Author but not presenter)", fees: "One day: 500 INR" },
        { category: "Attendees (Non-author)", fees: "INR" },
    ];

    return (
        <div style={tableContainerStyle}>
            <h2 style={{ marginBottom: "20px", color: "#007bff", textAlign: "center", fontWeight: "600" }}>
                Registration Fees Details
            </h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Registration Category</th>
                        <th style={thStyle}>Registration Fees (Indian Author)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = rowHoverStyle.backgroundColor)}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                            style={{ transition: "all 0.3s ease" }}
                        >
                            <td style={tdStyle}>{item.category}</td>
                            <td style={tdStyle}>{item.fees}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RegistrationFeesTable;
