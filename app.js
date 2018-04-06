const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const api = require("./routes/api");

app.use("/api/v1", api);
app.use("/api/", api);
app.use("/", api);
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/src/index.html"));
});



app.listen(3000, () => console.log("Example app listening on port 3000!"));
