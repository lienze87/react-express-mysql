export function ajax(method, url, body, next) {
  if (url !== "") {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.response);
          var data = JSON.parse(xhr.responseText);
          return next(data, xhr.status);
        } else {
          console.log(xhr.status);
          return next({ code: xhr.status, message: "ajax失败" }, xhr.status);
        }
      }
    };
    //校验请求方法是否正确
    if (method === "GET") {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');      
      xhr.send(body);
    }else if(["HEAD","POST","PUT","DELETE","DONNECT","OPTIONS","TRACE","PATCH"].indexOf(method)!==-1){
      xhr.send(body);
    }
  }
}