const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://maria:maria@cluster0.oqupl1l.mongodb.net/project4?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});



