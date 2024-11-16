# Erino Assignment  

# Setup Instructions

## Prerequisites
- **Node.js** and **npm** installed.
- **MongoDB** server running locally or remotely.
- **Git** installed.

---

## Backend Setup

### Clone the repository:
```bash
git clone https://github.com/clay108/ErinoAssignment.git
cd ErinoAssignment/backend
```
### Install dependencies:
```bash
npm install
```
### Set up .env file with the following variables in the backend root directory
```
MONGO_URI=mongodb+srv://himanshu:<dbPassword>@cluster0.wltwsss.mongodb.net
PORT=5000
```
### Start the backend server:
```
npm run dev
```

## Frontend Setup

### Navigate to the frontend directory: 
```
cd ../frontend
```
### Install dependencies:
```
npm install
```
### Start the React development server:
```
npm run start
```
# Running the App:

### 1. Ensure the backend server is running:
- URL: [http://localhost:5000](http://localhost:5000)

### 2. Access the frontend React app:
- URL: [http://localhost:3000](http://localhost:3000)


## Project Overview  
This project is a **Contact Management System** built with the MERN stack.  
The application allows users to:  
- Add, view, edit, and delete contact information.  
- Display contacts in a paginated and sortable table.  
- Manage contact data securely with robust validations.  

---

## Major Technical Decisions  
- **Tech Stack**:  
  - Frontend: ReactJS (with Material-UI components for styling and responsiveness).  
  - Backend: Node.js, Express.js (API for CRUD operations).  
  - Database: MongoDB (NoSQL database for storing contact data).  

- **Validation & Error Handling**:  
  - Validation logic implemented on both the frontend and backend.  
  - User-friendly error messages are consistent across the app.  

- **State Management**:  
  - State is managed locally within React components using hooks like `useState` and `useEffect`.  

---

## How It Works  

### Frontend  
1. **Contact Form**  
   - Users can add or edit contacts.  
   - Validates user input (e.g., required fields, valid email format).  
   - Form resets after successful submission.  

2. **Contact Table**  
   - Displays a paginated and sortable list of all contacts.  
   - Each row includes "Edit" and "Delete" actions.  
   - Responsive design using Material-UI styling.  

3. **Search Functionality** *(if included)*  
   - Users can search contacts by name, email, or company.  

### Backend  
1. **API Endpoints**  
   - **POST /contacts**: Add a new contact.  
   - **GET /contacts**: Retrieve all contacts.  
   - **PUT /contacts/:id**: Update a contact by ID.  
   - **DELETE /contacts/:id**: Remove a contact by ID.  

2. **Validation**  
   - Server-side validation ensures no invalid data is stored in MongoDB.  
   - Error handling implemented using `express-validator`.  

3. **Database Schema**  
   Contacts are stored with the following structure in MongoDB:  
   ```json
   {
     "_id": "ObjectId",
     "firstName": "string",
     "lastName": "string",
     "email": "string",
     "phoneNumber": "string",
     "company": "string",
     "jobTitle": "string",
     "createdAt": "ISODate",
     "updatedAt": "ISODate"
   }
   ```
## Challenges and Solutions

### Edit Button Functionality Issue

**Problem:**  
The Edit button in the contact management table was not working as expected. When clicked, it failed to populate the form with the selected contact's data, and updates made to the contact were not saved in the database.

**Root Cause:**  
- Incorrect state management in the React component handling the Edit functionality.  
- The selected contact's data was not being passed properly to the form for editing.  
- The `PUT` request to update the contact in the backend API was not configured correctly.

**Solution:**  
- Implemented a function to populate the form fields with the selected contact's data by setting the form's state dynamically based on the selected contact.
- Updated the `onEditContact` handler to pass the contact object to the form component.
- Verified that the form state was correctly updated with the selected contact’s data on button click.
- Debugged the backend API request and corrected the `PUT` endpoint to ensure the updated contact details were saved in the database.
- Tested the complete edit workflow end-to-end to confirm that the functionality worked seamlessly.

This approach ensured the Edit button worked as intended, allowing users to update contact details successfully.

