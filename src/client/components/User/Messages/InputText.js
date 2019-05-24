import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { ArrowBottomLine, Camera } from '../../../images/icons';
import InputText from '../../Form/InputText';

export default class InputTextMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    handleOnChangeMessage = message => {
        this.setState({
            message
        })
    }

    render() {
        return (
            <View style={ styles.container }>
                {/* <Camera style={ styles.pictoStyle } /> */}
                <InputText
                    sendPropsToParent={ this.handleOnChangeMessage }
                    placeholder="Taper votre message"
                    style={ styles.textInputStyle } />
                {/* <ArrowBottomLine tyle={ styles.pictoStyle } /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4',
        
        paddingHorizontal: 16
    },
    textInputStyle: {
        width: '100%'
    },
    pictoStyle: {
        width: "15%"
    }
})