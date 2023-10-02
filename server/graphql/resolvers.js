const { AuthenticationError } = require("apollo-server-express");
const { user, project } = require('../models');
const { signToken } = require('../middleware/auth');
const stripe = require('stripe')('pk_test_51Nv4fhEbTxDIrmjgqjURiHGZrjHNQFBBw5TzwLwxslF7Ps9HB55bpiMsKNzi4geETp37elheS45LCq6iCV0hC8xL00wypUDiSM');



const resolvers = {
    Query: {
        me: async(parent, args, context)
    },






    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            try {
                const user = await user.create({ username, email, password });
                if (!user) {
                    return res.status(400).json({ message: 'Something is wrong!' });
                }
                const token = signToken(user);
                return { token, user };
            } catch (err) {
                console.error(err);
            };


        },

        login: async (parent, { email, password }) => {
            // find user by email 
            const user = await user.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No profile with this email found!');
            };
            // verify password
            const correctPw = await profile.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            };
            const token = signToken(user);
            return { token, user };
        
    }}};