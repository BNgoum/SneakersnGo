import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { connect } from 'react-redux';

import { requestOneBrand, requestOneModel, requestOneSneaker } from '../../store/reducers/sneakers/action';

import BackgroundSneakers from '../Style/BackgroundSneakersListe';
import ButtonCTA from '../Style/Button/Button';
import ButtonText from '../Style/Button/ButtonText';

class SwipeableSneakersListeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathImage: {},
            brandName: "",
            modelName: "",
            rentPrice: 0,
            color: "",
            idSneakers: "",
            size: ""
        }
    }

    componentWillMount() {
        this.getModelAndBrand();
    }

    setImage = () => {
        switch (this.state.modelName) {
            case 'Stan Smith':
                this.setState({ pathImage: require("../../images/stansmith.png") })
                break;
            case 'Classic':
                this.setState({ pathImage: require("../../images/vans.png") })
                break;
            case 'Triple S':
                this.setState({ pathImage: require("../../images/balenciaga_triple_s.png") })
                break;
            case 'Off Court':
                this.setState({ pathImage: require("../../images/offwhite.png")})
                break;
            case 'Trainers Speed':
                this.setState({ pathImage: require("../../images/trainersspeed.png")})
                break;
            case 'Cross Chainer':
                this.setState({ pathImage: require("../../images/crosschainer.png")})
                break;
            case 'Yeezy Boost 350 V2':
                this.setState({ pathImage: require("../../images/yeezy.png")})
                break;
            case 'Chain Reaction':
                this.setState({ pathImage: require("../../images/chainreaction.png")})
                break;
        }
    }

    getModelAndBrand = () => {
        const token = this.props.state.AuthenticationReducer.isLogin;

        return new Promise((resolve, reject) => {   
            resolve(requestOneSneaker(token, this.props.data.item))
        })
        .then(data => {
            this.setState({
                idSneakers: data.sneaker._id,
                color: data.sneaker.color,
                rentPrice: data.sneaker.rentPrice,
                size: data.sneaker.size
            })
            
            return requestOneModel(token, data.sneaker.model)
        })
        .then( data => {
            this.setState({ modelName: data.name })

            return requestOneBrand(token, data.brand)
        })
        .then( data => {
            this.setState({ brandName: data.name })
        })
        .then(() => {
            this.setImage();
        })
        .catch((error) => {
            console.log('Erreur lors de la récupération du modèle et de la marque de la sneakers de la wishlist : ', error)
        })
    }

    render() {
        return (
            <View style={ styles.container }>
               <TouchableOpacity style={ styles.wrapperSneakersListe } onPress={ () => this.props.navigation.navigate('Research') }>
                    <View style={ styles.wrapperSneakers }>
                        <Image style={ styles.sneakersImage } source={this.state.pathImage} />
                        <BackgroundSneakers style={ styles.backgroundSneakers }></BackgroundSneakers>
                    </View>
                    <View style={ styles.wrapperInformations }>
                        <Text style={ styles.marque }>{ this.state.brandName.toUpperCase() }</Text>
                        <Text style={ styles.modele }>{ this.state.modelName.toUpperCase() }</Text>
                        <Text style={ styles.prix }>A partir de { this.state.rentPrice }€ /jour</Text>
                        <ButtonCTA style={ styles.buttonStyle }><ButtonText style={ styles.buttonTextStyle }>{ 'Louer'.toUpperCase() }</ButtonText></ButtonCTA>
                    </View>
               </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 130,
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    wrapperSneakersListe: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20
    },
    wrapperSneakers: {
        position: 'relative',
        width: 132,
        height: 110,
    },
    backgroundSneakers: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -34}, { translateY: -52}, { rotate: '13deg' }],
        zIndex: 0
    },
    sneakersImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'center',
        zIndex: 1
    },
    wrapperInformations: {
        display: 'flex',
    },
    marque: {
        color: '#070e37',
        fontSize: 15,
        fontFamily: 'roboto-bold',
        marginBottom: 2
    },
    modele: {
        fontSize: 11,
        color: '#9b9b9b',
        marginBottom: 7
    },
    prix: {
        fontSize: 11,
        fontFamily: 'brawler-regular',
        color: '#070e37',
    },
    buttonStyle: {
        width: 86,
        height: 22,
        marginTop: 18
    },
    buttonTextStyle: {
        fontSize: 10
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

export default connect(mapStateToProps, mapDispatchToProps)(SwipeableSneakersListeItem)