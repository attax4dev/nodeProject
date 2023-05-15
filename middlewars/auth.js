// const jwt = require('jsonwebtoken')

// module.exports = function (req,res,next) {
//     const token = req.header('Authorization');
//     if(!token)
//         return res.status(403).send('Access denied. No token provided');
//     try{
//     var decoded_payload = jwt.verify(token.substring(7),'secret');
//     req.user_token=decoded_payload;
//     next();
//     }catch(err){
//         return res.status(400).send('Invalid Token')
//     }
// }

const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization');

  // Allow access to signup and login routes without a token
  if (req.path === '/api/v1/users/auth/signup' || req.path === '/api/v1/users/auth/login') {
    return next();
  }

  if (!token) {
    return res.status(403).send('Access denied. No token provided');
  }

  try {
    const decoded_payload = jwt.verify(token.substring(7), 'secret');
    req.user_token = decoded_payload;

    // Check user role and grant access based on role
    if (req.user_token.role === 'admin') {
      // Allow access for admin role
      next();
    } else if (req.user_token.role === 'owner') {
      // Allow access for owner role only for item-related routes
      if (req.baseUrl === '/api/v1/items') {
        next();
      } else {
        return res.status(403).send('Access denied. Forbidden');
      }
    } else if (req.user_token.role === 'client') {
      // Allow access for client role
      next();
    } else {
      return res.status(403).send('Access denied. Forbidden');
    }
  } catch (err) {
    return res.status(400).send('Invalid Token');
  }
};
