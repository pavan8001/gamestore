import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'


  
class Register extends React.Component {
    constructor() {
    super();
    this.state = 
    {
      input: {},
      errors: {}
    
    };                                            // list for state
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleChange(event)                               // change event handler
  {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState(
    {
      input
    });
  }
     
  handleSubmit(event) {                             // updation part

    event.preventDefault();
  
    if(this.validate()){

        console.log(this.state);
  
        let input = {};
        input["name"] = "";
        input["Age"]="";
        input["phone"] = "";
        input["email"] = "";
        input["password"]="";
        
        this.setState({input:input});
        alert('Registration Successful');
    }
  }
  validate(){                                           // validation of form elements

      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"])
       {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }

      if(!input["Age"])
      {
        isValid=false;
        errors["Age"]="Please enter your age.";
      }
      if(typeof input['Age'] !== "undefined")
      {
          if(input["Age"] <= 10)
          {
          isValid = false;
          errors["Age"] = "You are not of eligible age to access this website!(Minimum age : 15).";
          }
          else if(input["Age"] >=100)
          {
            isValid = false;
            errors["Age"]="Your age is not appropraiate to use this website!(Maximum age : 100).";
          }
      }
    
      if (!input["phone"])
       {
        isValid = false;
        errors["phone"] = "Please enter your phone number.";
      }
  
      if (typeof input["phone"] !== "undefined") 
      {
          
       if(input["phone"].length !== 10)
        {
          isValid = false;
          errors["phone"] = "Please enter valid 10-digit phone number.";
        }
      }

      if (!input["email"])
       {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") 
      {       
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) 
        {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
      if(!input["password"])
      {
        isValid = false;
        errors["password"] = "Please enter your Password.";
      }

      if(typeof input["password"] !== "undefined")
      {
        var pattern = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/);
        if(!pattern.test(input["password"]))
        {
          isValid = false;
          errors["password"] = "Please use an UpperCase character , number , special character in you password. "
        }
  
      } 
      this.setState
      (
        {
        errors: errors
      });
  
      return isValid;
  
}
  render() {
    return (
      <div className="containerregister">
        <br/>
        <br></br> 
        <form classname="xyz"onSubmit={this.handleSubmit}>
        <div className="ui card">
            <div className="content"> 
            <div style={{color:"orange",fontSize:30,fontFamily:"TimesNewRoman"}}>lETS gET sTARTED!</div>
            <div className="ui search">
            <label for="name" style={{fontSize:20}}><br/><b>Please enter you Full Name:</b></label>
            <input 

              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              className=""
              placeholder="Enter name" 
              id="name" />
  
              <div className="red">{this.state.errors.name}</div>
         
          </div>
         
            <div className="ui search">
            <label for="Age" style={{fontSize:20}}><br/><b>Please enter your Age:</b></label>
            <input 
              type="number" 
              name="Age" 
              value={this.state.input.Age}
              onChange={this.handleChange}
              className=""
              style={{width:300 ,height:30,backgroundColor:"black",color:"lightblue"}}
              placeholder="Enter your age!" 
              id="Age" />
  
              <div className="red">{this.state.errors.Age}</div>
          
         </div>
          
          <div className="ui search">
            <label for="Phone" style={{fontSize:20}}><br/><b>Please enter your phone number:</b></label>
            <input 
              type="number" 
              name="phone" 
              value={this.state.input.phone}
              onChange={this.handleChange}
              className="" 
              style={{width:300 ,height:30,backgroundColor:"black",color:"lightblue"}}

              placeholder="Enter your phone number!" 
              id="phone" />
  
              <div className="red">{this.state.errors.phone}</div>
        
          </div>
          
          <div className="ui search">
            <label for="email" style={{fontSize:20}}><br/><b>Please enter your email address:</b></label>
            <input 
              type="email" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              className=""
              style={{width:300 ,height:30,backgroundColor:"black",color:"lightblue"}}
              placeholder="Enter email" 
              id="email" />
  
              <div className="red">{this.state.errors.email}</div>
          </div>
       
    
          <div className="ui search">
            <label for="password"  style={{fontSize:20}}><br/><b>Please enter a new password:</b></label>
            <input 
              type="text" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              className=""
              placeholder="Maintain you secret!" 
              id="password" />
  
              <div className="red">{this.state.errors.password}</div>
      
          </div>
      
          
          <br/>
          </div>
          <input  className="button button1" value="RESET" type="reset" style={{marginBottom:"20px"} }/>
          
          <input  className="button button1" value="DONE"type="submit"/>

        </div>
        </form> 
        </div>     
       
     
    );
  }
  }

ReactDOM.render(<Register/>, document.getElementById('root'));
export default Register;