import React  from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import "./cart.css"

const Pay = props =>(
    <tr>
        <td>{props.acc.product}</td>
        <td style={{paddingLeft:100}}>{props.acc.price}</td>
    </tr>
)

class CART extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            input:[]
        };


    }
    componentDidMount()
    {
        axios.get('http://localhost:4000/users/')
        .then(response=>
        {
             this.setState({input:response.data});
        })
        .catch(function(error)
        {
            console.log(error);
        });

    }
    productList()
    {
        return this.state.input.map(function(current,i)
        {
            return <div style={{marginLeft:600,marginBottom:10}}><Pay acc={current}  ykey={i}/></div>;
        });
    }



    letin()
    {
            this.props.history.push("/register")
    }
    render()
    {

        return(

            <div className="cartbackground" ><br/><br/><br/><br/><label className="cart" >CART</label>
            <div className=""></div>
            <div>
            <br/><br/><br/> <label className="details"  ><b>PRODUCT DETAILS</b></label>
                <table className="table" style={{marginTop:40}}>
                    <thead>
                        <tr>
                            <th>
                            <label className="header1"  ><b>PRODUCT</b></label>
                            </th>
                            <th>
                            <label className="header2"  ><b>PRICE</b></label>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="header1" style={{color:"black"}}>

                        {this.productList()}

                    </tbody>
                </table>
                <button className="button CButton" onClick={this.letin.bind(this)}>PAY</button>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>

        );
}
}

ReactDOM.render(<CART/>, document.getElementById('root'));
export default CART;
