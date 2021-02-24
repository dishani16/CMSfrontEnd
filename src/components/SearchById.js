import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'

class SearchById extends Component {

    constructor(props) {
        super(props)
    
        this.customerId = React.createRef()
    }
    
    search() {
       this.props.onSearchById(this.customerId.current.value)
       
    }

    componentDidMount() {
        this.props.clearState()
    }

    render() {
        
        let onlyCustomer = this.props.customersList.map((customer, index) => {
            return (
                <tr key={index}>
                    <th class="table-success">{customer.customerId}</th>
                    <td class="table-primary">{customer.firstName}</td>
                    <td class="table-primary">{customer.lastName}</td>
                    <td class="table-info">{customer.email}</td>
                    <td class="table-warning">{customer.address.houseNo}</td>
                    <td class="table-warning">{customer.address.colony}</td>
                    <td class="table-warning">{customer.address.city}</td>
                    <td class="table-warning">{customer.address.state}</td>
                    <td class="table-warning">{customer.address.pincode}</td>
                </tr>
            )
        })
        
        return (
            <div className="search-id"
            style={{  
                backgroundImage: "url(" + "https://www.designhill.com/design-blog/wp-content/uploads/2019/03/post-2-3.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                height: '680px',
              }}>
                  <h4 style={{backgroundColor: "rgb(143,255,204)", left:"25%", fontFamily:"Baskerville Old Face", fontSize:"40px", color:"green", textShadow:"2px 1px black"}}>SEARCH CUSTOMER BY ID</h4>
            <div class="d-inline-flex p-2"><input type="text" ref={this.customerId} className="form-control" style={{width: "500px", alignSelf: "flex-start"}} id="customerId" placeholder="Customer Id" />
    <button className="btn btn-primary" style={{width: "500px", alignSelf: "flex-end"}} onClick={this.search.bind(this)}>Search</button>
    </div>        
                <hr />
                <div className="emp-table-div" class="container">

                    <table className="table table-info customer-table">
                        <thead>
                            <tr>
                            <th class="p-3 mb-2 bg-success text-white" scope="col">Customer Id</th>
                            <th class="p-3 mb-2 bg-primary text-white" scope="col">First Name</th>
                            <th class="p-3 mb-2 bg-primary text-white" scope="col">Last Name</th>
                            <th class="p-3 mb-2 bg-primary text-white" scope="col">Email Id</th>
                            <th class="p-3 mb-2 bg-warning text-white" scope="col">House No</th>
                            <th class="p-3 mb-2 bg-warning text-white" scope="col">Colony</th>
                            <th class="p-3 mb-2 bg-warning text-white" scope="col">City</th>
                            <th class="p-3 mb-2 bg-warning text-white" scope="col">State</th>
                            <th class="p-3 mb-2 bg-warning text-white" scope="col">Pincode</th>
                                {/* <th scope="col">Customer Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">email</th>
                                <th scope="col">House No</th>
                            <th scope="col">Colony</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Pincode</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {onlyCustomer}
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customersList: state.customersList,
        returnedMessage: state.returnedMessage,
        addressList: state.addressList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchById: (customerId) => dispatch(actionCreators.getCustomersById(customerId)),
        clearState: () => dispatch(actionCreators.clearState())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchById)