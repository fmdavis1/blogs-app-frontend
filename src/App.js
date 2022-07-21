import './App.css';
import {Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import Landing from './components/pages/Landing'
import Home from './components/pages/Home'
import UpdateBlogs from './components/forms/UpdateBlogs';
import Giphy from './components/pages/Giphy'




function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="container">
     
            <h1> Blogs Frontend</h1>
            <Switch>
              <Route exact path='/' render={routerProps => <Landing {...routerProps} setUser={setUser} /> }/>
              <Route  path='/home' render={routerProps => <Home {...routerProps} user={user} setUser={setUser}/>}/>
              <Route path='/update/:id' component={UpdateBlogs}/>
            </Switch>
    </div>
  );
}

export default App;
