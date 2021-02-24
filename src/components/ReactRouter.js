import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import AddCustomer from './AddCustomer'
import ViewCustomers from './ViewCustomers';
import SearchByName from './SearchByName'
import Home from './Home'
import SearchById from './SearchById';

function ReactRouter() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
                <div class="container">
                              <img src="//cdn.shopify.com/s/files/1/2045/8185/files/PT-animated-400-loop10delay_400x117.gif?v=1610736139" alt="PlantingTree" data-rimg="" srcSet="//cdn.shopify.com/s/files/1/2045/8185/files/PT-animated-400-loop10delay_400x117.gif?v=1610736139 1x" className="site-logo-image" style={{ width: '250px', height: '65px'}}></img>
                 <ul class="nav nav-pills" role="tablist">
                                <li class="nav-item">
                                    <Link class="nav-link_none" class="p-3 mb-2 bg-success text-white" style={{fontSize: "30px", textDecoration: "none" }} data-toggle="pill" to="/">
                                        Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" to="/listcustomers" >List of customers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" to="/add">Add/Update</Link>
                                </li>
                            
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" to="/searchByName">Search By First Name</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" to="/searchById">Search By Id</Link>
                                </li>

                            </ul>
                            
                        </div>
                </nav>
                <Switch>
               <Route exact path="/listcustomers">
                        <ViewCustomers></ViewCustomers>
                    </Route>
                    <Route path="/add">
                        <AddCustomer></AddCustomer>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/searchByName" component={SearchByName}/>
                    <Route path="/searchById" component={SearchById}/>
                    {/* <Route path="/searchByName" component={SearchByName}/>
                    <Route path="/searchByDepartment" component={SearchByDepartment}/> */}
                </Switch>
                </div>
            
        </Router>
    )
}

export default ReactRouter
