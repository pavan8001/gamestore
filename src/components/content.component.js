import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './content.component.css';
// import {userLocation} from "react-router-dom";


class content extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const gameid = this.props.location.search.slice(4,10);
    var jsonContent = require('./FullDetails.json');
    var game = jsonContent[gameid];
    var Poster = `/game_thumbnails/${gameid}_poster.jpg`;
    var thumb_list = ``;
    for(var i in game['thumbnails']) {
      thumb_list += `<li class="thumbnail_poster"><img src="/game_thumbnails/${gameid}_thumbnail${Number(i)+1}.jpg"/></li>\n"`;
    };
    var platform=``;
    if (typeof(game['platforms'])=='string') {
      let platformImg = `/${game['platforms']}.svg`;
      platform = `<img class="platform"src =${platformImg} alt=${game['platforms']}>`
    }
    else {
      for(var logo in game['platforms']) {
        let platformImg = `/${game['platforms'][logo]}.svg`;
        platform+= `<img class="platform" src = ${platformImg} alt=${game['platforms'][logo]}>`
      }
    };
    return (
      <div className="content">
      <div className="title">{game['name']}</div>
      <div className="video">
        <video width="470" poster={Poster} controls><source src={game['video_link']} type="video/mp4"/></video>
        </div>
        <div className="thumbnails">
          <ul dangerouslySetInnerHTML={{__html:thumb_list}}>
          </ul>
          <p className="price">{game['price']}</p>
          <div className="platforms">platforms:
            <span dangerouslySetInnerHTML={{__html:platform}}>
            </span>
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
