import React  from 'react';
import ReactDOM from 'react-dom';
import './Login.css'
import Welcome from './Welcome'
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'

class Payment extends React.Component
{
    
    render()
    { 

        return(
<form>
    <div class="ui inverted segment">
       <div class="ui inverted form">
           <br/><br/>
           <div class="two fields">
              <div class="field">
              <label>First Name</label>
              <input placeholder="First Name" type="text"/>
              </div>

               <div class="field">
              <label>Last Name</label>
              <input placeholder="Last Name" type="text"/>
              </div>
            </div>
            <br/><br/>
            <div class="three fields">
              <div class="field">
              <label>Card Type</label>
              <input placeholder="Type" type="text"/>
              </div>
               <div class="field">
              <label>Card Number</label>
              <input placeholder="Enter number" type="text"/>
              </div>
              <div class="field">
              <label>CVC</label>
              <input placeholder="Three digit" type="text"/>
              </div>
            </div>
      
         </div>
    <div class="ui submit button" >Submit</div>
  
</div>
</form>

    );
}
}
ReactDOM.render(<Payment/>, document.getElementById('root'));
export default Payment;
