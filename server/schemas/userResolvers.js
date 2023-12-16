const bcrypt = require('bcrypt');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const userResolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    userById: async (_, { userId }) => {
      return await User.findById(userId);
    }
    // Add other query resolvers if needed...
  },

  Mutation: {
    createUser: async (_, { email, username, password }) => {
      try {
        if (!email || !username || !password) {
          throw new Error('Please provide all required fields');
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
          throw new Error('Username already exists');
        }

        //already hashed in the model
        console.log("password in userResolvers:", password)
        const newUser = new User({
          email,
          username,
          password
        });

        const savedUser = await newUser.save();

        const token = signToken({
          _id: savedUser._id,
          username: savedUser.username,
          email: savedUser.email
        });

        return {
          _id: savedUser._id,
          email: savedUser.email,
          username: savedUser.username,
          token
        };
      } catch (error) {
        console.error('Error creating user:', error.message);
        throw new Error('User creation failed');
      }
    },

    loginUser: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error('Invalid credentials: User not found');
        }

        console.log('User retrieved from DB:', user);
        console.log('Plain text password:', password);

        // Compare the plaintext password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);


        console.log('Password match result:', isMatch);

        if (!isMatch) {
          throw new Error('Invalid credentials: Password mismatch');
        }

        //returns a token to be assigned to local storage
        const token = signToken({
          _id: user._id,
          username: user.username,
          email: user.email,
        });

        console.log({
          _id: user._id,
          email: user.email,
          username: user.username,
          token,
        });

        return {
          _id: user._id,
          email: user.email,
          username: user.username,
          token,
        };

      } catch (error) {
        console.error('Error logging in:', error.message);
        throw new Error('Invalid credentials: Password mismatch');
      }
    },





    // Add other mutation resolvers if needed...
  }
};

module.exports = userResolvers;
