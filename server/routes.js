const express = require('express');
const router = express.Router();
const articleAPI = require('./api/article');
const userAPI=require('./api/user');
const categoryAPI=require('./api/category');
const commentAPI=require('./api/comment');

router.get('/', function(req, res,next) {
  res.json({ message: 'hello! welcome to our api!' });   
});

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

router.get('/admin/article/:page',function(req,res){
  articleAPI.get_article_list_admin(req,res);
});

router.get('/admin/p/:pid',function(req,res){
  articleAPI.get_article_detail(req,res);
});

router.post('/admin/article/add',function(req,res){
  articleAPI.add_article(req,res);
});

router.post('/admin/article/update',function(req,res){
  articleAPI.update_article(req,res);
});

router.post('/admin/article/delete',function(req,res){
  articleAPI.delete_article(req,res);
});

router.get('/admin/user/:page',function(req,res){
  userAPI.get_user_list(req,res);
});

router.post('/admin/user/add',function(req,res){
  userAPI.add_user(req,res);
});

router.post('/admin/user/update',function(req,res){
  userAPI.update_user(req,res);
})

router.post('/admin/user/delete',function(req,res){
  userAPI.delete_user(req,res);
})

router.get('/admin/category/:page',function(req,res){
  categoryAPI.get_category_list(req,res);
})

router.get('/:category/:page', function (req, res) {
  articleAPI.get_article_list_category(req, res);
});


module.exports = router;