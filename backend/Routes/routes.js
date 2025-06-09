const express = require('express');
const router = express.Router();
const contactController = require('../controllers/controllers');

// Route pour soumettre un message
router.post('/contact', contactController.submitContactForm);

// Route pour récupérer tous les messages
router.get('/contacts', contactController.getAllContacts);

// Route pour marquer un message comme lu
router.patch('/contacts/:id/read', contactController.markAsRead);

module.exports = router;
