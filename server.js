const express = require('express');
const bodyParser = require('body-parser'); //Body parser Deprecated!
const cors = require('cors');
const Users = require('./Controllers/Users');

// set the port

const port = process.env.PORT || 8082;



const app = express();
app.use(cors())
app.use(express.json()); // Has body-parser!



app.post('/split-payments/compute', (req,res) => {Users.Users(req,res)})



app.listen( port, () => {
  console.log( `server running http://localhost:${ port }` );
  console.log( `press CTRL+C to stop server` );
});
