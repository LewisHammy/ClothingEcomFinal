const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveClothingItem,
  deleteClothingItem,
  login,
} = require('../../controllers/user-controller');

// Import middleware
const { authMiddleware } = require('../../utils/auth');

// Routes for the clothing ecommerce app
router.route('/').post(createUser);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/cart/:clothingId').put(authMiddleware, saveClothingItem);

router.route('/cart/:clothingId').delete(authMiddleware, deleteClothingItem);

module.exports = router;
