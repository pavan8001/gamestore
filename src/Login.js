import React  from 'react';
import ReactDOM from 'react-dom';
import './Login.css'
import Welcome from './Welcome'
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
      input[event.target.value]=event.target.value;
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
      let input = {};
    
      input["email1"] = "";
      input["password1"] = "";
      input["check"]="";
      
      this.setState({input:input});
      alert("Login successful");
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
    if (typeof input["email1"] !== "undefined") 
    {       
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email1"])) 
        {
          isValid = false;
          errors["email1"] = "Please enter valid email address.";
        }
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
       
      <div className="ui card">
        <div className="content">
           <form className="Form" onSubmit={this.handleSubmit}>
        
           <br/>
           <div className="ui search">
            <label for="email1" className="style">Please enter your email address:</label>
            <br/>
            <input 
              type="email" 
              name="email1" 
              value={this.state.input.email1}
              onChange={this.handleChange}
              className="input"
              placeholder="Enter your email" 
              id="email1" />        
              <div className="red">{this.state.errors.email1}</div>
              </div>

            <div className="ui search"> 
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

            </div>
            <div className="space"> <br/></div>
            
            <div className="ui search"> 
            <label for="check" className="style"></label>
            <input 
              type="checkbox" 
              name="check" 
              value={this.state.input.check}
              onChange={this.handleChange}
              className="check"
              id="check" />
              Remember Me
              <input className="reset" type="reset" value="Reset"/>
             <input className="submit" type="submit" value="Done"/>
             
            <Router>
              <Link to ='/'><div className="forgot">Forgot Password</div></Link>
            </Router>
            </div>
           
        </form>
        </div>
        </div>
        </div>
      );
    }
  }

ReactDOM.render(<MyForm />, document.getElementById('root'));
export default MyForm;