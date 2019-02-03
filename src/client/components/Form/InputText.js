import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';


export default class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            isFocus: false
        }
    }

    handleOnBlur = () => {
        if (this.state.text === "") {
            this.setState({
                isFocus: false
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={ styles.inputText }
                    onChangeText={(text) => this.setState({text: text.toUpperCase()})}
                    value={this.state.text}
                    onFocus={() => this.setState({isFocus: true})}
                    onBlur={() => this.handleOnBlur()}
                />
                <Text style={ [styles.placeholder, this.state.isFocus && styles.isFocus] }>{'Marque'.toUpperCase()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 28,
        marginBottom: 32
    },
    inputText: {
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1,
        paddingVertical: 5,
        letterSpacing:1,
        fontFamily: 'roboto-regular',
        color: '#070e37'
    },
    placeholder: {
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: [{ translateY: -10 }],
        textTransform: 'uppercase',
        color: '#9b9b9b',
        letterSpacing:1,
        fontSize: 14,
        fontFamily: 'roboto-regular',
        zIndex: -1,
    },
    isFocus: {
        fontSize: 10,
        top: 0
    }
})