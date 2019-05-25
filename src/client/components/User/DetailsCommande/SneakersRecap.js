import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { requestOneSneaker, requestOneBrand, requestOneModel} from '../../../store/reducers/sneakers/action';

import BackgroundSneakers from '../../Style/BackgroundSneakersListe';
import CaracteristiquesSneakers from '../../Panier/CaracteristiquesSneakers';
import RecapDate from '../../Panier/RecapDate';
import Footer from '../../Panier/Footer';

class SneakersRecap extends Component {
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

    componentDidMount() {
        this.getModelAndBrand();
    }

    getModelAndBrand = () => {
        const token = this.props.state.AuthenticationReducer.isLogin;

        return new Promise((resolve, reject) => {
            resolve(requestOneSneaker(token, "5c421c42b4251800248d4f5f"))
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
            console.log('Erreur lors de la récupération du modèle et de la marque de la sneakers du panier : ', error)
        })
    }

    setImage = () => {
        switch (this.state.modelName) {
            case 'Stan Smith':
                this.setState({ pathImage: require("../../../images/stansmith.png") })
                break;
            case 'Classic':
                this.setState({ pathImage: require("../../../images/vans.png") })
                break;
            case 'Triple S':
                this.setState({ pathImage: require("../../../images/balenciaga_triple_s.png") })
                break;
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.containerSneakers }> 
                    <View style={ styles.wrapperSneakers }>
                        <Image style={ styles.sneakersImage } source={this.state.pathImage} resizeMode={"center"} />
                        <BackgroundSneakers style={ styles.backgroundSneakers }></BackgroundSneakers>
                    </View>
                    <View style={ styles.wrapperInformations }>
                        <Text style={ styles.marque }>{ this.state.brandName.toUpperCase() }</Text>
                        <Text style={ styles.modele }>{ this.state.modelName.toUpperCase() }</Text>
                        <Text style={ styles.prix }>{ this.state.rentPrice }€ /jour</Text>

                        <CaracteristiquesSneakers caracteristiqueKey="Couleur : " value={ this.state.color } />
                        <CaracteristiquesSneakers caracteristiqueKey="Taille : " value={ this.state.size.toString() } />
                        <CaracteristiquesSneakers caracteristiqueKey="Qté : " value="1" />
                    </View>
                </View>

                <RecapDate dateDebut="Jeudi 18 Févr." dateFin="Samedi 20 Févr. 2019" totalDate={3} />

                <Footer prix={this.state.rentPrice} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4',
        width: '100%'
    },
    containerSneakers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 24
    },
    sneakersImage: {
        width: '100%',
        height: '100%',
        zIndex: 1
    },
    wrapperInformations: {
        width: '60%',
        height: 100,
        paddingLeft: 16 
    },
    wrapperSneakers: {
        position: 'relative',
        width: '40%',
        height: 100
    },
    backgroundSneakers: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -34}, { translateY: -52}, { rotate: '13deg' }],
        zIndex: 0
    },
    marque: {
        fontSize: 11,
        color: '#070e37',
        fontFamily: 'roboto-bold',
        letterSpacing: 1
    },
    modele: {
        fontSize: 11,
        color: '#070e37',
        fontFamily: 'roboto-bold',
        letterSpacing: 1
    },
    prix: {
        fontSize: 10,
        letterSpacing: 1,
        fontFamily: 'brawler-regular',
        color: "#333",
        marginTop: 6,
        marginBottom: 16
    }
})

const mapStateToProps = (state) => { 
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SneakersRecap)