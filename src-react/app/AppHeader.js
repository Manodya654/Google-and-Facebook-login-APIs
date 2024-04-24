import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

/* export class AppHeader extends Component {
  render() {
    return (
        <header className="app-header">
        <div className="container">
            <div className="app-branding">
                <Link to="/" className="app-title">Know-Your-Neighborhood</Link>
            </div>
            <div className="app-options">
                <nav className="app-nav">
                        { this.props.authenticated ? (
                            <ul>
                                <li>
                                    <NavLink to="/profile" >Profile</NavLink>
                                </li>
                                <li>
                                    <Link onClick={this.props.onLogout}>Logout</Link>
                                </li>
                            </ul>
                        ): (
                            <ul>
                                <li>
                                    <NavLink to="/login">Login</NavLink>        
                                </li>
                                <li>
                                    <NavLink to="/signup">signup</NavLink>        
                                </li>
                            </ul>
                        )}
                </nav>
            </div>
        </div>
    </header>


    )
  }
} */

export class AppHeader extends Component {
    render() {
      return (
          <header className="app-header">
          <div className="container">
          <div class="topnav">
          {/* <Link to="/" className="app-title">Know-your Neighbourhood</Link> */}
             <a href="/">Know-your Neighbourhood</a>
             <a class="active" href="/">Home</a>
             <a href="/stores">Stores</a>
             <a href="/contact">Contact Us</a>
             <a href="/about">About Us</a>
             <a href="/terms">Privacy Policy</a>
             <div class="topnav1">
             { this.props.authenticated ? (
                 <><a href="/profile">Profile</a><a onClick={this.props.onLogout}>Logout</a></>
             ):(
                 <><a href="/login">Login</a><a href="/signup">Signup</a></>
             )}
           </div>
          </div>
              {/* <div className="app-branding">
                  <Link to="/" className="app-title">ONLINE PRODUCT</Link>
                  <Link to="/" className="app-title">Home</Link>
  
              </div>
              <div className="app-options">
                  <nav className="app-nav">
                          { this.props.authenticated ? (
                              <ul>
                                  <li>
                                      <NavLink to="/profile">PROFILE</NavLink>
                                  </li>
                                  <li>
                                      <a onClick={this.props.onLogout}>LOGOUT</a>
                                  </li>
                              </ul>
                          ): (
                              <ul>
                                  <li>
                                      <NavLink to="/login">LOGIN</NavLink>        
                                  </li>
                                  <li>
                                      <NavLink to="/signup">SIGNUP</NavLink>        
                                  </li>
                              </ul>
                          )}
                  </nav>
              </div> */}
          </div>
      </header>
  
      )
    }
  }

export default AppHeader;