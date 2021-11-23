const axios = require("axios");

exports.homeRouter = (req, res) => {
  //make a request to api user
  axios
    .get("http://localhost:3000/api/user/")
    .then(function (response) {
      // console.log(response.data);
      res.render("index", { showUser: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.add_user = (req, res) => {
  res.render("add_user");
};
exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/user", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
