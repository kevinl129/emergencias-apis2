const amqp = require('amqplib');
const dotenv = require('dotenv');

dotenv.config();

let connection;
let channel;

async function connectRabbitMQ() {
  if (!connection) {
    //connection = await amqp.connect(process.env.RABBITMQ_URL);
    //channel = await connection.createChannel();
    //await channel.assertQueue('citypass-events');  // Cola para eventos (define con grupo 1)
    console.log('RabbitMQ no configurado (simulación)');
  }
  return channel;
}

async function publishEvent(eventType, payload) {
  try {
    //const ch = await connectRabbitMQ();
    //const message = JSON.stringify({ type: eventType, data: payload });
    //ch.sendToQueue('citypass-events', Buffer.from(message));
    //console.log(`Evento publicado: ${eventType}`);
  } catch (error) {
    console.error('Error al publicar evento:', error);
  }
}

module.exports = { publishEvent };