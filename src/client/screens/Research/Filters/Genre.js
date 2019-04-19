import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import ContainerTitle from '../../../components/Style/Text/ContainerTitle';
import Title from '../../../components/Style/Text/Title';
import BorderTitle from '../../../components/Style/Text/BorderBottomTitle';
import ButtonCTA from '../../../components/Style/Button/Button';
import ButtonText from '../../../components/Style/Button/ButtonText';
import Circle from '../../../components/Style/Circle';

export default class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ""
        }
    }

    handleOnPress = type => {
        this.setState({selected: type});
    }

    render() {
        return (
            <View style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "Genre".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <Text style={ styles.texteResultats }>56 résultats</Text>

                <View style={ styles.viewFilter }>
                    <TouchableOpacity onPress={ () => this.handleOnPress("Femme") } style={ styles.containerFilter }>
                        <Text style={ styles.titleFilter }>{ "Femme".toUpperCase() }</Text>
                        { this.state.selected === "Femme" && <Circle /> }
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewFilter }>
                    <TouchableOpacity onPress={() => this.handleOnPress("Homme")} style={ styles.containerFilter }>
                        <Text style={ styles.titleFilter }>{ "Homme".toUpperCase() }</Text>
                        { this.state.selected === "Homme" && <Circle /> }
                    </TouchableOpacity>
                </View>

                <View style={ [styles.viewFilter, styles.lastViewFilter] }>
                    <TouchableOpacity onPress={() => this.handleOnPress("Mixte")} style={ styles.containerFilter }>
                        <Text style={ styles.titleFilter }>{ "Mixte".toUpperCase() }</Text>
                        { this.state.selected === "Mixte" && <Circle /> }
                    </TouchableOpacity>
                </View>

                <ButtonCTA style={ styles.containerButton }><ButtonText>{ "Afficher les résultats".toUpperCase() }</ButtonText></ButtonCTA>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    containerTitle: {
        width: 80,
        marginBottom: 16
    },
    titleStyle: {
        fontSize: 21,
    },
    texteResultats: {
        fontSize: 11,
        letterSpacing: 1,
        fontFamily: 'roboto-regular',
        color: '#9b9b9b',
        marginBottom: 22
    },
    viewFilter: {
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4'
    },
    lastViewFilter: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    containerFilter: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 18,
        paddingRight: 18,
    },
    titleFilter: {
        fontSize: 15,
        color: '#070e37',
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
        marginRight: 15
    },
    containerButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center'
    }
})
