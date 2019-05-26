import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';

import { deleteFromCart } from '../../store/reducers/sneakers/action';

import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import Title from '../../components/Style/Text/Title';
import BorderTitle from '../../components/Style/Text/BorderBottomTitle';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import SneakersRecap from '../../components/Panier/SneakersRecap';
import Paragraph from '../../components/Style/Text/Paragraph';

import { Poubelle } from '../../images/icons';

class Panier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.state.AuthenticationReducer.isLogin,
        }
    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            if (this.props.state.AuthenticationReducer.isLogin) {
                this.getSneakersInCartFromDB();
            }
        });
    }

    getSneakersInCartFromDB = () => {
        let sneakersCart = this.props.state.AuthenticationReducer.user.cart;
        const sneakersCartRedux = this.props.state.SneakersReducer.cart;

        return new Promise((resolve, reject) => {

            sneakersCartRedux.map(sneaker => {
                if (!sneakersCart.includes(sneaker)) {
                    sneakersCart.push(sneaker)
                }
            })

            const action = { type: "SET_CART", value: sneakersCart }

            resolve(this.props.dispatch(action));
        })
    }

    deleteSneakersFromCart = data => {
        let cartElement = this.props.state.SneakersReducer.cart;
        const sneakersId = data.item;

        return new Promise((resolve, reject) => {
            resolve(deleteFromCart(this.state.token, sneakersId))
        })
        .then(data => {
            if (data) {
                let index = cartElement.indexOf(sneakersId);
                if (index > -1) {
                    cartElement.splice(index, 1);
                }
    
                const action = { type: "SET_CART", value: cartElement }
    
                return this.props.dispatch(action);
            } else {
                return null;
            }
        })
        .catch(error => console.log('Erreur lors de la suppression de sneakers du panier : ', error))
    }

    render() {
        return (
            this.props.state.AuthenticationReducer.isLogin && this.props.state.SneakersReducer.cart.length ?
                <View style={ styles.container }>
                    <ScrollView style={ styles.scrollViewContainer }>
                        <ContainerTitle style={ styles.containerTitle }>
                            <Title style={ styles.titleStyle }>{ "Mon panier".toUpperCase() }</Title>
                            <BorderTitle />
                        </ContainerTitle>

                        <View style={ styles.wrapperRecap }>
                            <Text style={ styles.numberArticles }>{this.props.state.SneakersReducer.cart.length + " articles".toUpperCase()}</Text>
                            <View style={ styles.wrapperRecapTotal }>
                                <Text style={ styles.textTotal }>{"Total : ".toUpperCase()}</Text>
                                <Text style={ styles.total }>200 €</Text>
                            </View>
                        </View>
                        <View style={ styles.wrapperSneakersRecap }>
                            <SwipeListView
                                useFlatList
                                data={this.props.state.SneakersReducer.cart}
                                keyExtractor={(item) => item.toString()}
                                renderItem={ (data, rowMap) => (
                                    <View style={styles.rowFront}>
                                        <SneakersRecap data={ data } />
                                    </View>
                                )}
                                renderHiddenItem={ (data, rowMap) => (
                                    <TouchableOpacity style={styles.rowBack} onPress={ () => this.deleteSneakersFromCart(data) }>
                                        <Text style={ styles.textAction }>{'Supprimer'.toUpperCase()}</Text>
                                        <Poubelle style={ styles.iconPoubelle } />
                                    </TouchableOpacity>
                                )}
                                rightOpenValue={-66}
                            /> 
                        </View>
                    </ScrollView>

                    <View style={ styles.wrapperFooter }>
                        <ButtonCTA style={ styles.buttonStyle }><ButtonText>{ 'Paiement'.toUpperCase() }</ButtonText></ButtonCTA>
                    </View>
                </View>
            :
            <View style={ styles.containerEmpty }>
                <ContainerTitle><Title>{ 'Panier vide'.toUpperCase() }</Title><BorderTitle /></ContainerTitle>
                <Paragraph style={ styles.textStyle }>Aucune paire dans le panier.</Paragraph>
                <ButtonCTA style={ styles.buttonStyle } onPress={() => this.props.navigation.navigate('Research')} ><ButtonText>{ 'Découvrir les sneakers'.toUpperCase() }</ButtonText></ButtonCTA>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1
    },
    containerEmpty: {
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
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

const mapStateToProps = (state) => { 
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panier)