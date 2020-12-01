import React  from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const Acc = props =>(
    <tr>
        <td>{props.acc.email1}</td>
        <td>{props.acc.password1}</td>
    </tr>
)
const Register = props =>(
    <tr>
        <td>{props.reg.name}</td>
        <td>{props.reg.Age}</td>
        <td>{props.reg.phone}</td>
        <td>{props.reg.email}</td>
        <td>{props.reg.password}</td>
      
    </tr>
)
 class Show extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.state={input:[]}

    }
   componentDidMount()
    {
        axios.get('http://localhost:4000/gamestore/')
        .then(response=>
        {
             this.setState({input:response.data}); 
        })
        .catch(function(error)
        {
            console.log(error);
        });

    }
    loginList()
    {
        return this.state.input.map(function(currentAcc,i)
        {
            return <Acc acc={currentAcc} key={i}/>;
        });
    }
    registerList()
    {
        return this.state.input.map(function(currentAcc,i)
        {
            return <Register reg={currentAcc} key={i}/>;
        });
    }
    
    render()
    {
        return(

            <div>
                <h3>Login details</h3>
                <table  style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>email</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.loginList()}
                    </tbody>
                </table>
                <h3>Signin Details</h3>
                <table  style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>phone</th>
                            <th>email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.registerList()}
                    </tbody>
                </table>
                

            </div>);
           
        
    }
}
ReactDOM.render(<Show />, document.getElementById('root'));
export default Show;
