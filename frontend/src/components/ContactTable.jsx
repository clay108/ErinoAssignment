import React from "react";
import { Button } from "@mui/material";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const ContactTable = ({ contacts, onEditContact, onDeleteContact }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", color: "#888", marginTop: "50px" }}>
        No contacts available
      </p>
    );
  }

  // Inline CSS for styling the table container and individual elements
  const tableContainerStyle = {
    width: "80%", // Center the table with controlled width
    margin: "50px auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow
    backgroundColor: "rgba(128, 128, 128, 0.5)", // Transparent grey
    backdropFilter: "blur(10px)", // Frosted glass effect
    overflow: "hidden", // Keep rounded corners intact
    padding: "20px", // Spacing inside the container
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const tableHeadStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white for header
    fontWeight: "bold",
    color: "#fff",
  };

  const tableCellStyle = {
    padding: "12px 20px",
    border: "1px solid rgba(255, 255, 255, 0.2)", // Light border for contrast
    textAlign: "left",
    fontSize: "16px",
    color: "#fff", // White text for better contrast
  };

  const tableRowStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent row background
    transition: "background-color 0.2s",
  };

  const buttonStyle = {
    padding: "8px 16px",
    margin: "0 5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    fontSize: "14px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)", // Slightly enlarging button on hover
  };

  return (
    <div style={tableContainerStyle}>
      <Table style={tableStyle}>
        <TableHead style={tableHeadStyle}>
          <TableRow>
            <TableCell style={tableCellStyle}>First Name</TableCell>
            <TableCell style={tableCellStyle}>Last Name</TableCell>
            <TableCell style={tableCellStyle}>Email</TableCell>
            <TableCell style={tableCellStyle}>Phone Number</TableCell>
            <TableCell style={tableCellStyle}>Company</TableCell>
            <TableCell style={tableCellStyle}>Job Title</TableCell>
            <TableCell style={tableCellStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact._id} style={tableRowStyle}>
              <TableCell style={tableCellStyle}>{contact.firstName}</TableCell>
              <TableCell style={tableCellStyle}>{contact.lastName}</TableCell>
              <TableCell style={tableCellStyle}>{contact.email}</TableCell>
              <TableCell style={tableCellStyle}>{contact.phoneNumber}</TableCell>
              <TableCell style={tableCellStyle}>{contact.company}</TableCell>
              <TableCell style={tableCellStyle}>{contact.jobTitle}</TableCell>
              <TableCell style={tableCellStyle}>
                <Button
                  onClick={() => onEditContact(contact)}
                  style={buttonStyle}
                  onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => onDeleteContact(contact._id)}
                  style={buttonStyle}
                  onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ContactTable;
