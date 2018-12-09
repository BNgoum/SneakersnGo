import React, { Component } from 'react';
import { View } from 'react-native';

import AddBrand from '../../components/Brand/AddBrand'

export default class AddBrands extends Component {
    render() {
        console.log('Proooops : ', this.props.navigation)
        return (
            <View>
                <AddBrand />
            </View>
        )
    }
}