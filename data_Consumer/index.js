const messageModel = require('./model/message');
const { readMessages } = require('./util/kafka');
const db = require('./util/database')

function persistMessageToDb({ message }) {
    console.log(message.value.toString(), "processado");
    // messageModel.create(JSON.parse(message.value))
    //     .then(() => { console.log("Dados registrados"); })
    //     .catch((err) => { err })
}

// db.sync()
//     .then(() => {
//         readMessages(persistMessageToDb)
//     })
//     .catch((err) => { console.log(err); })

readMessages(persistMessageToDb)