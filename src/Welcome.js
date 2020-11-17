import react from 'react';
import ReactDOM from 'react-dom';
import './App.css';
class Welcome extends react.Component
{

  render()
    { 
       
        return(
        <div className="container1">
           <welcome className="sign_in">
             Welcome
           </welcome>
        </div>)
    }
 
}
ReactDOM.render(<Welcome/>, document.getElementById('root'));
export default Welcome ;