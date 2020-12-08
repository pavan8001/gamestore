import React  from 'react';
import axios from 'axios';
import './pay.css'

class Payment extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            phone:"",
            error:"",
           
        };
        this.changep=this.changep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 

 
    changep(e)
  {
    this.setState(
      {
        phone:e.target.value
      })
  }
    handleSubmit(e)
    {   

        e.preventDefault();
        
        if(this.validate())
        {
           
            alert("Transaction Successful!")
             this.letin();
       }
            
          else{   
               alert("Invalid Data Entry!");

         }   
        }
     validate()
     {
            let isValid=true;
            let error = this.state.error;
            let phone=document.forms["myForm"]["phone"].value
            if(!phone)
            {
                isValid=false;
                error = "Please enter your phone number.";
            }
            if(typeof phone!== "undefined")
            {
                if(phone.length!==10)
                {
                    isValid=false;
                    error = "Please enter valid 10-digit phone number.";
                }
            }
            this.setState
            (
              {
              error: error
            });
            return isValid;
        }
    
    letin()
    {
            this.props.history.push("/");
    }
    render()
    { 

        return(

            <div className="paymentBackground" style={{backgroundColor:"white"}}>
            <div className="paymentImage"></div>
          
            <div className="card2">
                <form name="myForm"  onSubmit={this.handleSubmit.bind(this)} >
                    <label for name="phone" className="style"><b>Enter your phone number here!</b></label>
                    <br/>
                    <input 
                    name="phone"
                    type="number"
                    placeholder="Enter your number here!"
                    className="input"/>
                    <br/>
                    <div className="red" >{this.state.error}</div>
                    <br/>
                    <label for name="payment" className="style"><b>Enter the payment method</b></label>
                    <br/>
                    <select className="input">
                        <option value="GooglePay">Google Pay</option>
                        <option value="PhonePay">Phone Pay</option>
                    </select>
                    <br/><br/>
                    <input  className="pdone"  value="DONE"type="submit"/>
                </form>
            </div>
            </div>
           
        );
}
}


export default Payment;
