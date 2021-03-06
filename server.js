const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (require, response) => {
  response.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () =>{
  console.log(`Server listening on ${PORT} port`);
});

