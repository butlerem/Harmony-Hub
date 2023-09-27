const { AuthentificationError } = require("apollo-server-express");
const { user,project } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(pk_test_51Nv4fhEbTxDIrmjgqjURiHGZrjHNQFBBw5TzwLwxslF7Ps9HB55bpiMsKNzi4geETp37elheS45LCq6iCV0hC8xL00wypUDiSM)