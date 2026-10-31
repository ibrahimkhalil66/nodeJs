const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


async function getAllMessages() {
    return messages;
}

async function postNewMessage(newMessage) {

    const message = {
        text : newMessage.message,
        user : newMessage.user,
        added : newMessage.date
    }

    messages.push(message);

    return true;
}

module.exports = {getAllMessages, postNewMessage}