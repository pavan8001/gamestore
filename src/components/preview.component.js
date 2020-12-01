import React, {Component} from 'react';
import getElements from './previewFunction.js';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import './preview.component.css'
class topSellers extends Component {
  // constructor(props){
  //   super(props);
  //   this.getElements = getElements.bind(this);
  // }


  render() {
    return (
      <div className="elementslist">
        <h2>Top Sellers</h2>
        <div className='elementsList topSellers' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'Top Sellers')}}>

        </div>
      </div>
    )
  }
}

class newReleasess extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>New Releases</h2>
        <div className='elementsList newReleasess' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'New Releases')}}>

        </div>
      </div>
    )
  }
}

class upcoming extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Upcoming</h2>
        <div className='elementsList upcoming' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'Upcoming')}}>

        </div>
      </div>
    )
  }
}

class specials extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Specials</h2>
        <div className='elementsList specials' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'Specials')}}>

        </div>
      </div>
    )
  }
}

class virtualReality extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Virtual Reality</h2>
        <div className='elementsList virtualReality' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'Virtual Reality')}}>

        </div>
      </div>
    )
  }
}

class controllerFriendly extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Controller Friendly</h2>
        <div className='elementsList controllerFriendly' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'Controller Friendly')}}>

        </div>
      </div>
    )
  }
}

class freetoPlay extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Free to Play</h2>
        <div className='elementsList freetoPlay' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Free to Play')}}>

        </div>
      </div>
    )
  }
}

class earlyAccess extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Early Access</h2>
        <div className='elementsList earlyAccess' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Early Access')}}>

        </div>
      </div>
    )
  }
}

class action extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Action</h2>
        <div className='elementsList action' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Action')}}>

        </div>
      </div>
    )
  }
}

class adventure extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Adventure</h2>
        <div className='elementsList adventure' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Adventure')}}>

        </div>
      </div>
    )
  }
}

class casual extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Casual</h2>
        <div className='elementsList casual' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Casual')}}>

        </div>
      </div>
    )
  }
}

class indie extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Indie</h2>
        <div className='elementsList indie' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Indie')}}>

        </div>
      </div>
    )
  }
}

class massivelyMultiplayer extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Massively Multiplayer</h2>
        <div className='elementsList massivelyMultiplayer' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Massively Multiplayer')}}>

        </div>
      </div>
    )
  }
}

class racing extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Racing</h2>
        <div className='elementsList racing' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Racing')}}>

        </div>
      </div>
    )
  }
}

class rpg extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>RPG</h2>
        <div className='elementsList rpg' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'RPG')}}>

        </div>
      </div>
    )
  }
}

class simulation extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Simulation</h2>
        <div className='elementsList simulation' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Simulation')}}>

        </div>
      </div>
    )
  }
}

class sports extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>sports</h2>
        <div className='elementsList sports' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Sports')}}>

        </div>
      </div>
    )
  }
}

class strategy extends Component {

  render() {
    return (
      <div className="elementslist">
        <h2>Strategy</h2>
        <div className='elementsList strategy' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Strategy')}}>

        </div>
      </div>
    )
  }
}


ReactDOM.render((<Router >
  <Route exact path = '/topSellers' component = {topSellers}/>
  <Route exact path = '/newReleasess' component = {newReleasess}/>
  <Route exact path = '/upcoming' component = {upcoming}/>
  <Route exact path = '/specials' component = {specials}/>
  <Route exact path = '/virtualReality' component = {virtualReality}/>
  <Route exact path = '/controllerFriendly' component = {controllerFriendly}/>
  <Route exact path = '/freetoPlay' component = {freetoPlay}/>
  <Route exact path = '/earlyAccess' component = {earlyAccess}/>
  <Route exact path = '/action' component = {action}/>
  <Route exact path = '/adventure' component = {adventure}/>
  <Route exact path = '/casual' component = {casual}/>
  <Route exact path = '/indie' component = {indie}/>
  <Route exact path = '/massivelyMultiplayer' component = {massivelyMultiplayer}/>
  <Route exact path = '/racing' component = {racing}/>
  <Route exact path = '/rpg' component = {rpg}/>
  <Route exact path = '/simulation' component = {simulation}/>
  <Route exact path = '/sports' component = {sports}/>
  <Route exact path = '/strategy' component = {strategy}/>
  </Router>), document.getElementById('root'));

export {topSellers, newReleasess, upcoming, specials, virtualReality, controllerFriendly, freetoPlay, earlyAccess, action, adventure, casual, indie, massivelyMultiplayer, racing, rpg, simulation, sports, strategy};
