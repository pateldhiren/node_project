const express = require('express')();
const bodyParser = require('body-parser');
express.use(bodyParser.json());

//adding CI
express.post('/display', function(req, res) {
    console.log('data received: ', JSON.stringify(req.body));
    res.send('received ' + req.body + '\n');
});

express.listen(3000, function() {
    console.log('Display service is listening on port ' + 3000);
});

