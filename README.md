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
##Running the App
###1. Ensure the backend server is running (http://localhost:5000).
###2. Access the frontend React app at http://localhost:3000.

