import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import "./content.component.css"



class content extends Component {
  constructor(props){
    super(props);


    this.onbuy=this.onbuy.bind(this);
    this.state=
    {
      price:"",
      product:""
    }
  }

  onbuy()
  {
    const gameid = this.props.location.search.slice(4,10);
    var jsonContent = require('./FullDetails.json');
    var game = jsonContent[gameid];
    var Poster = `/game_thumbnails/${gameid}_poster.jpg`;
    var thumb_list = ``;
    for(var i in game['thumbnails']) {
      thumb_list += `<li><img src="/game_thumbnails/${gameid}_thumbnail${Number(i)+1}.jpg"/></li>`;
    };
    var platform=``;
    if (typeof(game['platforms'])=='string') {
      let platformImg = `/${game['platforms']}.jpeg`;
      platform = `<img src =${platformImg} alt=${game['platforms']} height=2px width=2px>`
    }
    else {
      for(var logo in game['platforms']) {
        let platformImg = `/${game['platforms'][logo]}.jpeg`;
        platform+= `<img src = ${platformImg} alt=${game['platforms'][logo]}>`
      }
    };


    this.setState(
    {
      price:game["price"],
      product:game["name"]
    })
    console.log(this.state.price)

    const Payment = {
      price:this.state.price,
      product:this.state.product
    }
   console.log(Payment)
    axios.post('http://localhost:4000/users/add',Payment)
    .then(res=>console.log(res.data));


   console.log("Cart added")
  }
letin()
{
  this.props.history.push('/cart');
}

  render() {
    const gameid = this.props.location.search.slice(4,10);
    var jsonContent = require('./FullDetails.json');
    var game = jsonContent[gameid];
    var Poster = `/game_thumbnails/${gameid}_poster.jpg`;
    var thumb_list = ``;
    for(var i in game['thumbnails']) {
      thumb_list += `<li><img src="/game_thumbnails/${gameid}_thumbnail${Number(i)+1}.jpg"/></li>\n"`;
    };
    var platform=``;
    if (typeof(game['platforms'])=='string') {
      let platformImg = `/${game['platforms']}.jpeg`;
      platform = `<img src =${platformImg} alt=${game['platforms']} height=2px width=2px>`
    }
    else {
      for(var logo in game['platforms']) {
        let platformImg = `/${game['platforms'][logo]}.jpeg`;
        platform+= `<img src = ${platformImg} alt=${game['platforms'][logo]}>`
      }
    };


    return (
      <div className="indcontent">
		<div className="title">{game['name']}</div>
		<div className="video">
			<p>Game Play:</p>
			<video width="470" poster={Poster} controls><source src={game['video_link']} type="video/mp4"/></video>
		</div>
		<div className="thumbnails">
			<ul dangerouslySetInnerHTML={{__html:thumb_list}}>
			</ul>
			<p className="price">Price:{game['price']}</p>
      <button className="Buttun" onClick={this.onbuy} style={{marginLeft:250}}>ADD TO CART</button>
      <button className="Buttun"onClick={this.letin.bind(this)} style={{marginLeft:250}}>GO TO CART</button>
      <div className="platforms">Platforms:
				<div dangerouslySetInnerHTML={{__html:platform}}/>
			</div>
			<div className="about" dangerouslySetInnerHTML={{__html:game['about']}}/>
			<div className="sys" dangerouslySetInnerHTML={{__html:game['system_req']}}/>
		</div>
      </div>
    );
  }
}

ReactDOM.render((<Router >
  <Route exact path = '/content' component = {content}/></Router>), document.getElementById('root'));
export default content;
