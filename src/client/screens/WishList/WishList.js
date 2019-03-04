import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { connect } from 'react-redux';

import { requestOneBrand, requestOneModel, requestOneSneaker } from '../../store/reducers/sneakers/action';

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
        this.getSneakersFromWishlist();
    }

    // handleDidMount = () => {
    //     if ( this.state.token ) {
    //         return new Promise((resolve, reject) => {
    //             resolve(this.getSneakersFromWishlist())
    //         })
    //         .then(() => {
    //             this.props.state.SneakersReducer.wishlist.map(sneakers => {
    //                 this.getModelAndBrand(sneakers)
    //             })
    //         })            
    //     }
    // }

    getSneakersFromWishlist = () => {
        const wishlist = this.props.state.AuthenticationReducer.user.wishlist;

        wishlist.map(idSneaker => {
            const action = { type: "ADD_WISHLIST", value: idSneaker }
            return this.props.dispatch(action);
        })
    }

    // getModelAndBrand = (idSneaker) => {
    //     const token = this.state.token;
    //     let sneakers = {};

    //     return new Promise((resolve, reject) => {   
    //         resolve(requestOneSneaker(token, idSneaker))
    //     })
    //     .then(data => {
    //         sneakers.idSneaker = data.sneaker._id;
    //         sneakers.color = data.sneaker.color;
    //         sneakers.rentPrice = data.sneaker.rentPrice;
    //         sneakers.size = data.sneaker.size;
            
    //         return requestOneModel(token, data.sneaker.model)
    //     })
    //     .then( data => {
    //         sneakers.modelName = data.name;

    //         return requestOneBrand(token, data.brand)
    //     })
    //     .then( data => {
    //         sneakers.brandName = data.name;

    //         this.setState(prevState => ({
    //             arrayWishlist: [...prevState.arrayWishlist, sneakers]
    //         }))
    //     })
    //     .catch((error) => {
    //         console.log('Erreur lors de la récupération du modèle et de la marque de la sneakers de la wishlist : ', error)
    //     })
    // }

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
                                <View style={styles.rowBack}>
                                    <Text style={ styles.textAction }>{'Supprimer'.toUpperCase()}</Text>
                                    <Poubelle style={ styles.iconPoubelle } />
                                </View>
                            )}
                            rightOpenValue={-66}
                        /> 

                    </View>
                </ScrollView>
            :
            <View style={ styles.container }>
                <ContainerTitle><Title>{ 'Pas de coup de coeur'.toUpperCase() }</Title><BorderTitle /></ContainerTitle>
                <Paragraph style={ styles.textStyle }>Aucune paire chouchou vraiment ?{"\n"}
                    Ici tu peux stocker toutes tes sneakers favorites !
                </Paragraph>
                <ButtonCTA style={ styles.buttonStyle }><ButtonText>{ 'Découvrir les sneakers'.toUpperCase() }</ButtonText></ButtonCTA>
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
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: 8,
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