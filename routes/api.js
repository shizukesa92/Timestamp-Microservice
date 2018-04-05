const express = require("express");
const router = express.Router();
const timestamp = require("./timestamp");
router.route("/timestamp/api/v1/:query").get(timestamp.parse);
router.route("/timestamp/api/:query").get(timestamp.parse);
router.route("/timestamp/:query").get(timestamp.parse);
// If it's not an api request, display the index page (found in frontend)
router.get("*", (req, res) => {
	const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
	res.render("index.html", {
		fullUrl: fullUrl,
		title: "Timestamp Microservice"
	});
});
module.exports = router;
