import React  from 'react';
import ReactDOM from 'react-dom';
import './Login.css'
import axios from 'axios'

import {BrowserRouter as Router , Route , Link} from 'react-router-dom'


class MyForm extends React.Component {
   
    constructor() {
      super();
      this.state = 
      { 
        input: {},
        errors: {}
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (event)
    {
      let input = this.state.input;
      input[event.target.name]=event.target.value;
      this.setState
      (
        {
           input
        }
      );
    }

   handleSubmit(event)
    {
        event.preventDefault();
    

    if(this.validate())
    {
      console.log(this.state);
      
      const newLogin = 
      {
        email1:this.state.input.email1,
        password1:this.state.input.password1,
        check:this.state.input.check
      }

      axios.post('http://localhost:4000/gamestore/add',newLogin)
          .then(res=>console.log(res.data));
      let input = {};
    
      input["email1"] = "";
      input["password1"] = "";
      input["check"]="";
      
      this.setState({input:input});
      console.log("Login successful",this.state.input);
    }
  }
  
  validate()
  {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
   
    if(!input["email1"])
    {
      isValid = false;
      errors["email1"] = "Please enter your email address."
    }
 
    if(!input["password1"])
    {
      isValid = false;
      errors["password1"] = "Please enter the password."
    }

    if(typeof input["password1"] !== "undefined")
    {
      var pattern = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/);
      if(!pattern.test(input["password1"]))
      {
        isValid = false;
        errors["password1"] = "Please use an UpperCase character , number , special character in you password. "
      }
    }
  
  this.setState(
    {
      errors:errors
    }
  );
  return isValid;
  }

  
    render() {
      return (
       
        <div className = "background" >
       
        <div className="card">
           <form className="Form" onSubmit={this.handleSubmit}>
        
           <br/>
          
            <label for="email1" className="style">Please enter your email address:</label>
          
            <input 
              type="email" 
              name="email1" 
              value={this.state.input.email1}
              onChange={this.handleChange}
              className="input"
              placeholder="Enter your email" 
              id="email1" />        
              <div className="red">{this.state.errors.email1}</div>
             

              
            <label for="password1" className="style"><br/>Please enter your password:</label>
            <input 
              type="password" 
              name="password1" 
              value={this.state.input.password1}
              onChange={this.handleChange}
              className="input"
              placeholder="Enter the password!" 
              id="password1" />
              <div className="red">{this.state.errors.password1}</div>

          
            <br/>
           
            <label for="check" className="style">
            <div>
            <input 
              type="checkbox" 
              name="check" 
              value="Remember"
              checked={this.state.input.check==="Remember"}
              onChange={this.handleChange}
              className="check"
              id="check" />
              Remember Me
              <input className="reset" type="reset" value="Reset"/>
             <input className="submit" type="submit"  value="Done"/>
             </div></label>
            <Router>
              <div>
              <Link to ='/'><div className="forgot">Forgot Password</div></Link>
              </div>
            </Router>
           
           
        </form>
        </div>
       
        </div>
      );
    }
  }

ReactDOM.render(<MyForm />, document.getElementById('root'));
export default MyForm;