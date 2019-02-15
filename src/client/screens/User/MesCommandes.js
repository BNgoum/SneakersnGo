import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList, Text } from 'react-native';

import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import Title from '../../components/Style/Text/Title';
import BorderTitle from '../../components/Style/Text/BorderBottomTitle';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import BlockSneakers from './BlockSneakers';

export default class MesCommandes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayCommandes: ["test", "test2", "bla", "blabla"]
        }
    }

    render() {
        return (
            <ScrollView>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "Mes commandes".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <Text style={ styles.texteResultats }>{ "4 commandes".toUpperCase() }</Text>

                <FlatList 
                    data={this.state.arrayCommandes}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({item}) => <BlockSneakers /> }
                />

            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    containerTitle: {
        width: 130,
        marginTop: 20,
        marginBottom: 16,
        marginHorizontal: 20,
    },
    titleStyle: {
        fontSize: 21,
        lineHeight: 25
    },
    texteResultats: {
        fontSize: 11,
        letterSpacing: 1,
        fontFamily: 'roboto-regular',
        color: '#9b9b9b',
        marginBottom: 22,
        paddingHorizontal: 20
    },
    containerButton: {
        alignSelf: 'center',
        marginTop: 24,
        marginBottom: 40
    }
})
