import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActiveLeft: true,
            isActiveRight: false,
        }
    }

    handleOnPressTab = side => {
        if (side === "left") {
            this.setState({
                isActiveLeft: true,
                isActiveRight: false,
            })
        } else {
            this.setState({
                isActiveLeft: false,
                isActiveRight: true,
            })
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <TouchableOpacity onPress={ () => this.handleOnPressTab("left") } style={ styles.wrapperTab }>
                    <Text style={ [styles.title, this.state.isActiveLeft && styles.titleActive] }>{'Catalogue des sneakers'.toUpperCase()}</Text>
                    <View style={ [styles.borderBottom, this.state.isActiveLeft && styles.borderBottomActive] }></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.handleOnPressTab("right") } style={ styles.wrapperTab }>
                    <Text style={ [styles.title, this.state.isActiveRight && styles.titleActive] }>{'Ma paire à la demande'.toUpperCase()}</Text>
                    <View style={ [styles.borderBottom, this.state.isActiveRight && styles.borderBottomActive] }></View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    title: {
        fontSize: 13,
        paddingBottom: 16,
        fontFamily: 'roboto-regular',
        textTransform: 'uppercase',
        color: '#9b9b9b',
        maxWidth: 80
    },
    titleActive: {
        fontSize: 21,
        fontFamily: 'roboto-bold',
        color: '#070e37',
        maxWidth: 140
    },
    borderBottom: {
        width: '100%',
        height: 2,
        backgroundColor: '#9b9b9b'
    },
    borderBottomActive: {
        backgroundColor: '#d82000' 
    },
    wrapperTab: {
        paddingTop: 16,
        paddingBottom: 0,
        paddingRight: 20,
        paddingLeft: 20,
    }
})
