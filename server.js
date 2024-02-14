const express = require('express');
const serv = express();

serv.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
serv.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
