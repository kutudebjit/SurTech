import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        affiliation: "",
        gender: "",
        contact: "",
        email: "",
        foodChoice: "",
        paperId: "",
        paperTitle: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
        console.log(formData);

        // Reset form fields to default
        setFormData({
            name: "",
            affiliation: "",
            gender: "",
            contact: "",
            email: "",
            foodChoice: "",
            paperId: "",
            paperTitle: "",
        });
    };


    const inputStyle = {
        width: "100%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginTop: "6px",
        transition: "all 0.3s ease",
        fontSize: "15px",
        outline: "none",
    };

    const labelStyle = {
        fontWeight: "600",
        color: "#007bff",
        fontSize: "15px",
    };

    const handleFocus = (e) => {
        e.target.style.border = "1px solid #007bff";
        e.target.style.boxShadow = "0 0 8px rgba(0, 123, 255, 0.3)";
        e.target.style.transform = "scale(1.02)";
    };

    const handleBlur = (e) => {
        e.target.style.border = "1px solid #ccc";
        e.target.style.boxShadow = "none";
        e.target.style.transform = "scale(1)";
    };

    return (
        <div
            style={{
                width: "80%", // changed from maxWidth
                margin: "60px auto",
                padding: "40px 30px",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
            }}
        >

            {/* Header */}
            <div
                style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "18px",
                    borderRadius: "12px",
                    textAlign: "center",
                    fontSize: "22px",
                    marginBottom: "25px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    boxShadow: "0 4px 10px rgba(0, 123, 255, 0.3)",
                }}
            >
                Registration Form
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
                {[
                    { label: "Author/Participant Name", name: "name", type: "text" },
                    { label: "Affiliation", name: "affiliation", type: "text" },
                    {
                        label: "Gender",
                        name: "gender",
                        type: "select",
                        options: ["Male", "Female", "Other"],
                    },
                    { label: "Contact No", name: "contact", type: "tel" },
                    { label: "Email ID", name: "email", type: "email" },
                    {
                        label: "Choice of Food",
                        name: "foodChoice",
                        type: "select",
                        options: ["VEG", "NON-VEG"],
                    },
                    { label: "Paper ID", name: "paperId", type: "text" },
                    { label: "Title of the Paper", name: "paperTitle", type: "text" },
                ].map((field, index) => (
                    <div key={index} style={{ marginBottom: "18px" }}>
                        <label style={labelStyle}>{field.label}:</label>
                        {field.type === "select" ? (
                            <select
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
                                style={inputStyle}
                            >
                                <option value="">Select {field.label}</option>
                                {field.options.map((opt, idx) => (
                                    <option key={idx} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
                                style={inputStyle}
                            />
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "14px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 10px rgba(0,123,255,0.3)",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#0056b3";
                        e.target.style.transform = "scale(1.02)";
                        e.target.style.boxShadow = "0 6px 15px rgba(0,123,255,0.4)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#007bff";
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow = "0 4px 10px rgba(0,123,255,0.3)";
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
