import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"
import axios from 'axios'

import {BrowserRouter as Router , Route , Link , Switch} from 'react-router-dom'


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

  handleChange(e)                               // change event handler
  {
    let input = this.state.input;
     input[e.target.name] = e.target.value;

    this.setState(
    {
      input
    });
  }

  handleSubmit(event)
   {                              // updation part

    event.preventDefault();

    if(this.validate())
    {

        console.log(this.state);

        const newRegister =
      {
        name:this.state.input.name,
        Age:this.state.input.Age,
        phone:this.state.input.phone,
        email:this.state.input.email,
        password:this.state.input.password
      }

      axios.post('http://localhost:4000/gamestore/add',newRegister)
          .then(res=>console.log(res.data));

        let input = {};
        input["name"] = "";
        input["Age"]="";
        input["phone"] = "";
        input["email"] = "";
        input["password"]="";

        this.setState({input:input});
      console.log('Registration successful:', this.state.input);
    }
  }
  validate(){                                           //aaaaaaaaaa validation of form elements

      let input = this.state.input;
      let errors = this.state.errors;
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

          <div className="card1">
        <form onSubmit={this.handleSubmit}>

            <div style={{color:"orange",fontSize:30,fontFamily:"TimesNewRoman"}}>lETS gET sTARTED!</div>

            <label for="name"  style={{fontSize:20,color:"yellow"}}><br/><b>Please enter you Full Name:<br/></b></label>
            <input

              type="text"
              name="name"
              value={this.state.input.name}
              onChange={this.handleChange}
              className="field"
              placeholder="Enter name"
              id="name" />

              <div className=" white">{this.state.errors.name}</div>



            <label for="Age"   style={{fontSize:20,color:"yellow"}}><br/><b>Please enter your Age:</b><br/></label>
            <input
              type="number"
              name="Age"
              value={this.state.input.Age}
              onChange={this.handleChange}
              className="field"
              style={{width:300 ,height:30,backgroundColor:"black",color:"lightwhite"}}
              placeholder="Enter your age!"
              id="Age" />

              <div className=" white">{this.state.errors.Age}</div>



            <label for="Phone"   style={{fontSize:20,color:"yellow"}}><br/><b>Please enter your phone number:</b><br/></label>
            <input
              type="number"
              name="phone"
              value={this.state.input.phone}
              onChange={this.handleChange}
              className="field"
              style={{width:300 ,height:30,backgroundColor:"black",color:"lightwhite"}}

              placeholder="Enter your phone number!"
              id="phone" />

              <div className=" white">{this.state.errors.phone}</div>



            <label for="email"   style={{fontSize:20,color:"yellow"}}><br/><b>Please enter your email address:</b><br/></label>
            <input
              type="email"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              className="field"
              style={{width:300 ,height:30,backgroundColor:"black",color:"lightwhite"}}
              placeholder="Enter email"
              id="email" />

              <div className=" white">{this.state.errors.email}</div>



            <label for="password"   style={{fontSize:20,color:"yellow"}}><br/><b>Please enter a new password:</b><br/></label>
            <input
              type="text"
              name="password"
              value={this.state.input.password}
              onChange={this.handleChange}
              className="field"
              placeholder="Maintain you secret!"
              id="password" />

              <div className=" white">{this.state.errors.password}</div>

          <br/>

          <input  className="button button1" value="RESET" type="reset" style={{marginBottom:"20px"} }/>  <br/>
          <input  className="button button1" value="DONE"type="submit"/>

        </form>

       </div>


       <a href="/login">click here to login</a>


       </div>



    );
  }
  }

ReactDOM.render(<Register/>, document.getElementById('root'));
export default Register;
