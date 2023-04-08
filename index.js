const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
	res.send("Hello World");
});

app.post("post_name", async (req, res) => {
	let { name } = req.body;
	console.log(name);
})

app.listen(port, () => {
	console.log(`Listen at http://localhost:${port}`);
});
