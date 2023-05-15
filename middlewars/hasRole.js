const hasRole = (role) => {
    return (req, res, next) => {
      // Check if the user has the required role
      if (req.user && req.user.role === role) {
        next(); // User has the required role, proceed to the next middleware
      } else {
        res.status(403).json({ error: 'Forbidden' }); // User does not have the required role
      }
    };
  };