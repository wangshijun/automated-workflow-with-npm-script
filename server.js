const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('./dist'));
app.use(morgan('combined'));

app.listen(port, err => {
  if (err) {
    console.error('server start error', err); // eslint-disable-line
    process.exit(1);
  }

  console.log(`server started at port ${port}`);  // eslint-disable-line
});

