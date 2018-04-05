const express = require("express");
const router = express.Router();
const timestamp = require("./timestamp");
const path = require('path');

router.route("/timestamp/api/v1/:query").get(timestamp.parse);
router.route("/timestamp/api/:query").get(timestamp.parse);
router.route("/timestamp/:query").get(timestamp.parse);
router.get("*", (req, res) => {
	const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
	res.sendFile(path.join(__dirname, '../src', 'index.html'));
});
module.exports = router;
