
import React, {Component} from 'react';
import {BrowserRouter as Router , Route , Link,Switch} from 'react-router-dom'
import Login from './Login'
import Homepage from './homepage'
import Register from './Registration'
import Payment from './payment'
import Show from './showacc'
import Content from "./content.component"
import CART from "./Purchasedetails"
import {topSellers, upcoming, specials, virtualReality, controllerFriendly, freetoPlay, earlyAccess, action, adventure, casual, indie, massivelyMultiplayer, racing, rpg, simulation, sports, strategy} from "./preview.component"

class App extends Component
{
render()
{
  return( 
    <Router>
      <Route exact path="/" component={Homepage}></Route>
      
      <Route exact path="/upcoming" component={upcoming}></Route>
      <Route exact path="/specials" component={specials}></Route>
      <Route exact path="/virtualreality" component={virtualReality}></Route>
      <Route exact path="/controllerfriendly" component={controllerFriendly}></Route>
      <Route exact path="/freetoplay" component={freetoPlay}></Route>
      <Route exact path="/earlyaccess" component={earlyAccess}></Route>
      <Route exact path="/action" component={action}></Route>
      <Route exact path="/adventure" component={adventure}></Route>
      <Route exact path="/casual" component={casual}></Route>
      <Route exact path="/indie" component={indie}></Route>
      <Route exact path="/massivelymultilayer" component={massivelyMultiplayer}></Route>
      <Route exact path="/racing" component={racing}></Route>
      <Route exact path="/rpg" component={rpg}></Route>
      <Route exact path="/simulation" component={simulation}></Route>
      <Route exact path="/sports" component={sports}></Route>
      <Route exact path="/strategy" component={strategy}></Route>
      <Route exact path='/register' component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/show" component={Show}></Route>
      <Route exact path="/payment" component={Payment}></Route>
      <Route exact path="/content" component={Content}></Route>
      <Route exact path="/topsellers" component={topSellers}></Route>
      <Route exact path="/cart" component={CART}></Route>
  
    </Router>
  )
}
}
export default App;
