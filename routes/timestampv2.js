const moment = require("moment");

module.exports = {
	parse: (req, res) => {
		let processedDate = {
			"unix": null,
		}

		processedDate.unix = new Date();

		res.send(processedDate);
	}
}
