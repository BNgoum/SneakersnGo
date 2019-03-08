import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { connect } from 'react-redux';

import { deleteFromWishlist } from '../../store/reducers/sneakers/action';

import SwipeableSneakersListeItem from '../../components/WishList/SwipeableSneakersListeItem';
import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import Title from '../../components/Style/Text/Title';
import BorderTitle from '../../components/Style/Text/BorderBottomTitle';
import Paragraph from '../../components/Style/Text/Paragraph';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';

import { Poubelle } from '../../images/icons';

class WishList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.state.AuthenticationReducer.isLogin
        }
    }

    componentDidMount() {
        if (this.state.token)
            this.getSneakersFromWishlist();
    }

    getSneakersFromWishlist = () => {
        const wishlist = this.props.state.AuthenticationReducer.user.wishlist;

        wishlist.map(idSneaker => {
            const action = { type: "ADD_WISHLIST", value: idSneaker }
            return this.props.dispatch(action);
        })
    }

    deleteSneakersFromWishlist = data => {
        const wishlist = this.props.state.SneakersReducer.wishlist;
        const sneakersId = data.item;

        return new Promise((resolve, reject) => {
            resolve(deleteFromWishlist(this.state.token, sneakersId))
        })
        .then(() => {
            let index = wishlist.indexOf(sneakersId);
            if (index > -1) {
                wishlist.splice(index, 1);
            }

            const action = { type: "SET_WISHLIST", value: wishlist }

            return this.props.dispatch(action);
        })
        .catch((error => console.log('Erreur lors de la suppression de la sneakers de la wishlist in wishlist.js : ', error)))
    }

    render() {
        return (
            this.props.state.AuthenticationReducer.isLogin && this.props.state.SneakersReducer.wishlist.length > 0 ?
                <ScrollView>
                    <ContainerTitle style={ styles.containerTitle }>
                        <Title style={ styles.titleStyle }>{ "Mes coups de coeur".toUpperCase() }</Title>
                        <BorderTitle />
                    </ContainerTitle>

                    <View style={ styles.wrapperWishlist }>
                        <SwipeListView
                            useFlatList
                            data={this.props.state.SneakersReducer.wishlist}
                            keyExtractor={(item) => item.toString()}
                            renderItem={ (data, rowMap) => (
                                <View style={styles.rowFront}>
                                    <SwipeableSneakersListeItem 
                                        data={ data }
                                        style={ styles.listSneakers }
                                        navigation={ this.props.navigation }>
                                    </SwipeableSneakersListeItem>
                                </View>
                            )}
                            renderHiddenItem={ (data, rowMap) => (
                                    <TouchableOpacity style={styles.rowBack} onPress={ () => this.deleteSneakersFromWishlist(data) }>
                                        <Text style={ styles.textAction }>{'Supprimer'.toUpperCase()}</Text>
                                        <Poubelle style={ styles.iconPoubelle } />
                                    </TouchableOpacity>
                            )}
                            rightOpenValue={-66}
                        /> 
                    </View>
                </ScrollView>
            :
            <View style={ styles.container }>
                <ContainerTitle><Title>{ 'Pas de coup de coeur'.toUpperCase() }</Title><BorderTitle /></ContainerTitle>
                <Paragraph style={ styles.textStyle }>Aucune paire chouchou vraiment ?{"\n"}Ici tu peux stocker toutes tes sneakers favorites !</Paragraph>
                <ButtonCTA style={ styles.buttonStyle } onPress={() => this.props.navigation.navigate('Research')} ><ButtonText>{ 'Découvrir les sneakers'.toUpperCase() }</ButtonText></ButtonCTA>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rowBack: {
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor: '#ea2300',
        flex: 1,
        justifyContent: 'center',
        paddingRight: 8,
    },
    btnDelete: {
        display: 'flex',
        alignItems: 'center'
    },
    listSneakers: {
        backgroundColor: '#fff'
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
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
    container: {
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        flex: 1
        
    },
    textStyle: {
        marginTop: 20,
        marginBottom: 25
    },
    buttonStyle: {
        alignSelf: 'center'
    },
    containerTitle: {
        width: 150,
        marginTop: 20,
        marginBottom: 24,
        marginHorizontal: 20
    },
    wrapperWishlist: {
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4',
    }
})

const mapStateToProps = (state) => { 
    return {state};
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)