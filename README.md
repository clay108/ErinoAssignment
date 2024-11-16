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

