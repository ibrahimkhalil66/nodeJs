const express = require('express');
const app = express();
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const messagesRouter = require("./routes/messagesRouter.js");


app.use("/messages",messagesRouter)

const PORT = 3001;

app.listen(PORT);
console.log("\" Ctrl + C \" to shutdown the server");

