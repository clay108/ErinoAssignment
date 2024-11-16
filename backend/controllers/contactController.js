import Contact from "../models/contactModel.js";

// Add a new contact
export const addContact = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

    // Validate that all required fields are provided
    if (!firstName || !lastName || !email || !phoneNumber || !company || !jobTitle) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const contact = new Contact({
            firstName,
            lastName,
            email,
            phoneNumber,
            company,
            jobTitle,
        });

        await contact.save();
        res.status(201).json({ message: "Contact added successfully", contact });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ message: "Failed to add contact", error: error.message });
    }
};

// Get all contacts
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json({ contacts });
    } catch (error) {
        res.status(400).json({ message: 'Failed to fetch contacts', error: error.message });
    }
};

// Update a contact by ID
export const updateContact = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

    try {
        const contact = await Contact.findByIdAndUpdate(
            id,
            {
                firstName,
                lastName,
                email,
                phoneNumber,
                company,
                jobTitle,
            },
            { new: true } // Return the updated document
        );

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({ message: 'Contact updated successfully', contact });
    } catch (error) {
        res.status(400).json({ message: 'Failed to update contact', error: error.message });
    }
};

// Delete a contact by ID
export const deleteContact = async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findByIdAndDelete(id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete contact', error: error.message });
    }
};
