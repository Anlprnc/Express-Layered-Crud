const express = require('express');
const authController = require('./auth.controller');
const authMiddleware = require('./auth.middleware');
const router = express.Router();

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get(
  '/protected-route',
  authMiddleware.authenticateToken,
  authController.protectedRoute
);

module.exports = router;
