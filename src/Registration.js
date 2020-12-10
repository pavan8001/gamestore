
import React from 'react';
import "./App.css"
import axios from 'axios'



class Register extends React.Component {
    constructor(props) {
    super(props);

    this.changeN=this.changeN.bind(this);
    this.changeA=this.changeA.bind(this);
    this.changep=this.changep.bind(this);
    this.changeE=this.changeE.bind(this);
    this.changeP=this.changeP.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state =
    {
      name:"",
      phone:"",
      email:"",
      Age:"",
      password:"",
      errors:{}
    };
  }

  changeN(e)
  {
    this.setState(
      {
        name:e.target.value
      })
  }
  changeE(e)
  {
    this.setState(
      {
        email:e.target.value
      })
  }
  changep(e)
  {
    this.setState(
      {
        phone:e.target.value
      })
  }
  changeA(e)
  {
    this.setState(
      {
        Age:e.target.value
      })
  }
  changeP(e)
  {
    this.setState(
      {
        password:e.target.value
      })
  }




  handleSubmit(event)
   {                             // updation part

    event.preventDefault();

      if(this.validate())
      {

          const newRegister = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            Age: this.state.Age,
            password: this.state.password
        }
        axios.post('http://localhost:4000/users/add',newRegister)
        .then(res=>console.log(res.data));
        this.setState(
        {
              name:"",
              phone:"",
              email:"",
              Age:"",
              password:"",

        })
        alert("Registration successful!");
        this.letin();

  }
}

  validate()
  {

    let name=document.forms["myForm"]["name"].value
    let phone=document.forms["myForm"]["phone"].value
    let email=document.forms["myForm"]["email"].value
    let Age=document.forms["myForm"]["Age"].value
    let password=document.forms["myForm"]["password"].value


      let errors = this.state.errors;
      let isValid = true;

      if (!name)
       {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }

      if(!Age)
      {
        isValid=false;
        errors["Age"]="Please enter your age.";
      }
      if(typeof Age !== "undefined")
      {
          if(Age <= 10)
          {
          isValid = false;
          errors["Age"] = "You are not of eligible age to access this website!(Minimum age : 15).";
          }
          else if(Age >=100)
          {
            isValid = false;
            errors["Age"]="Your age is not appropraiate to use this website!(Maximum age : 100).";
          }
      }

      if (!phone)
       {
        isValid = false;
        errors["phone"] = "Please enter your phone number.";
      }

      if (typeof phone !== "undefined")
      {

       if(phone.length !== 10)
        {
          isValid = false;
          errors["phone"] = "Please enter valid 10-digit phone number.";
        }
      }

      if (!email)
       {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }

      if(!password)
      {
        isValid = false;
        errors["password"] = "Please enter your Password.";
      }

      if(typeof password !== "undefined")
      {
        var pattern = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/);
        if(!pattern.test(password))
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
letin()
{
  this.props.history.push("/login")
}
  render() {
    return (
      <div className="rgcontainerregister">

          <div className="card1">
            <form name="myForm" onSubmit={this.handleSubmit} method="POST">

            <div style={{color:"orange",fontSize:30,fontFamily:"Georgia"}}><br/><br/><b style={{fontSize:32,color:"red",border:"red"}}>Lets Start!</b></div>

            <label for="name"  style={{fontSize:20,color:"yellow"}}><br/></label>
            <input

              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeN}
              className="field"
              placeholder="Enter name"
              id="name" />

              <div className=" white">{this.state.errors.name}</div>



            <label for="Age"   style={{fontSize:20,color:"yellow"}}><br/></label>
            <input
              type="number"
              name="Age"
              value={this.state.Age}
              onChange={this.changeA}
              className="field"
              style={{width:200 , height:30,backgroundColor:"black",color:"lightwhite"}}
              placeholder="Enter age"
              id="Age" />

              <div className=" white">{this.state.errors.Age}</div>



            <label for="Phone"   style={{fontSize:20,color:"yellow"}}><br/></label>
            <input
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.changep}
              className="field"
              style={{width:200 ,height:30,backgroundColor:"black",color:"lightwhite"}}

              placeholder="Enter phone number"
              id="phone" />

              <div className=" white">{this.state.errors.phone}</div>



            <label for="email"   style={{fontSize:20,color:"yellow"}}><br/></label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.changeE}
              className="field"
              style={{width:200 ,height:30,backgroundColor:"black",color:"lightwhite"}}
              placeholder="Enter email"
              id="email" />

              <div className=" white">{this.state.errors.email}</div>



            <label for="password"   style={{fontSize:20,color:"yellow"}}><br/></label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.changeP}
              className="field"
              placeholder="Enter password"
              id="password" />

              <div className=" white">{this.state.errors.password}</div>

          <br/>
	   <input  className="rgbutton button1" type="submit" value="Register"/>
		<br/><br/>
           <div>
               <br/><br/><a href="./login"><div className="login" > <b><strong style={{fontSize:19,color:"red",border:"black"}}>To login into your existing account</strong></b> <br/><b style={{color:"white"}}>click here</b></div></a>
           </div>

        </form>

     </div>
     </div>


    );
  }
  }

// ReactDOM.render(<Payment/>, document.getElementById('root'));
export default Register;
