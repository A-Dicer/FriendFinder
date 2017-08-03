var resultsData = require("../data/resultsData");

module.exports = function(app) {

  app.get("/api/results", function(req, res) {
    res.json(resultsData);
  });

  app.post("/api/results", function(req, res) {
    
    resultsData.push(req.body);
    res.json(resultsData);
  });
}
