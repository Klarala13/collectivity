const mongoose = require("mongoose");
const validateToken = require("./controllers/validateToken");
const User = require("./models/User");

const mongopath = process.env.MONGOPATH || `localhost`;
const port = process.env.PORT || 8080;

const app = require("./app");
const jwtMW = exjwt({
  secret: 'keyboard cat 4 ever'
});
//This is to be used when i look for the user in DB, if the hashed passwords match, then give them JWT and send it back
//Use password hash to store passwords in DB safely

mongoose.connect(`mongodb://${mongopath}:27017/DCI6jsonwebtoken`, {
  useNewUrlParser: true,
  useCreateIndex: true
});

(async () => {
  const users = await User.find({});
  if (users.length == 0) {
    console.log(`This user seems to not exist, please SignUp`);
    const user = new User({
      name: "admin",
      password: "$BestProjectEver", // "password"
      admin: true
    });
    await user.save();
    console.log("Admin saved successfully");
  }
})();

const baseRoutes = require("./routes/index");
const backendRoutes = require("./routes/user");
app.use(baseRoutes);
backendRoutes.use(validateToken);

app.use("/collectivityBackend", apiRoutes);

app.listen(port);
console.log("The api-url is localhost:" + port);
console.log(
  `A user is in the database with name: admin and password: $BestProjectEver`
);