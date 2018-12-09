import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import FormAddBrand from './FormAddBrand'
import ListBrands from './ListBrands'

class AddBrand extends Component {
    render() {
        return (
            <View>
                <FormAddBrand />
                <ListBrands />
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