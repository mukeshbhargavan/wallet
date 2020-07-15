const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
// An api endpoint that returns a short list of items
app.get('/api/getList', cors(), (req,res) => {
	var list = ["item1", "item2", "item3"];
	res.json(list);
	console.log('Sent list of items');
});

const port = process.env.PORT || 5000;
app.listen(port);
