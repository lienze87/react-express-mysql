/*
Navicat MySQL Data Transfer

Source Server         : Localhost
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : ezdb

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2018-05-17 12:29:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) unsigned NOT NULL,
  `author` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `date_utc` datetime NOT NULL,
  `date_modify` datetime NOT NULL,
  `title` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `detail` longtext COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `detail_md` longtext COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `link_num` int(10) unsigned NOT NULL DEFAULT '0',
  `status` enum('close','open') COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'open',
  `comment_status` enum('close','open') COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'open',
  `comment_count` bigint(20) NOT NULL DEFAULT '0',
  `filter_key` longtext COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `read_count` bigint(20) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('1', '182537', 'root', '2018-03-12 12:00:00', '2018-04-05 15:07:16', '青春', '<p>所有的结局都已写好</p>\r\n<p>所有的泪水也都已启程</p>\r\n<p>却忽然忘了是怎样的一个开始</p>\r\n<p>在那个古老的不再回来的夏日</p>\r\n<p>无论我如何地去追索</p>\r\n<p>年轻的你只如云影掠过</p>\r\n<p>而你微笑的面容极浅极浅</p>\r\n<p>逐渐隐没在日落后的群岚</p>\r\n<p>遂翻开那发黄的扉页</p>\r\n<p>命运将它装订得极为拙劣</p>\r\n<p>含着泪，我一读再读</p>\r\n<p>却不得不承认</p>\r\n<p>青春是一本太仓促的书</p>', '<p>所有的结局都已写好</p>\r\n<p>所有的泪水也都已启程</p>\r\n<p>却忽然忘了是怎样的一个开始</p>\r\n<p>在那个古老的不再回来的夏日</p>\r\n<p>无论我如何地去追索</p>\r\n<p>年轻的你只如云影掠过</p>\r\n<p>而你微笑的面容极浅极浅</p>\r\n<p>逐渐隐没在日落后的群岚</p>\r\n<p>遂翻开那发黄的扉页</p>\r\n<p>命运将它装订得极为拙劣</p>\r\n<p>含着泪，我一读再读</p>\r\n<p>却不得不承认</p>\r\n<p>青春是一本太仓促的书</p>', '<p>所有的结局都已写好</p>', 'poetry', '0', 'open', 'open', '1', 'poetry', '0');
INSERT INTO `articles` VALUES ('2', '187624', '席慕容', '2018-03-23 09:07:18', '2018-04-03 15:07:22', '错误', '<p>假如爱情可以解释、誓言可以修改<br>假如你我的相遇，可以重新安排<br>那么，生活就会比较容易<br>假如，有一天<br>我终于能将你忘记<br>然而，这不是随便传说的故事<br>也不是明天才要上演的戏剧<br>我无法找出原稿然后将你将你一笔抹去</p>\n', '<p>假如爱情可以解释、誓言可以修改<br>假如你我的相遇，可以重新安排<br>那么，生活就会比较容易<br>假如，有一天<br>我终于能将你忘记<br>然而，这不是随便传说的故事<br>也不是明天才要上演的戏剧<br>我无法找出原稿然后将你将你一笔抹去</p>\n<p>假如爱情可以解释、誓言可以修改<br>假如你我的相遇，可以重新安排<br>那么，生活就会比较容易<br>假如，有一天<br>我终于能将你忘记<br>然而，这不是随便传说的故事<br>也不是明天才要上演的戏剧<br>我无法找出原稿然后将你将你一笔抹去</p>\n<p>假如爱情可以解释、誓言可以修改<br>假如你我的相遇，可以重新安排<br>那么，生活就会比较容易<br>假如，有一天<br>我终于能将你忘记<br>然而，这不是随便传说的故事<br>也不是明天才要上演的戏剧<br>我无法找出原稿然后将你将你一笔抹去</p>\n<p>假如爱情可以解释、誓言可以修改<br>假如你我的相遇，可以重新安排<br>那么，生活就会比较容易<br>假如，有一天<br>我终于能将你忘记<br>然而，这不是随便传说的故事<br>也不是明天才要上演的戏剧<br>我无法找出原稿然后将你将你一笔抹去</p>\n', '<p>假如爱情可以解释、誓言可以修改</p>\n', 'poetry', '0', 'open', 'open', '0', 'poetry', '0');
INSERT INTO `articles` VALUES ('3', '186594', '席慕容', '2018-04-08 08:47:45', '2018-04-17 16:55:13', '古乐府', '<p>如何让你遇见我<br>在我最美丽的时刻为这<br>我已在佛前求了五百年<br>求他让我们结一段尘缘<br>佛于是把我化作一棵树<br>长在你必经的路旁<br>阳光下慎重地开满了花<br>朵朵都是我前世的盼望<br>当你走近请你细听<br>那颤抖的叶是我等待的热情<br>而当你终于无视地走过<br>在你身后落了一地的<br>朋友啊那不是花瓣<br>是我凋零的心<br>只缘感君一回顾，使我思君暮与朝</p>\n', '<p>如何让你遇见我<br>在我最美丽的时刻为这<br>我已在佛前求了五百年<br>求他让我们结一段尘缘<br>佛于是把我化作一棵树<br>长在你必经的路旁<br>阳光下慎重地开满了花<br>朵朵都是我前世的盼望<br>当你走近请你细听<br>那颤抖的叶是我等待的热情<br>而当你终于无视地走过<br>在你身后落了一地的<br>朋友啊那不是花瓣<br>是我凋零的心<br>只缘感君一回顾，使我思君暮与朝</p>\n', '<p>如何让你遇见我<br>在我最美丽的时刻为这</p>\n', 'poetry', '0', 'open', 'open', '0', 'poetry', '0');
INSERT INTO `articles` VALUES ('4', '152684', '海子', '2015-07-07 00:50:24', '2018-04-17 16:27:26', '面朝大海，春暖花开', '<p>从明天起，做一个幸福的人<br>喂马、劈柴，周游世界<br>从明天起，关心粮食和蔬菜<br>我有一所房子，面朝大海，春暖花开<br>从明天起，和每一个亲人通信<br>告诉他们我的幸福<br>那幸福的闪电告诉我的<br>我将告诉每一个人<br>给每一条河每一座山取一个温暖的名字<br>陌生人，我也为你祝福<br>愿你有一个灿烂的前程<br>愿你有情人终成眷属<br>愿你在尘世获得幸福<br>我只愿面朝大海，春暖花开</p>\n', '<p>从明天起，做一个幸福的人<br>喂马、劈柴，周游世界<br>从明天起，关心粮食和蔬菜<br>我有一所房子，面朝大海，春暖花开<br>从明天起，和每一个亲人通信<br>告诉他们我的幸福<br>那幸福的闪电告诉我的<br>我将告诉每一个人<br>给每一条河每一座山取一个温暖的名字<br>陌生人，我也为你祝福<br>愿你有一个灿烂的前程<br>愿你有情人终成眷属<br>愿你在尘世获得幸福<br>我只愿面朝大海，春暖花开</p>\n', '<p>从明天起，做一个幸福的人<br>喂马、劈柴，周游世界</p>\n', 'poetry', '0', 'open', 'open', '0', 'poetry', '0');
INSERT INTO `articles` VALUES ('5', '109911', 'root', '2018-04-18 09:27:45', '2018-04-18 09:27:45', 'html', '<p>新建文章测试</p>\n', '新建文章测试', '<p>新建文章测试</p>\n', 'html', '0', 'open', 'open', '0', 'test', '0');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `count` bigint(20) unsigned NOT NULL DEFAULT '0',
  `note` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `date_modify` datetime NOT NULL,
  `status` enum('close','open') COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'open',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', 'poetry', '4', '诗歌', '2018-04-17 11:24:56', 'open');
INSERT INTO `category` VALUES ('2', 'html', '1', 'HTML', '2018-04-17 11:25:01', 'open');
INSERT INTO `category` VALUES ('3', 'css', '0', 'CSS', '2018-04-17 11:25:05', 'open');
INSERT INTO `category` VALUES ('4', 'react', '0', 'React', '2018-04-17 11:25:09', 'open');

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) unsigned NOT NULL,
  `parent_id` bigint(20) unsigned NOT NULL DEFAULT '10000',
  `author` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `receiver` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `date_utc` datetime NOT NULL,
  `content` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `date_modify` datetime NOT NULL,
  `status` enum('close','open') COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'open',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES ('1', '182537', '182537', 'root', 'theme', '2018-04-10 17:16:45', '这是一条评论', '2018-04-19 09:15:29', 'open');
INSERT INTO `comments` VALUES ('2', '182537', '1', 'user1', 'root', '2018-04-12 08:45:54', '这是评论的评论', '2018-04-19 08:46:23', 'open');
INSERT INTO `comments` VALUES ('3', '182537', '1', 'user2', 'user1', '2018-04-18 09:13:51', '这是又一条评论', '2018-04-19 09:17:27', 'open');
INSERT INTO `comments` VALUES ('4', '152684', '152684', 'root', 'theme', '2018-04-13 09:16:59', '这篇文章很棒！', '2018-04-19 09:17:31', 'open');
INSERT INTO `comments` VALUES ('5', '182537', '182537', 'root', 'theme', '2018-04-20 09:52:20', '这是一条测试评论', '2018-04-20 09:52:20', 'open');
INSERT INTO `comments` VALUES ('6', '182537', '2', 'root', 'user1', '2018-04-20 10:06:22', '这是测试评论2', '2018-04-20 10:06:22', 'open');
INSERT INTO `comments` VALUES ('7', '109911', '109911', 'root', 'theme', '2018-05-14 16:17:04', '这是一条测试评论', '2018-05-14 16:17:04', 'open');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `name` varchar(60) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `password` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `nickname` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `email` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `date_register` datetime NOT NULL,
  `date_modify` datetime NOT NULL,
  `status` enum('close','open') COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'open',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', 'root', '123456', '管理员', '12345@qq.com', '2018-03-08 11:27:18', '2018-03-08 10:00:51', 'open');
INSERT INTO `users` VALUES ('2', 'user', 'user', '234567', '飞呀', '234567@qq.com', '2018-03-12 03:27:26', '2018-04-18 15:05:17', 'open');
