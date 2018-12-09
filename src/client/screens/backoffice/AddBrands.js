import React, { Component } from 'react';
import { View } from 'react-native';

import FormAddBrand from '../../components/Brand/FormAddBrand';
import ListBrands from '../../components/Brand/ListBrands';

export default class AddBrands extends Component {
    render() {
        return (
            <View>
                <FormAddBrand />
                <ListBrands navigation={this.props.navigation}/>
            </View>
        )
    }
}