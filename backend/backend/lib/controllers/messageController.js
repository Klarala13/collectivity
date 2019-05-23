exports.welcomeMessage = (req, res, next) => {
  res.json({message: "Welcome to Collectivity! We're very happy to see you here"})
};
 
exports.genericErrors =  (err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode).json({ message: err.message });
};
