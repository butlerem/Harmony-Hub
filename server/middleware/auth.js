const jwt = require('jsonwebtoken');
const secretKey = 'harmonyhubrules'; // Replace with your secret key
const expiration = '2hr';


module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secretKey, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // return req object to access it with resolver as 'context'
    return req;
  },
  // create new token that takes username, email and id as arguments
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
