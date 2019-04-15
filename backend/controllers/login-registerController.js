const mongoose = require("mongoose");
const validateToken = require("./controllers/validateToken");
const User = require("./models/User");

const mongopath = process.env.MONGOPATH || `localhost`;
const port = process.env.PORT || 8080;

const app = require("./app");
// const jwtMW = exjwt({
//   secret: 'keyboard cat 4 ever'
// });

mongoose.connect(`mongodb://${mongopath}:27017/DCI6jsonwebtoken`, {
  useNewUrlParser: true,
  useCreateIndex: true
});

(async () => {
  const users = await User.find({});
  if (users.length == 0) {
    console.log(`This user seems to not exist, please SignUp`);
    const user = new User({
      name: "alice",
      password: "$2b$10$h/rbnvKp1KuAdTv3ZgE6JeFC5le51MwJKFGSnSZwP5nnDqSB1EpBW", // "password"
      admin: true
    });
    await user.save();
    console.log("User saved successfully");
  }
})();

const baseRoutes = require("./routes/index");
const apiRoutes = require("./routes/user");
app.use(baseRoutes);
apiRoutes.use(validateToken);
const privateRoutes = require("./routes/location");
apiRoutes.use(privateRoutes);

app.use("/api", apiRoutes);

app.listen(port);
console.log("The api-url is localhost:" + port);
console.log(
  `A user is in the database with name: alice and password: password`
);