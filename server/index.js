const express = require('express');
const app = express();
const PORT = 3001;

//import controllers
const messages_controller = require('./controllers/messages_controller')


//parse json
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

//CRUD
app.post('/api/messages', messages_controller.createMessage);
app.get('/api/messages', messages_controller.readMessage);
app.put('/api/messages/:id', messages_controller.updateMessage);
app.delete('/api/messages/:id', messages_controller.deleteMessage);

//app listening on 3001
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});