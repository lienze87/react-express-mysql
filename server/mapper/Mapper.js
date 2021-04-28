module.exports = {
  //所有sql语句均使用占位符，较为灵活且可以避免SQL注入
  article: {
    create: `
      CREATE TABLE IF NOT EXISTS article(
        id INT UNSIGNED AUTO_INCREMENT,
        pid INT UNSIGNED, 
        author VARCHAR( 255 ) NOT NULL,
        title VARCHAR( 255 ) NOT NULL,
        detail TEXT NOT NULL,
        detail_md MEDIUMTEXT NOT NULL,
        date_utc DATETIME,
        date_modify DATETIME,
        filter_key VARCHAR( 255 ) NOT NULL,
        status ENUM( '0', '1' ) NOT NULL DEFAULT '1', 
        PRIMARY KEY ( id )
    )`,
    insert: `insert into articles (pid,author,date_utc,date_modify,title,detail,detail_md,
      status,filter_key) values ( ?, ?, ?, ?, ?, ?, ?, ?, ? )`,
    update: "update articles set ? where pid=?",
    delete: `update articles set status='0' where pid=?`,
    queryById:
      "select pid,author,date_utc,title,detail_md from articles where pid=?",
    queryAll: `select pid,author,date_utc,title from articles where 
              status='1' order by id DESC limit ?, ?`,
    adminQueryList: `select pid,author,date_utc,title from articles where
                    status='1' order by id DESC limit ?, ?`,
    queryCount: `select COUNT( id ) from articles where status='1'`,
  },
  user: {
    create: `
      CREATE TABLE IF NOT EXISTS user(
        id INT UNSIGNED AUTO_INCREMENT,
        role ENUM( '1', '2' ) NOT NULL DEFAULT '1', 
        name VARCHAR( 255 ) NOT NULL,
        password VARCHAR( 255 ) NOT NULL,
        nickname VARCHAR( 255 ) NOT NULL,
        email VARCHAR( 255 ) NOT NULL,
        date_register DATETIME,
        date_modify DATETIME,
        status ENUM( '0', '1' ) NOT NULL DEFAULT '1', 
        PRIMARY KEY ( id )
    )`,
    insert:
      "insert into users (role,name,password,nickname,email,date_register,date_modify) values(?, ?, ?, ?, ?, ?, ?)",
    update: "update users set ? where id=?",
    delete: `update users set status='0' where id=?`,
    queryByName: `select id,role,name,password,nickname,email,date_register from users where status='1' and name=?`,
    adminQueryList: `select id,role,name,password,nickname,email,date_register from users where status='1' order by id DESC limit ?, ?`,
  },
};
