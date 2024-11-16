import React, { useState, useEffect } from "react";

const ContactForm = ({ onAddContact, onEditContact, contactToEdit }) => {
    // Initialize state with empty values or the values of the contact being edited
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: "",
    });

    useEffect(() => {
        // If there is a contact to edit, pre-fill the form with its values
        if (contactToEdit) {
            setFormData({
                firstName: contactToEdit.firstName,
                lastName: contactToEdit.lastName,
                email: contactToEdit.email,
                phoneNumber: contactToEdit.phoneNumber,
                company: contactToEdit.company,
                jobTitle: contactToEdit.jobTitle,
            });
        }
    }, [contactToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (contactToEdit) {
            // If we are editing, call the onEditContact function
            onEditContact({ ...formData, _id: contactToEdit._id });
        } else {
            // If adding, call the onAddContact function
            onAddContact(formData);
        }

        // Reset form after submission
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            company: "",
            jobTitle: "",
        });
    };

    

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "400px",
                margin: "auto",
                padding: "20px",
                backgroundColor: "rgba(128, 128, 128, 0.5)", // Grey with transparency
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)", // Frosted glass effect
            }}
        >
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    boxSizing: "border-box",
                    backgroundColor: "rgba(255, 255, 255, 0.8)", // Slight transparency
                }}
                required
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    boxSizing: "border-box",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    boxSizing: "border-box",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
                required
            />
            <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    boxSizing: "border-box",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
                required
            />
            <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    boxSizing: "border-box",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
                required
            />
            <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    boxSizing: "border-box",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
                required
            />
            <button
                type="submit"
                style={{
                    width: "100%",
                    padding: "12px",
                    marginTop: "10px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#007BFF")
                }
            >
                {contactToEdit ? "Update Contact" : "Add Contact"}
            </button>
        </form>

    );
};

export default ContactForm;
