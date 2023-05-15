const isOwner = (objectId) => {
    return (req, res, next) => {
      // Check if the user is the owner of the specified object
      if (req.user && req.user._id.equals(objectId)) {
        next(); // User is the owner, proceed to the next middleware
      } else {
        res.status(403).json({ error: 'Forbidden' }); // User is not the owner of the object
      }
    };
  }; 