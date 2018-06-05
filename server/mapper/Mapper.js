module.exports = {
  //所有sql语句均使用占位符，较为灵活且可以避免SQL注入
  article: {
    insert: `insert into articles (pid,author,date_utc,date_modify,title,detail,detail_md,excerpt,category,
      link_num,status,comment_status,comment_count,filter_key) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    update: 'update articles set ? where pid=?',
    delete: `update articles set status='close' where pid=?`,
    queryById: 'select pid,author,date_utc,title,detail_md,category,comment_count from articles where pid=?',
    queryByType: `select pid,author,date_utc,title,excerpt,category,comment_count from articles where 
                category=? and status='open' order by id DESC limit ?,?`,
    queryAll: `select pid,author,date_utc,title,excerpt,category,comment_count from articles where 
              status='open' order by id DESC limit ?,?`,
    adminQueryList:`select pid,author,date_utc,title,category,comment_status,comment_count from articles where
                    status='open' order by id DESC limit ?,?`,
    queryHotList:`select pid,author,title from articles where status='open' order by read_count DESC limit 0,5` ,
    queryCount:`select COUNT(id) from articles where status='open'`,
    updateReadCount:'update articles set read_count=? where pid=?',
    updateCommentCount:'update articles set comment_count=? where pid=?'
  },
  category: {
    insert: 'insert into category (name,count,note,status) values (?,?,?,?)',
    update: 'update category set name=?,count=?,note=? where id=?',
    delete: `delete from category where id=? and status='open'`,
    query: `select id,name,count,note from category where status='open' order by id limit ?,?`
  },
  user: {
    insert: 'insert into users (role,name,password,nickname,email,date_register,date_modify) values(?,?,?,?,?,?,?)',
    update: 'update users set ? where id=?',
    delete: `update users set status='close' where id=?`,
    queryByName:`select id,role,name,password,nickname,email,date_register from users where status='open' and name=?`,
    adminQueryList:`select id,role,name,password,nickname,email,date_register from users where status='open' order by id DESC limit ?,?`
  },
  comment:{
    insert:'insert into comments (pid,author,receiver,date_utc,content,parent_id,date_modify) values (?,?,?,?,?,?,?)',
    delete:`update comments set status='close' where id=?`,
    queryByPid:`select id,pid,author,receiver,date_utc,content,parent_id from comments where pid=? and status='open' order by id DESC`,
    queryByCid:`select id,pid,author,receiver,date_utc,content,parent_id from comments where parent_id=? and status='open' order by id ASC`  
  }
}