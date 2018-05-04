const express = require('express');
const router = express.Router();
const articleAPI = require('../api/article');
const userAPI=require('../api/user');
const categoryAPI=require('../api/category');
const commentAPI=require('../api/comment');

router.get('/category/:page',function(req,res){
  categoryAPI.get_category_list(req,res);
});

router.get('/all/:page',function(req,res){
  articleAPI.get_article_list_all(req,res);
});

router.get('/p/:pid', function (req, res) {
  articleAPI.get_article_detail(req, res);
});

router.get('/comment/:pid',function(req,res){
  commentAPI.get_comment_list(req,res);
});

router.post('/comment/add',function(req,res){
  commentAPI.add_comment(req,res);
});

router.post('/login',function(req,res){
  userAPI.login(req,res);
});

router.get('/:category/:page', function (req, res) {
  articleAPI.get_article_list_category(req, res);
});

module.exports=router;