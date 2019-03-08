import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import BorderBottomTitle from '../Style/Text/BorderBottomTitle';
import Title from '../Style/Text/Title';
import ContainerTitle from '../Style/Text/ContainerTitle';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default class Steps extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.wrapperLeft }>
                    <ContainerTitle style={ styles.wrapperTitle }>
                        <Title style={ styles.title } >{'Comment ça marche ?'.toUpperCase()}</Title>
                        <BorderBottomTitle></BorderBottomTitle>
                    </ContainerTitle>
                    <Step1></Step1>
                    <Step2></Step2>
                    <Step3></Step3>
                </View>
                
                <Image source={require('../../images/background_concept.png')} style={styles.backgroundSteps} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20,
    },
    wrapperLeft: {
        width: '60%'
    },
    wrapperTitle: {
        width: 140,
        marginBottom: 40
    },
    title: {
        fontSize: 21,
    },
    btnSneakers: {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: [{translateX: -110}],
        width: 220,
    },
    backgroundSteps: {
        position: 'absolute',
        right: 0,
        bottom: 80,
        width: 130,
        height: 400
    }
})
