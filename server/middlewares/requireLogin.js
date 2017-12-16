module.exports = (req, res, next) => {
  //next is a function that is called when middleware is done
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  }

  next();
};
