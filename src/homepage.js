import react from "react";
import getElements from './previewFunction.js';
import "./homepage.css"
import logo from './see2.jpeg';
import {Link} from "react-router-dom"
class homePage extends react.Component
{
    render()
    {return(
        <div className="hpbackground" ><div className="headers" ><h1 style={{textAlign:"center",fontSize:100,fontFamily:"Verdana"}} ><img src={logo}/>THE GAMING HUB!<img src={logo}/></h1> </div>
		<div class="float-child m">	
		<div style={{textAlign:"left",color:"white",margin:40,borderColor:"white"}}> 
			<h1 style={{fontFamily:"Georgia",fontSize:40,color:"hotpink"}}> New Releases</h1>
			<div className='elementsList newReleases' dangerouslySetInnerHTML={{__html:getElements('Browse Categories', 'New Releases')}}style={{fontFamily:"Times New Roman",fontSize:20,color:"lightblue"}}>

			</div>
		</div>
		</div>
		<div class="float-child me">
		<div style={{textAlign:"left", color:"red",fontSize:18,fontFamily:"Verdana"}}><b>SELECT YOUR<br/> FAVOURITE CATEGORY </b></div> 			<br/>
			<Link to="/topsellers"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}} value="Top Sellers" type="submit"  /></Link><br/>
			<Link to="/upcoming"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}}value="Upcoming" type="submit"  /></Link><br/>
			<Link to="/specials"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}} value="Specials" type="submit"  /></Link><br/>
			<Link to="/virtualreality"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}} value="Virtual Reality" type="submit"  /></Link><br/>
			<Link to="/controllerfriendly"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}} value="Control Friendly"type="submit"  /></Link><br/>
			<Link to="/freetoplay"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}}  value="Free To Play"type="submit" /></Link><br/>
			<Link to="/earlyaccess"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}} value="Early Access"type="submit"  /></Link><br/>
			<Link to="/action"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}} value="Action"type="submit"  /></Link><br/>
			<Link to="/adventure"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}}value="Adventure"type="submit"  /></Link><br/>
			<Link to="/casual"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}}value="Casual"type="submit"  /></Link><br/>
			<Link to="/indie"><input  className="hpButton"  style={{textAlign:"left",width:180, height:30}} value="Indie"type="submit"  /></Link><br/>
			<Link to="/massivelymultilayer"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}}  value="Massive Multiplayer"type="submit"  /></Link><br/>
			<Link to="/racing"><input  className="hpButton"  style={{textAlign:"left",width:180, height:30}} value="Racing"type="submit"  /></Link><br/>
			<Link to="/rpg"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}} value="Rpg"type="submit"  /></Link><br/>
			<Link to="/simulation"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}} value="Simulation"type="submit"  /></Link><br/>
			<Link to="/sports"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}} value="Sports"type="submit"  /></Link><br/>
			<Link to="strategy"><input  className="hpButton" style={{textAlign:"left",width:180, height:30}} value="Strategy"type="submit"  /></Link><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
		</div>
	</div>
	
        )
    }
}
export default homePage;


            
            
 
