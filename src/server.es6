require('marko/node-require').install();

let express = require('express');
let template = require('./template.marko');

let app = express();

app.use(require('lasso/middleware').serveStatic());

app.get('/', function(req, res) {
    template.render({

    }, res);
});

app.listen(8080, function(err) {
    console.log('Listening on port 8080');

    if (process.send) {
        process.send('online');
    }
});