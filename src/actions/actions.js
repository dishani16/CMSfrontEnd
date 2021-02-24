import axios from 'axios'

export const ADD_CUSTOMER= 'ADD_CUSTOMER'
export const GET_ALL_CUSTOMERS = 'GET_ALL_CUSTOMERS'
export const CLEAR_STATE = 'CLEAR_STATE'
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER'
export const GET_CUSTOMERS_BY_FIRST_NAME = 'GET_CUSTOMERS_BY_FIRST_NAME'
export const GET_CUSTOMERS_BY_ID = 'GET_CUSTOMERS_BY_ID'

const BASE_URL = 'http://localhost:9290/api/'

const getAllCustomersAction = (data) => {
    return {
        type: GET_ALL_CUSTOMERS,
        data
    }
}

export const getAllCustomers = () => {
    return (dispatch) => {
        axios.get(BASE_URL)
            .then((response) => {
                dispatch(getAllCustomersAction(response.data))
            })
    }
}

const addCustomerAction = (data) => {
    return {
        type: ADD_CUSTOMER,
        data
    }
}

export const addCustomer = (newCustomer) => {
    return (dispatch) => {
        axios.post(BASE_URL, newCustomer)
            .then((response) => {
                dispatch(addCustomerAction(response.data))
            })
    }
}
const deleteCustomerAction = (data) => {
    return {
        type: DELETE_CUSTOMER,
        data
    }
}

export const deleteCustomer = (id) => {
    return (dispatch) => {
        axios.delete(BASE_URL + id)
            .then((response) => {
                dispatch(deleteCustomerAction(response.data))
            })
    }
}
const updateCustomerAction = (data) => {
    return {
        type: UPDATE_CUSTOMER,
        data
    }
}

export const updateCustomer = (customerId, newCustomerDetails) => {
    return (dispatch) => {
        axios.put(BASE_URL + customerId, newCustomerDetails)
            .then((response) => {
                dispatch(updateCustomerAction(response.data))
            })
    }
}
//search by names action
const getCustomersByFirstNameAction = (data) => {
    return {
        type: GET_CUSTOMERS_BY_FIRST_NAME,
        data
    }
}

//search by names function
export const getCustomersByFirstName = (firstName) => {
    return (dispatch) => {
        let URL = `http://localhost:9290/api/search?firstName=${firstName}`
        axios.get(URL)
            .then((response) => {
                dispatch(getCustomersByFirstNameAction(response.data))
            })
    }
}
//search by names action
const getCustomersByIdAction = (data) => {
    return {
        type: GET_CUSTOMERS_BY_ID,
        data
    }
}
//search by names function
export const getCustomersById = (id) => {
    return (dispatch) => {
        let URL = `http://localhost:9290/api/searchById?id=${id}`
        axios.get(URL)
            .then((response) => {
                dispatch(getCustomersByIdAction(response.data))
            })
    }
}
//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}