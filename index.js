const express = require('express');

const app = express();
const PORT = process.env.PORT || 8888;

app.get("/status", (req, res) => {
    const localtime = (new Date()).toLocaleTimeString();

    res.status(200).send(`time is ${localtime}`);
})

app.get("*", (req, res) => {
    res.sendStatus(404);
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));