import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList, Text, View } from 'react-native';

import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import Title from '../../components/Style/Text/Title';
import BorderTitle from '../../components/Style/Text/BorderBottomTitle';
import BlockSneakers from './BlockSneakers';

export default class MesCommandes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayCommandesAvenir: ["test", "test2"],
            arrayCommandesPassee: ["test", "test2", "bla"],
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

                <View style={ styles.wrapperStatut }>
                    <FlatList 
                        data={this.state.arrayCommandesAvenir}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({item}) => <BlockSneakers statut="A venir" navigation={ this.props.navigation } /> }
                    />
                </View>

                <View style={ styles.wrapperStatut }>
                    <FlatList 
                        data={this.state.arrayCommandesPassee}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({item}) => <BlockSneakers statut="Passée" /> }
                    />
                </View>
                

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
    },
    wrapperStatut: {
        marginBottom: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
    }
})
