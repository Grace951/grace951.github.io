let path = require('path');
let express = require('express');
let publicPath = path.resolve(process.cwd(), "./apiserver/public");
const app = express()
let port = 3200;
let all_details = require("./public/details.json");

app.get("/work/:id/details.json",(req, res)=>{
	let id = req.params.id;
	console.log(all_details[id])
	res.status(200).send(all_details[id]);
});
app.use(express.static(publicPath));

app.listen(port)

