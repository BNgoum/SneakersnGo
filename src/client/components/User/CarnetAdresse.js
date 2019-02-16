import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { ArrowBottom } from '../../images/icons';

export default class CarnetAdresse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={ styles.viewAddress }>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('DetailsAdresse') } style={ styles.containerAddress }>
                    <Text style={ styles.titleAddress }>{ this.props.titleAddress.toUpperCase() }</Text>
                    <Text style={ styles.infoAddress }>{ this.props.infoAddress }</Text>
                    <Text style={ styles.infoAddress }>{ this.props.infoCodePostal }</Text>
                    <Text style={ styles.infoAddress }>{ this.props.infoPays }</Text>
                    <ArrowBottom style={ styles.iconArrow }/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewAddress: {
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4'
    },
    containerAddress: {
        position: 'relative',
        display: 'flex',
        paddingVertical: 28,
        paddingHorizontal: 20,
    },
    titleAddress: {
        fontSize: 15,
        color: '#070e37',
        fontFamily: 'roboto-bold',
        letterSpacing: 1,
    },
    iconArrow: {
        position: 'absolute',
        top: '50%',
        right: 20,
        transform: [{ translateY: 25 }, { rotate: "-90deg" }]
    },
    infoAddress: {
        fontSize: 11,
        color: '#4a4949',
        letterSpacing: 1,
        fontFamily: 'brawler-regular',
        lineHeight: 17
    }
})
