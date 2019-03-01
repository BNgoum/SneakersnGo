import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import Title from '../../components/Style/Text/Title';
import BorderTitle from '../../components/Style/Text/BorderBottomTitle';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import SneakersRecap from '../../components/Panier/SneakersRecap';

import { Poubelle } from '../../images/icons';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayPanier: ["err", "rer", "po"],
        }
    }
    render() {
        return (
            <View style={ styles.container }>
                <ScrollView style={ styles.scrollViewContainer }>
                    <ContainerTitle style={ styles.containerTitle }>
                        <Title style={ styles.titleStyle }>{ "Mon panier".toUpperCase() }</Title>
                        <BorderTitle />
                    </ContainerTitle>

                    <View style={ styles.wrapperRecap }>
                        <Text style={ styles.numberArticles }>{"2 articles".toUpperCase()}</Text>
                        <View style={ styles.wrapperRecapTotal }>
                            <Text style={ styles.textTotal }>{"Total : ".toUpperCase()}</Text>
                            <Text style={ styles.total }>200 €</Text>
                        </View>
                    </View>
                    <View style={ styles.wrapperSneakersRecap }>
                        <SwipeListView
                            useFlatList
                            data={this.state.arrayPanier}
                            keyExtractor={(item) => item.toString()}
                            renderItem={ (data, rowMap) => (
                                <View style={styles.rowFront}>
                                    <SneakersRecap />
                                </View>
                            )}
                            renderHiddenItem={ (data, rowMap) => (
                                <View style={styles.rowBack}>
                                    <Text style={ styles.textAction }>{'Supprimer'.toUpperCase()}</Text>
                                    <Poubelle style={ styles.iconPoubelle } />
                                </View>
                            )}
                            rightOpenValue={-66}
                        /> 
                    </View>
                </ScrollView>

                <View style={ styles.wrapperFooter }>
                    <ButtonCTA style={ styles.buttonStyle }><ButtonText>{ 'Paiement'.toUpperCase() }</ButtonText></ButtonCTA>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1
    },
    scrollViewContainer: {
        marginBottom: 75
    },
    wrapperSneakersRecap: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    textStyle: {
        marginTop: 20,
        marginBottom: 25
    },
    containerTitle: {
        width: 95,
        marginTop: 20,
        marginBottom: 16,
        marginHorizontal: 20
    },
    wrapperRecap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 24
    },
    wrapperRecapTotal: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    numberArticles: {
        color: '#9b9b9b',
        fontSize: 11,
        fontFamily: 'roboto-regular'
    },
    textTotal: {
        color: '#9b9b9b',
        fontSize: 11,
        fontFamily: 'roboto-regular'
    },
    total: {
        color: '#070e37',
        fontSize: 13,
        fontFamily: 'roboto-bold'
    },
    wrapperFooter: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4',
        backgroundColor: '#fff',
        zIndex: 50
    },
    buttonStyle: {
        alignSelf: 'center',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    rowBack: {
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor: '#ea2300',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: 8,
    },
    textAction: {
        fontSize: 8,
        color: '#fff',
        marginBottom: 8,
        textTransform: 'uppercase'
    },
    iconPoubelle: {
        marginRight: 16
    },
})