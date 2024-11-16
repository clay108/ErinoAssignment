import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "../components/ContactForm";
import ContactTable from "../components/ContactTable";
import { toast } from "react-toastify";

const HomePage = () => {
    const [contacts, setContacts] = useState([]);
    const [contactToEdit, setContactToEdit] = useState(null); // New state to hold the contact being edited

    // Fetch contacts on initial load
    useEffect(() => {
        fetchContacts();
    }, []);

    // Function to fetch contacts
    const fetchContacts = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/v1/contacts");
            //console.log("Fetched contacts:", data);  // Log the response to verify structure
            setContacts(data.contacts);  // Assuming 'contacts' is the key in the response
        } catch (error) {
            console.error("Failed to load contacts:", error);
            toast.error("Failed to load contacts.");
        }
    };

    // Function to handle adding a contact
    const handleAddContact = async (newContact) => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/v1/contacts", newContact);
            console.log("New contact added:", data);
            const contactsResponse = await axios.get("http://localhost:5000/api/v1/contacts");
            setContacts(contactsResponse.data.contacts);
            toast.success("Contact added successfully!");
        } catch (error) {
            console.error("Error adding contact:", error);
            toast.error("Failed to add contact.");
        }
    };

    // Function to handle editing a contact
    const handleEditContact = async (updatedContact) => {
        try {
            const { data } = await axios.put(
                `http://localhost:5000/api/v1/contacts/${updatedContact._id}`,
                updatedContact
            );
            console.log(data);
            const contactsEditResponse = await axios.get("http://localhost:5000/api/v1/contacts");

            // Directly update the contacts state with the fetched contacts
            setContacts(contactsEditResponse.data.contacts);
            toast.success("Contact updated successfully!");
            setContactToEdit(null); // Close the edit form after successful update
        } catch (error) {
            console.error("Error editing contact:", error);
            toast.error("Failed to edit contact.");
        }
    };

    // Function to handle deleting a contact
    const handleDeleteContact = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/contacts/${id}`);
            setContacts(contacts.filter((contact) => contact._id !== id));
            toast.success("Contact deleted successfully!");
        } catch (error) {
            console.error("Error deleting contact:", error);
            toast.error("Failed to delete contact.");
        }
    };

    return (
        <div>
            <ContactForm
                onAddContact={handleAddContact}
                onEditContact={handleEditContact}
                contactToEdit={contactToEdit} // Pass the contact being edited
            />
            <ContactTable
                contacts={contacts}
                onEditContact={(contact) => setContactToEdit(contact)} // Set the contact to edit
                onDeleteContact={handleDeleteContact}
            />
        </div>
    );
};

export default HomePage;
