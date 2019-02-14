exports.welcomeMessage = (req, res, next) => {
  res.json({message: "Welcome to Collectivity"})
};
 
exports.genericErrors =  (err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode).json({ message: err.message });
};
