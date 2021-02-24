import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'
class AddCustomer extends Component {

    constructor(props) {
        super(props)

        this.customerId = React.createRef();
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
        this.addressId = React.createRef();
        this.houseNo= React.createRef();
        this.colony= React.createRef();
        this.city= React.createRef();
        this.state= React.createRef();
        this.pincode= React.createRef();

    }

    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {
        let msg=this.props.returnedMessage
        let check = this.props.returnedMessage.split(' ')
        if (check[0] === 'Successfully')
         {
            setTimeout(() => {
                this.props.history.push('/listcustomers')
            }, 2000)
            alert(msg);
        }
        else if(check[0]=== 'Customer'){
            alert(msg);
        }
    }
    add() {

        let newCustomer = {
            customerId: this.customerId.current.value,
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            email: this.email.current.value,
            address:{
            houseNo: this.houseNo.current.value,
            colony: this.colony.current.value,
            city: this.city.current.value,
            state: this.state.current.value,
            pincode: this.pincode.current.value
            },
        }
        this.props.onAddCustomer(newCustomer)
    }
    update() {
        let customer = {
            customerId: this.customerId.current.value,
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            email: this.email.current.value,
            address:{
                //addressId: this.addressId.current.value,
                houseNo: this.houseNo.current.value,
                colony: this.colony.current.value,
                city: this.city.current.value,
                state: this.state.current.value,
                pincode: this.pincode.current.value
    
                },

        }

        this.props.onUpdateCustomer(customer.customerId, customer)

    }
    render() {
        return (
            <div style={{  
                backgroundImage: "url(" + "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-summer-gray-minimalist-cosmetic-plant-background-image_192773.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                height: '600px',
              }}>
               <form class="was-validated">
                <div className="card-body">
                <div className="mb-3 add-customer">
                    {/* <div className = "card col-md-3 offset-md-2 "> */}
                        <input type="number" ref={this.customerId} pattern="[0-9]+" className="form-control" id="customerid" placeholder="Customer ID" />   
                    </div>

                    <div className="mb-3 add-customer">
                        <input type="text" ref={this.firstName} className="form-control" id="customerfirstName" placeholder="Customer First Name" />
                    </div>

                    <div className="mb-3 add-customer">
                        <input type="text" ref={this.lastName} className="form-control" id="customerlastName" placeholder="customer Last Name" />
                    </div>

                    <div className="mb-3 add-customer">
                        <input type="text" ref={this.email} className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="customeremailid" placeholder="Customer Email Id" required/>
                    </div>
                    <div className="mb-3 add-customer">
                        <input type="text" ref={this.houseNo} className="form-control" id="customerhouseno" placeholder="Customer house no" />
                    </div>
                    <div className="mb-3 add-customer">
                        <input type="text" ref={this.colony} className="form-control" id="customercolony" placeholder="Customer colony" />
                    </div>
                    <div className="mb-3 add-customer">
                        <input type="text" ref={this.city} className="form-control" id="customercity" placeholder="Customer city" />
                    </div>
                    <div className="mb-3 add-customer">
                    <select ref={this.state} className="form-control" id="customerstate" placeholder="Customer state">
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                    </div>
                    <div className="mb-3 add-customer">
                        <input type="text" ref={this.pincode} className="form-control" id="customerpincode" placeholder="Customer pincode" />
                    </div>
                    <div style={{height: "30px"}}></div>
                    <button type="button" onClick={this.add.bind(this)} className="btn btn-primary add-button" style={{width: "300px", height: "60px"}}>Add</button>
                    <button type="button" onClick={this.update.bind(this)} className="btn btn-secondary add-button" style={{width: "300px", height: "60px"}}>Update</button>

                </div>
                </form>
                 <div className={(this.props.returnedMessage === '') ? '' : "alert "} role="alert">
                     <div style={{height: "100px"}}></div>
                    <h1>{this.props.returnedMessage}</h1>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddCustomer: (Customer) => {
            dispatch(actionCreators.addCustomer(Customer))
        },
        onUpdateCustomer: (customerId, newCustomerObject) => {
            dispatch(actionCreators.updateCustomer(customerId, newCustomerObject))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddCustomer))