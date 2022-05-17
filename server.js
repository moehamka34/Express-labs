const express = require('express');
const app = express();

const name = [
    "Hello",
    "Whats up <name>",
    "<name> It's so great to see you",

  ]

const ballResponse = 
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get('/greeting', (req, res) => {
    res.send('Hello, stranger')
});

app.get("/:name", (req, res) => {
    res.send("Whats up " + req.params.name)
  });

  app.get("/tip/:total/:tipPercentage", (req, res) => {
    let tip = req.params.total * (req.params.tipPercentage / 100);
    res.send("" + tip);
  });

  app.get("/magic/Will%20I%20Be%20A%20Millionaire", (req, res) => {
    let randomIndex = Math.floor(Math.random() * ballResponse.length)
    res.send(ballResponse[randomIndex])
  });


app.listen(3000, () => {
    console.log('Express is listening for requests from the browser on port 3000');
});