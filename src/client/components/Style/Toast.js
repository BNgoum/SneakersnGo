import React, { Component } from 'react';
import { StyleSheet, Text, Animated, Dimensions } from 'react-native';

export default class Toast extends Component {
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(-70)
    }

    componentDidMount() {
        this.callToast();
        
    }

    callToast() {
        Animated.timing(
          this.animatedValue,
          { 
            toValue: 0,
            duration: 500
          }).start(this.closeToast())
    }

    closeToast() {
        setTimeout(() => {
          Animated.timing(
          this.animatedValue,
          { 
            toValue: -70,
            duration: 500
          }).start()
        }, 2000)
    }

    render() {
        return (
            <Animated.View style={ {
                transform: [{ translateY: this.animatedValue }],
                height: 70,
                width: '100%',
                backgroundColor: '#070e37',
                position: 'absolute',
                left:0,
                top: 0,
                right:0,
                justifyContent: 'center',
                zIndex: 768
            } }>
                <Text style={ styles.textToast }>
                    { this.props.text }
                </Text>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    textToast: {
        marginLeft: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 16
    }
})