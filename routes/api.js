const express = require("express");
const router = express.Router();
const timestamp = require("./timestamp");
const timestampv2 = require("./timestampv2");
const path = require("path");

router.route("/timestamp/:date_string").get(timestamp.parse);
router.route("/timestamp/").get(timestampv2.parse);

router.get("*", (req, res) => {
	res.status(200).send(req.protocol + '://' + req.get("host"));
	//res.sendFile(path.join(__dirname, "../dist", req.originalUrl));
});
module.exports = router;
