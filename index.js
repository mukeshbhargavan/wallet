const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require("fs");

const app = express();
app.use(cors());

// An api endpoint that returns a short list of items
app.get('/api/getWalletList', cors(), (req,res) => {
	fs.readFile("./config/wallet.json", function(err, data) {
	    if (err) throw err;
	    res.send(JSON.parse(data));
	});

});

const port = process.env.PORT || 5000;
app.listen(port);
