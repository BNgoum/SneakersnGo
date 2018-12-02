import React, { Component } from 'react';

import Authentication from './Authentication';
import HomeAdmin from './Backoffice';
// import TabBarNavigation from './TabBarNavigation';

import { connect } from 'react-redux';

class Navigation extends Component {
    
    render() {
        return ( this.props.state.AuthenticationReducer.isLogin === null ? <Authentication /> : <HomeAdmin /> )
        // return <HomeAdmin />
    }
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps)(Navigation)