import * as actionCreators from '../actions/actions'
const initialState = {
    returnedMessage: 'empty msg - bow bow',
    customersList: []

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.GET_ALL_CUSTOMERS:
            let listOfCustomers = action.data
            console.log('List of Customers')
            console.log(listOfCustomers)
            return {
                returnedMessage: 'recieved all customers details !! ching!',
                customersList: listOfCustomers
            }
            case actionCreators.DELETE_CUSTOMER:
                let messageAfterDeletion = action.data.message
                let listAfterDeletion = action.data.customers
               // let listDeleted=action.data.address
                console.log('Deletion of customer')
                console.log(listAfterDeletion)
                console.log(messageAfterDeletion)
                return {
                    returnedMessage: messageAfterDeletion,
                    customersList: listAfterDeletion
                }
        case actionCreators.ADD_CUSTOMER:
            let messageAfterAddition = action.data.message
            let listAfterAddition = action.data.customers
            console.log('Addition of customer')
            console.log(listAfterAddition)
            console.log(messageAfterAddition)
            return {
                returnedMessage: messageAfterAddition,
                customersList: listAfterAddition
            }

        case actionCreators.UPDATE_CUSTOMER:
                let messageAfterUpdation = action.data.message
                let listAfterUpdation = action.data.customers
                console.log('Updating Customer')
                console.log(listAfterUpdation)
                console.log(messageAfterUpdation)
                return {
                    returnedMessage: messageAfterUpdation,
                    customersList: listAfterUpdation
                }
                case actionCreators.GET_CUSTOMERS_BY_FIRST_NAME:
                    let listOfCustomersByFirstName = action.data.customers
                    console.log('List of customers by first name')
                    console.log(listOfCustomersByFirstName)
                    return {
                        customersList: listOfCustomersByFirstName
                    } 
             case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                customersList: []
            }
            case actionCreators.GET_CUSTOMERS_BY_ID:
                    let listOfCustomersById = action.data.customers
                    console.log('customer by id')
                    console.log(listOfCustomersById)
                    return {
                        customersList: listOfCustomersById
                    }        
            
            default:
            return state
    }
}
export default reducer;