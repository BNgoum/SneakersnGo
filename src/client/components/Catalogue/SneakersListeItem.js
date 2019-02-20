import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { requestOneModel, requestOneBrand } from '../../store/reducers/sneakers/action';

import BackgroundSneakers from '../../components/Style/BackgroundSneakersListe';

export default class SneakersListeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modele: "",
            idBrand: "",
            brand: "",
            pathImage: ""
        }
    }

    componentDidMount() {
        this.getModel();
    }

    getModel = () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzAzZjMwMmJiNTQ4MTAwMjNjNDZkZTIiLCJlbWFpbCI6ImF6ZSIsInBhc3N3b3JkIjoiJDJhJDEwJGRYVVJLQmpuNkFRMGpTMDBRdENCVE84cGd3TUhKYWNpVHJ1SExYRDVteE43VTJPNTYyMXBDIiwiZXhwaXJlSW4iOiIxMHMiLCJleHAiOjE1NTU3OTEyNzg0LCJpYXQiOjE1NTA2OTM2Nzh9.Xb-4eSSK4uJ_aVYjE6XAIhD7iLmOG3jRhCdTQLk6DGM';
        return new Promise((resolve, reject) => {
            const idModel = this.props.dataSneaker.model;
            resolve(requestOneModel(token, idModel))
        })
        .then(model => {
            this.setState({ modele: model.name , idBrand: model.brand })

            switch (model.name) {
                case 'Stan Smith':
                    this.setState({ pathImage: {uri: 'https://media.chausport.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/1/4181-chaussures-adidas-stan-smith-junior-blanche-vue-exterieure.png'} })
                    break;
                case 'Classic':
                    this.setState({ pathImage: {uri: 'http://static1.squarespace.com/static/569fe2da3b0be3d67be2dd39/569fe388a2bab81a504abac9/58c08922b8a79bc99bedd12f/1530019090918/Schermata+2017-10-12+alle+23.10.58.png?format=1500w'} })
                    break;
                case 'Triple S':
                    this.setState({ pathImage: {uri: 'https://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/svcohbwib0fnwbdhi2gw/balenciaga-triple-s'} })
                    break;
            }
        })
        .then(() => {
            return requestOneBrand(token, this.state.idBrand)
        })
        .then(brand => {
            this.setState({ brand: brand.name })
        })
        .catch((error) => console.log('Erreur lors de la récupération d\'une Sneaker (Sneaker.js) :', error ))
    }

    render() {
        return (
            <View style={ styles.container }>
               <TouchableOpacity style={ styles.wrapperSneakersListe } onPress={ () => this.props.navigation.navigate('DetailsSneakers') }>
                <View style={ styles.wrapperSneakers }>
                    <Image style={ styles.sneakersImage } source={this.state.pathImage} />
                    <BackgroundSneakers style={ styles.backgroundSneakers }></BackgroundSneakers>
                </View>
                <View style={ styles.wrapperInformations }>
                    <Text style={ styles.modele }>{ this.state.brand.toUpperCase() }</Text>
                    <Text style={ styles.marque }>{ this.state.modele.toUpperCase() }</Text>
                    <Text style={ styles.prix }>A partir de { this.props.dataSneaker.rentPrice }€ /jour</Text>
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
        width: 132,
        height: 110,
        resizeMode: 'center',
        zIndex: 1
    },
    wrapperInformations: {
        display: 'flex',
    },
    marque: {
        fontSize: 11,
        color: '#9b9b9b',
        marginBottom: 7
    },
    modele: {
        color: '#070e37',
        fontSize: 15,
        fontFamily: 'roboto-bold',
        marginBottom: 2        
    },
    prix: {
        fontSize: 11,
        fontFamily: 'brawler-regular',
        color: '#070e37',
    }
})
