const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Product = require('./Product'); // Import the Product model

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // Define savedProducts as an array of references to the Product model
    savedProducts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    // Other user-related fields as needed for your application
  },
  {
    // Set additional options if required
    toJSON: {
      virtuals: true,
    },
  }
);

// Hash user password before saving
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Method to compare and validate password for login
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Virtual field to get the count of saved products
userSchema.virtual('productCount').get(function () {
  return this.savedProducts.length;
});

const User = model('User', userSchema);

module.exports = User;
