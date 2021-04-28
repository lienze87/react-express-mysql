const express = require("express");
const router = express.Router();
const articleAPI = require("./api/article");
const userAPI = require("./api/user");

router.get("/search/:key", function (req, res) {
  console.log(res.headersSent);
  res.json({ message: "your search of " + req.params.key + " no result" });
});

router.get("/list/all/:page", function (req, res) {
  articleAPI.get_article_list_all(req, res);
});

router.get("/p/:pid", function (req, res) {
  articleAPI.get_article_detail(req, res);
});

router.post("/login", function (req, res) {
  userAPI.login(req, res);
});

router.get("/admin/article/:page", function (req, res) {
  articleAPI.get_article_list_admin(req, res);
});

router.get("/admin/p/:pid", function (req, res) {
  articleAPI.get_article_detail(req, res);
});

router.post("/admin/article/add", function (req, res) {
  articleAPI.add_article(req, res);
});

router.post("/admin/article/update", function (req, res) {
  articleAPI.update_article(req, res);
});

router.post("/admin/article/delete", function (req, res) {
  articleAPI.delete_article(req, res);
});

router.get("/admin/user/:page", function (req, res) {
  userAPI.get_user_list(req, res);
});

router.post("/admin/user/add", function (req, res) {
  userAPI.add_user(req, res);
});

router.post("/admin/user/update", function (req, res) {
  userAPI.update_user(req, res);
});

router.post("/admin/user/delete", function (req, res) {
  userAPI.delete_user(req, res);
});

module.exports = router;
