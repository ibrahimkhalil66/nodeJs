const { error } = require("node:console");
const db = require("../db.js")



async function getAllMessages(req,res) {

    try {
        const messages = await db.getAllMessages();

        if(!messages) throw new Error;

        res.render("index.ejs", {title: "Mini Messageboard", messages: messages})
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

async function newMessage(req, res) {
    res.render("new.ejs", {title : "New Message"})
}

async function postNewMessage(req,res) {
   try{ 
        const body = req.body;

        if(!body) throw new Error;

        const message = {
            message: body.message,
            user: body.user
        }

        const isAdded = await db.postNewMessage(message)

        if(!isAdded) throw new Error;

        res.redirect("/")
    } catch(error) {
        res.status(500).send("Internal Server Error");
    }
}



module.exports = { getAllMessages, newMessage, postNewMessage }