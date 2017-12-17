module.exports = (req, res, next) => {
  //next is a function that is called when middleware is done
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "Not enough credits" });
  }

  next();
};
