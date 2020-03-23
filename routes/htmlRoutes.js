const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/aboutme", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/aboutMe.html"));
    });
    app.get("/projects", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/projects.html"));
    });
    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });
}