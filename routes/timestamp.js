const moment = require("moment");

module.exports = {
	parse: (req, res) => {
		const date = req.params.date_string;
		let processedDate = {
			"unix": null,
			"utc": null
		}
		if (+date >= 0) {
			processedDate.unix = +date;
			processedDate.utc = new Date(+date).toUTCString();
		} else
		if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
			processedDate.unix = moment(date, "MMMM D, YYYY").format("X");
			processedDate.utc = new Date(date).toUTCString();
		} else if (date = "") {
			processedDate.unix = new Date();
			processedDate.utc = new Date().toUTCString();
		} else {
			processedDate.unix = null;
			processedDate.utc = "Invalid date";
		}
		res.send(processedDate);
	}
}
