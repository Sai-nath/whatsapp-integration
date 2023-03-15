const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.json());

app.get('/webhook', (req, res) => {
  console.log('Webhook received!');
  console.log(req.body); // Do something with the webhook payload here
  let mode = req.query["hub.mode"];
  let challenge = req.query["hub.challenge"];
  let token = req.query["hub.verify_token"];
  
  const mytoken = "";
  if(mode && token){
    if (mode === "subscribe" && token === mytoken){
      res.status(200).send(challenge);
    }else{
      res.status(403);
    }
  }
});

app.post('/webhook', (req, res) => {
  console.log('Webhook received!');
  console.log(req.body); // Do something with the webhook payload here
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Webhook app listening at http://localhost:${port}`);
});
