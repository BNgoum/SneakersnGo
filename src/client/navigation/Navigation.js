import React, { Component } from 'react';

import Authentication from './Authentication';
import HomeAdmin from './Backoffice';
import Home from './Home';

import { connect } from 'react-redux';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            homeAdmin: false,
            Authentication: true
        }
    };
    
    
    render() {
        // console.log(this.props.state.AuthenticationReducer.isLogin)

            // this.props.state.AuthenticationReducer.isLogin === null ? <Authentication /> : <HomeAdmin /> 
            if (this.props.state.AuthenticationReducer.isLogin !== null) {
                return <Home />
            } else if (this.props.state.AuthenticationReducer.isAdmin !== null) {
                return <HomeAdmin />
            } else {
                return <Authentication />
            }
        
        // return <HomeAdmin />
    }
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(Navigation)