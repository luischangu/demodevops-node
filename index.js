const express = require('express');

const app = express();

app.listen(5500, () => {
    console.log('Listening on port XX00');
});

//Sample GET request
app.get('/test2', (req, res) => {
    res.send('Hello World');
});

//Sample GET request with parameters and JSON
app.get('/test', (req, res) => {
    res.send({ name: 'John', age: 25 });
});
