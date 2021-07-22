const mongoose = require("mongoose")
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const comments = require("./routes/api/comments")
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const expressListRoutes = require('express-list-routes');

const express = require("express");
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
const db = require('./config/keys').mongoURI;


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/comments", comments)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
expressListRoutes(app, { prefix: '/' });