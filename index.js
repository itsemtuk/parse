const express = require('express');
const ParseServer = require('parse-server').ParseServer;

const app = express();

const parseServer = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev',
  appId: 'yourAppId',
  masterKey: 'yourMasterKey',
  serverURL: 'http://localhost:1337/parse'
});

app.use('/parse', parseServer);

const port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log(`Parse Server running on port ${port}`);
});
