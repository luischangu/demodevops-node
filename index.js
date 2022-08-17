const express = require('express');

const app = express();

app.listen(5500, () => {
    console.log('Listening on port XX00');
});

//Sample GET request
app.get('/test2', (req, res) => {
    res.send('Hello World');

    //Insecure code example
    const name = req.query.name;
    const age = req.query.age;
    console.log(name, age);
});

//Sample GET request with parameters and JSON
app.get('/test', (req, res) => {
    res.send({ name: 'John', age: 25 });
});

app.get('/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    res.send({ user: username, pwd: password });
});  