const express = require('express');
const bodyParser = require('body-parser'); // latest version of exressJS now comes with Body-Parser!
const cors = require('cors');
const UserInfo = require('./Controllers/UserInfo');






const app = express();

app.use(cors())
app.use(express.json()); // latest version of exressJS now comes with Body-Parser!
app.use(bodyParser.json());



app.post('/split-payments/compute', (req,res) => {UserInfo.UserInfo(req,res)})


app.listen(process.env.PORT || 3000, ()=> {
  console.log(`app is running on port ${process.env.PORT || 3000}`);
})
