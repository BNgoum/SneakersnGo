import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import FormAddBrand from '../../components/Brand/FormAddBrand'

export default class AddSneakers extends Component {
    render() {
        return (
            <View>
                <FormAddBrand />
            </View>
        )
    }
}