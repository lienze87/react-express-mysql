export function translate(atr){
  const dictioary={
    author:"作者",
    date_utc:"创建时间",
    date_register:"注册时间",
    date_modify:"修改时间",
    title:"标题",
    category:"分类",
    status:"状态",
    excerpt:"概述",
    comment_status:"评论状态",
    comment_count:"评论数",
    filter_key:"关键词",
    role:"角色",
    name:"名称",
    password:"密码",
    nickname:"昵称",
    email:"邮箱",
    count:"数量",
    note:"说明"
  };
  return dictioary[atr]!==undefined?dictioary[atr]:atr;
}