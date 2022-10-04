// KENNY CAUSO - DELIVERABLE_2

const express = require('express');
const app = express();
const usersRouter = require('./users/users.router')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: "server ok!"
    });
});

app.use('/', usersRouter);

app.listen(9000, () => {
    console.log("server active at port 9000");
})
