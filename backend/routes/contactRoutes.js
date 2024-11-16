import express from 'express';
import { addContact, getContacts, updateContact, deleteContact } from '../controllers/contactController.js';

const router = express.Router();
router.post('/contacts', addContact);
router.get('/contacts', getContacts);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);

export default router;