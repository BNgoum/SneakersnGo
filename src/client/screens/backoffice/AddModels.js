import React, { Component } from 'react';
import { View } from 'react-native';

import FormAddModel from '../../components/Model/FormAddModel';
import ListModels from '../../components/Model/ListModels';

export default class AddModels extends Component {
    render() {
        return (
            <View>
                <FormAddModel />
                <ListModels navigation={this.props.navigation} />
            </View>
        )
    }
}