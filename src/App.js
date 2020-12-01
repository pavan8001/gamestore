
import React, {Component} from 'react';
import {BrowserRouter as Router , Route , Link,Switch} from 'react-router-dom'
import Welcome from './Welcome'
import Login from './Login'
import Register from './Registration'
import Payment from './payment'
//import HomePage from './Homepage'
import Show from './showacc'
import {topSellers, newReleasess, upcoming, specials, virtualReality, controllerFriendly, freetoPlay, earlyAccess, action, adventure, casual, indie, massivelyMultiplayer, racing, rpg, simulation, sports, strategy} from './components/preview.component'
import content from './components/content.component'
class App extends Component
{
render()
{
  return(
<div>
    <Router>



      <Route exact path='/register' component={Register}></Route>
      <Link to="/register" >Register</Link>
      <br/>
      <Route exact path='/preview' component={strategy}></Route>
      <Link to="/preview" >preview</Link>
      <br/>
      <Route exact path='/content' component={content}></Route>
      <Link to="/content" >content</Link>
      <br/>
       <Route exact path="/login" component={Login}></Route>
       <Link to="/login" >login</Link>
       <br/>
     <Route exact  path="/show" component={Show}></Route>
     <Link to="/show" >show</Link>
     <br/>
   <Route exact path="/" component={Welcome} ></Route>
   <Link to="/" >Wel</Link>


   <Route exact path="/payment" component={Payment}></Route>



</Router>
</div>

  );}}








export default App;
