import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actionCreated from '../actions/actions'

class ViewCustomers extends Component {
   
    componentDidMount() {
        this.props.onGetCustomers()
    }

    delete(id) {
        let result=window.confirm("Are You Sure?");
        if(result){
        this.props.onDeleteCustomer(id);}
       
        
    }

    render() {
        
        let customersList = this.props.customersList.map((Customer, index) => {
            return (
                
                <tr key={index}>
                    <th class="table-success">{Customer.customerId}</th>
                    <td class="table-primary">{Customer.firstName}</td>
                    <td class="table-primary">{Customer.lastName}</td>
                    <td class="table-info">{Customer.email}</td>
                    <td class="table-warning">{Customer.address.houseNo}</td>
                    <td class="table-warning">{Customer.address.colony}</td>
                    <td class="table-warning">{Customer.address.city}</td>
                    <td class="table-warning">{Customer.address.state}</td>
                    <td class="table-warning">{Customer.address.pincode}</td>
                    <td class="table-danger">
                        <button onClick={this.delete.bind(this, Customer.customerId)} className="btn btn-danger">DELETE</button>
                    </td>

                </tr>
            )   
            })

        return (
            <div className="emp-table-div" style={{  
                backgroundImage: "url(" + "https://images.pexels.com/photos/3571563/pexels-photo-3571563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                height: '800px'
              }}>
            <div  class="container">
                <h4 style={{backgroundColor: "rgb(143,255,204)", left:"25%", fontFamily:"Baskerville Old Face", fontSize:"40px", color:"green", textShadow:"2px 1px black"}}>{this.props.returnedMessage}</h4>
                <div class="row" className="hdr">    
                        <div class="col-sm-12 btn btn-info">    
                        Customer table   
                         </div>    
                          </div>  
                <table className="table table-info customer-table" class="table table-bordered table-sm">
                    <thead className="thead-dark">
                        <tr > 
                            <th class="p-3 mb-2 bg-success text-white" scope="col">Customer Id</th>
                            <th class="p-3 mb-2 bg-primary text-white" scope="col">First Name</th>
                            <th class="p-3 mb-2 bg-primary text-white" scope="col">Last Name</th>
                            <th class="p-3 mb-2 bg-primary text-white" scope="col">Email Id</th>
                            <th class="p-3 mb-2 bg-warning text-white" scope="col">House No</th>
                            <th class="p-3 mb-2 bg-warning text-white" scope="col">Colony</th>
                            <th class="p-3 mb-2 bg-warning text-white" scope="col">City</th>
                            <th class="p-3 mb-2 bg-warning text-white" scope="col">State</th>
                            <th class="p-3 mb-2 bg-warning text-white" scope="col">Pincode</th>
                            <th class="p-3 mb-2 bg-danger text-white">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {customersList}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        customersList:  state.customersList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCustomers: () => {
             return dispatch(actionCreated.getAllCustomers())
        },
        onDeleteCustomer: (id) => {
            return dispatch(actionCreated.deleteCustomer(id))
        },
        clearState: () => {
            return dispatch(actionCreated.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCustomers)
