import React from 'react';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

function Admin(props){
  return(
    <div>
    <ul>
      <li>
        <Link to="/admin">admin</Link>
      </li>
      <li>
        <Link to="/admin/user">admin/user</Link>
      </li>
      <li>
        <Link to="/admin/category">admin/category</Link>
      </li>
      <li>
        <Link to="/">home</Link>
      </li>
    </ul>
      <Switch>
      <Route path={'/admin'} exact component={Welcome} />
      <Route path={`/admin/user`} component={UserList} />
      <Route path={`/admin/category`} component={CategoryList} />
      </Switch>
    </div>
  )
}

function Welcome(props){
  return <p>Welcome</p>
}
function UserList(props){
  return <p>UserList</p>
}
function CategoryList(props){
  return <p>CategoryList</p>
}

function Home(props){
  return(
    <div>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/p/1326">article</Link>
      </li>
      <li>
        <Link to="/all/1">articleList</Link>
      </li>
      <li>
        <Link to="/admin">admin</Link>
      </li>
    </ul>
      <Switch>
        <Route path={`/`} static exact component={ArticleList}/>
        <Route path={`/p/:pid`} component={ArticleDetail}/>
        <Route path={`/:category`} component={ArticleList}/>
      </Switch>
    </div>
  )
}
function ArticleList(props){
  return <p>articleList</p>
}
function ArticleDetail(props){
  return <p>ArticleDetail</p>
}

class Routes extends React.Component{
  render(){
    return (
      <div>
        <Router>
        <Switch>
        <Route  path="/admin" component={Admin}/>  
        <Route  component={Home}/>
        </Switch>          
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<Routes/>,document.getElementById('root'));