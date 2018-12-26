import React, { Component } from 'react';

import Authentication from './Authentication';
import HomeAdmin from './Backoffice';
import Home from './Home';

import { connect } from 'react-redux';

class Navigation extends Component {
    render() {
        const { isLogin, isAdmin, user } = this.props.state.AuthenticationReducer;
        
        if (isLogin !== null) { return <Home /> }
        else if (isAdmin !== null) { return <HomeAdmin /> }
        else { return <Authentication /> }
    }
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(Navigation)