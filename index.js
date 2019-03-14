const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8888;

app.use(bodyParser.json());

app.get("/status", (req, res) => {
    const localtime = (new Date()).toLocaleTimeString();

    res.status(200).send(`time is ${localtime}`);
})

app.get("*", (req, res) => {
    res.sendStatus(404);
})

app.post('/login', (req,res) => {
    const user = req.body.username;
    res.status(200).send(`you logged in with ${user}`);
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));