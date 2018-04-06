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



app.listen(process.env.PORT || 3000);
