const express = require("express");
const app = express();
const http = require("http");

const api = require("./routes/api");

app.use(express.static("dist"));
app.use("/api/v1", api);
app.use("/api/", api);
app.use("/", api);
app.set("view engine", "pug");


app.listen(3000, () => console.log("Example app listening on port 3000!"));
