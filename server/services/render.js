const axios = require("axios");

exports.homeRouter = (req, res) => {
  //make a request to api user
  axios
    .get("http://localhost:3000/api/user/")
    .then(function (response) {
      console.log(response.data);
      res.render("index", { users: response.data});
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.add_user = (req, res) => {
  res.render("add_user");
};
exports.update_user = (req, res) => {
  res.render("update_user");
};
