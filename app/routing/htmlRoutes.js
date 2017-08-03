var path = require("path");

module.exports = function(app) {

  app.get("/quiz", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/quiz.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};