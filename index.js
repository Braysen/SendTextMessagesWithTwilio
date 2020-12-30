require('dotenv').config();

//Estos datos fueron creados a travez de Twilio
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to:process.env.MY_PHONE_NUMBER,
    from: process.env.PHONE,
    body:'Envio de mensaje a travez de twilio'
}).then(message => console.log(message.sid));
