const express = require("express");
const router = express.Router();
const timestamp = require("./timestamp");
const path = require("path");

router.route("/timestamp/:date_string").get(timestamp.parse);
router.get("*", (req, res) => {
	res.status(200).send(req.protocol + '://' + req.get("host"));
	//res.sendFile(path.join(__dirname, "../src", req.originalUrl));
});
module.exports = router;
