const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendDile(path.join(__dirname, "../public/home.html"));
    });
}