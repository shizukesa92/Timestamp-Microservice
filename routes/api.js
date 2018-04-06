const express = require("express");
const router = express.Router();
const timestamp = require("./timestamp");
const path = require("path");

router.route("/timestamp/api/v1/:query").get(timestamp.parse);
router.route("/timestamp/api/:query").get(timestamp.parse);
router.route("/timestamp/:query").get(timestamp.parse);
router.get("*", (req, res) => {
	res.status(200).send(req.protocol + '://' + req.get("host"));
	res.sendFile(path.join(__dirname, "../src", req.originalUrl));
});
module.exports = router;
