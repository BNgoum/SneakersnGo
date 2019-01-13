import React, { Component } from 'react';
import { View } from 'react-native';

import ListSneakers from '../../components/Sneaker/ListSneakers';

export default class AllSneakers extends Component {
    render() {
        return (
            <View>
                <ListSneakers />
            </View>
        )
    }
}