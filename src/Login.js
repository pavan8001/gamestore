import React  from 'react';
import './Login.css'
import axios from 'axios'


class MyForm extends React.Component {
   
    constructor(props) {
      super(props);
      this.state = 
      { 
        email:"",
        password:"",
        
        errors: {}
      }
    
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    
   handleSubmit(event)
    {
    event.preventDefault();
    
    let x=document.forms["myForm"]["email"].value
    let y=document.forms["myForm"]["password"].value

    if(this.validate())
    {
      axios.get(`http://localhost:4000/users/find?email=${x}&password=${y}`)
      .then(()=> 
       {  
       alert("Successful login!")
       this.letin();
          }
      )
      .catch(err =>{
          alert('invalid credentials')
          console.log(err)
      })
    }
  }
  
  validate()
  {
    let x=document.forms["myForm"]["email"].value
    let y=document.forms["myForm"]["password"].value
    let errors = {};
    let isValid = true;
   

    if(!x)
    {
      isValid = false;
      errors["email"] = "Please enter your email address."
    }
    
  
    
    if(!y)
    {
      isValid = false;
      errors["password"] = "Please enter the password."
    }

  
  
  this.setState(
    {
      errors:errors
    }
  );
  return isValid;
  }

  letin()
  {
    this.props.history.push("/payment");
  }
  forgot()
  {
    return true;
  }
    render() {
      return (
      
        <div className = "lgbackground" >
       
      <div className="ui card">
        <div className="content">
           <form className="myForm" name="myForm" action="./homepage"  onSubmit={this.handleSubmit} method="POST">
        
           <br/>
           <div className="ui search">
            <label for="email" className="style"><b>Please enter your email address:</b></label>
            <br/>
            <input 
              type="email" 
              name="email" 
             
             
              className="input"
              placeholder="Enter your email" 
              id="email" />        
              <div className="red">{this.state.errors.email}</div>
           </div>

            <div className="ui search"> 
            <label for="password" className="style"><br/><b>Please enter your password:</b></label>
            <input 
              type="password" 
              name="password" 
              
          
              className="input"
              placeholder="Enter the password!" 
              id="password" />
              <div className="red">{this.state.errors.password1}</div>

            </div>
            <div className="space"> <br/></div>
            
            <div className="ui search"> 
            <label for="check" className="style"></label>
            <input 
              type="checkbox" 
              name="check" 
            
              className="check"
              id="check" />
              <b>Remember Me</b>
            
             <input className="submit" type="submit" value="Done"/>
             
            </div>
           
        </form>
        </div>
        </div>
        </div>
	
      );
    }
  }


export default MyForm;
