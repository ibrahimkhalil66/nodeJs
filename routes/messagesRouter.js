const { Router } = require("express");


const messagesRouter = Router()

const { getAllMessages, newMessage, postNewMessage } = require("../controllers/messageController.js")

messagesRouter.get("/", getAllMessages);
messagesRouter.get("/new", newMessage);
messagesRouter.post("/new", postNewMessage);

module.exports = { messagesRouter }