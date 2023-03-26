// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(ACcf914d409cb3ddc2497eb3ca5f4552fe, fb47c962ec8ec68bb6cb59997671b98d);

client.messages
  .create({
     body: 'You have class in 30 mins!',
     from: '+18663485266',
     to: '+17037319317'
   })
  .then(message => console.log(message.sid));