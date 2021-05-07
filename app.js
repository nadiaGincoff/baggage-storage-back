const express = require('express');
const cors = require("cors");
const app = express();
const router = require("./routes")
require("dotenv").config()

// set port, listen for requests
const PORT = process.env.PORT || 4000;

const db = require("./database/config/db");
require('./database/models/Users')
require('./database/models/PackageStatuses')
require('./database/models/PackageTypes')
require('./database/models/Storage')

app.use(cors());

db.sync()
  .then(() => {
  console.log('db connected')
  })
  .catch(err => console.log("Error: " + err));

// Routing
app.use('/api/v1', router());
app.use(express.urlencoded({ extended: true }));
 // To parse the incoming requests with JSON payloads
app.use(express.json())

app.listen(PORT, console.log(`Server started on port ${PORT}`));






