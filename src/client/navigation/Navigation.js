import React, { Component } from 'react';

import Authentication from './Authentication';
import HomeAdmin from './Backoffice';
// import TabBarNavigation from './TabBarNavigation';

import { connect } from 'react-redux';

class Navigation extends Component {
    
    render() {
        return ( this.props.isLogin !== null ? <HomeAdmin /> : <Authentication /> )
    }
}

const mapStateToProps = (state) => { 
    return state;
}

export default connect(mapStateToProps)(Navigation)