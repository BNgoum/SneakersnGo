import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import FormAddModel from './FormAddModel'
import ListModels from './ListModels'

class AddBrand extends Component {
    
    render() {
        return (
            <View>
                <FormAddModel />
                <ListModels />
            </View>
        )
    }
}

const mapStateToProps = (state) => { 
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBrand)