const express = require('express');
const dotenv = require('dotenv');
const productController = require('./product/product.controller');
const authRoutes = require('./auth/auth.routes');
const userRoutes = require('./user/user.routes');

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/products', productController);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
