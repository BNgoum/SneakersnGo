import React, { Component } from 'react';
import { View } from 'react-native';

import FormAddSneaker from '../../components/Sneaker/FormAddSneaker';
import ListSneakersByModel from '../../components/Sneaker/ListSneakersByModel';

export default class AddSneakers extends Component {
    render() {
        return (
            <View>
                <FormAddSneaker navigation={this.props.navigation} />
                <ListSneakersByModel navigation={this.props.navigation} />
            </View>
        )
    }
}