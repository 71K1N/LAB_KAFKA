const { Kafka, Partitioners } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092'],
})

exports.sendMessage = async (message) => {
    const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })
    await producer.connect()
    await producer.send({
        topic: 'messages',
        messages: [{ value: message }],
    })
        .then((result) => { console.log(result); })
        .catch((err) => { console.log(err); })
    await producer.disconnect()
}

exports.readMessages = async (cb) => {
    const consumer = kafka.consumer({ groupId: 'processor' })

    await consumer.connect()
    await consumer.subscribe({ topic: 'lance', fromBeginning: true })

    await consumer.run({
        eachMessage: async (result) => {
            cb(result);
        },
    })
}