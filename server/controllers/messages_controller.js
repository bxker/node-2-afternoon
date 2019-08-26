let messages = [];
let id = 0;


//crud methods - exporting to index.js

//post
const createMessage = (req, res) => {
    //destructuring text to equal req.body
    const {text, time} = req.body;

    //pushing the id, text, and time into the messages arr
    messages.push({
        id, 
        text, 
        time
    });
    //adding 1 to the id every time a message is created
    id++;
    //response of updated messages arr
    res.json(messages)
}

//get
const readMessage = (req, res) => {
    //response of messages arr
    res.json(messages)
}

//put
const updateMessage = (req, res) => {
    //destructuring text to equal req.body
    const { text } = req.body;
    //finding the index of the message, and then updating the message id to equal the params id
    const messageIndex = messages.findIndex(message => message.id == req.params.id);
    //sets message = to the id of index of messages, which can be used later
    let message = messages[messageIndex];
    //sets the message index equal to an object that updates the values of the properties in messages.
    messages[messageIndex] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    };
    //response of the updated messages arr
    res.json(messages);
}

//delete
const deleteMessage = (req, res) => {
    const deleteID = req.params.id;
    //finds the index of the message id, then sets it equal to the params id
    const messageIndex = messages.findIndex(message => message.id == deleteID);
    //splice removes that message id's index from the array, 1 item removed
    messages.splice(messageIndex, 1);
    //response of the arr with the item removed from the arr
    res.json(messages);
}

//exporting functions
module.exports = {
    createMessage: createMessage,
    readMessage: readMessage,
    updateMessage: updateMessage,
    deleteMessage: deleteMessage
};