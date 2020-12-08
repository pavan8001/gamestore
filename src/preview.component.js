import React, {Component} from 'react';
import getElements from './previewFunction.js';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import "./preview.component.css"
import logo from './back.png';
import ScrollToTopOnMount from './ScrollToTopOnMount.js'
//import { StickyContainer,Sticky } from "react-sticky";
class topSellers extends Component {
  // constructor(props){
  //   super(props);
  //   this.getElements = getElements.bind(this);
  // }


  render() {
    return (
      
      <div> 
	<ScrollToTopOnMount />
	<h2 style={{background:"hotpink"}}>Top Sellers</h2>
        <div className='elementsList topSellers' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'Top Sellers')}}>
		
        </div>
      </div>
      
    )
  }
}



class upcoming extends Component {

  render() {
    return (
      <div ><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Upcoming</h2>
        <div className='elementsList upcoming' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'Upcoming')}}>

        </div>
      </div>
    )
  }
}

class specials extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Specials</h2>
        <div className='elementsList specials' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'Specials')}}>

        </div>
      </div>
    )
  }
}

class virtualReality extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Virtual Reality</h2>
        <div className='elementsList virtualReality' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'Virtual Reality')}}>

        </div>
      </div>
    )
  }
}

class controllerFriendly extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Controller Friendly</h2>
        <div className='elementsList controllerFriendly' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'Controller Friendly')}}>

        </div>
      </div>
    )
  }
}

class freetoPlay extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Free to Play</h2>
        <div className='elementsList freetoPlay' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Free to Play')}}>

        </div>
      </div>
    )
  }
}

class earlyAccess extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Early Access</h2>
        <div className='elementsList earlyAccess' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Early Access')}}>

        </div>
      </div>
    )
  }
}

class action extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Action</h2>
        <div className='elementsList action' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Action')}}>

        </div>
      </div>
    )
  }
}

class adventure extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Adventure</h2>
        <div className='elementsList adventure' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Adventure')}}>

        </div>
      </div>
    )
  }
}

class casual extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Casual</h2>
        <div className='elementsList casual' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Casual')}}>

        </div>
      </div>
    )
  }
}

class indie extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Indie</h2>
        <div className='elementsList indie' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Indie')}}>

        </div>
      </div>
    )
  }
}

class massivelyMultiplayer extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Massively Multiplayer</h2>
        <div className='elementsList massivelyMultiplayer' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Massively Multiplayer')}}>

        </div>
      </div>
    )
  }
}

class racing extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Racing</h2>
        <div className='elementsList racing' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Racing')}}>

        </div>
      </div>
    )
  }
}

class rpg extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>RPG</h2>
        <div className='elementsList rpg' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'RPG')}}>

        </div>
      </div>
    )
  }
}

class simulation extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Simulation</h2>
        <div className='elementsList simulation' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Simulation')}}>

        </div>
      </div>
    )
  }
}

class sports extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>sports</h2>
        <div className='elementsList sports' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Sports')}}>

        </div>
      </div>
    )
  }
}

class strategy extends Component {

  render() {
    return (
      <div><ScrollToTopOnMount />
        <h2 style={{background:"hotpink"}}>Strategy</h2>
        <div className='elementsList strategy' dangerouslySetInnerHTML={{__html:getElements('Browse by genre', 'Strategy')}}>

        </div>
      </div>
    )
  }
}



export {topSellers, upcoming, specials, virtualReality, controllerFriendly, freetoPlay, earlyAccess, action, adventure, casual, indie, massivelyMultiplayer, racing, rpg, simulation, sports, strategy};
