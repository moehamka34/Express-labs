const express = require ( 'express')
const app = express();
const greeting = [
    "Hello, Stranger",
    "Whats's up, Moe!",
    "Hey man! How's it going?",
    "Whats up buddy!"
    
]

// greeting route

app.get('/:name', (req, res) =>{
    res.send(greeting[req.params.name]);
});


app.listen(3000, () => {
    console.log('Hello, there');
})