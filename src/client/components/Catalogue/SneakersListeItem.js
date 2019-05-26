import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import { requestOneBrand, requestAllSneakerByModel } from '../../store/reducers/sneakers/action';

import BackgroundSneakers from '../../components/Style/BackgroundSneakersListe';

class SneakersListeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modele: "",
            idBrand: "",
            brand: "",
            pathImage: {},
            sneakers: {}
        }
    }

    componentWillMount() {
        this.getBrand();
        this.getAllSneakers()
    }

    getAllSneakers = () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzAzZjMwMmJiNTQ4MTAwMjNjNDZkZTIiLCJlbWFpbCI6ImF6ZSIsInBhc3N3b3JkIjoiJDJhJDEwJGRYVVJLQmpuNkFRMGpTMDBRdENCVE84cGd3TUhKYWNpVHJ1SExYRDVteE43VTJPNTYyMXBDIiwiZXhwaXJlSW4iOiIxMHMiLCJleHAiOjE1NTU3OTEyNzg0LCJpYXQiOjE1NTA2OTM2Nzh9.Xb-4eSSK4uJ_aVYjE6XAIhD7iLmOG3jRhCdTQLk6DGM';
        const idModel = this.props.dataModel._id;
        const nameModel = this.props.dataModel.name;

        return new Promise((resolve, reject) => {
            resolve(requestAllSneakerByModel(token, idModel))
        })
        .then(sneakers => {
            this.setState({ sneakers })

            switch (nameModel) {
                case 'Stan Smith':
                    this.setState({ pathImage: require("../../images/stansmith.png")})
                    break;
                case 'Classic':
                    this.setState({ pathImage: require("../../images/vans.png")})
                    break;
                case 'Triple S':
                    this.setState({ pathImage: require("../../images/balenciaga_triple_s.png")})
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
        })
        .catch((error) => console.log('Erreur lors de la récupération d\'une Sneaker (Sneaker.js) :', error ))
    }

    getBrand = () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzAzZjMwMmJiNTQ4MTAwMjNjNDZkZTIiLCJlbWFpbCI6ImF6ZSIsInBhc3N3b3JkIjoiJDJhJDEwJGRYVVJLQmpuNkFRMGpTMDBRdENCVE84cGd3TUhKYWNpVHJ1SExYRDVteE43VTJPNTYyMXBDIiwiZXhwaXJlSW4iOiIxMHMiLCJleHAiOjE1NTU3OTEyNzg0LCJpYXQiOjE1NTA2OTM2Nzh9.Xb-4eSSK4uJ_aVYjE6XAIhD7iLmOG3jRhCdTQLk6DGM';
        return new Promise((resolve, reject) => {
            const idBrand = this.props.dataModel.brand;
            resolve(requestOneBrand(token, idBrand))
        })
        .then(brand => {
            this.setState({ brand })
        })
        .catch((error) => console.log('Erreur lors de la récupération d\'une Sneaker (Sneaker.js) :', error ))
    }

    handleOnPress = () => {
        return new Promise((resolve, reject) => {
            const action = { type: "SET_CURRENT_SNEAKERS", value: this.state.sneakers }

            resolve(this.props.dispatch(action))
        })
        .then(() => {
            const action = { type: "SET_CURRENT_BRAND", value: this.state.brand }

            this.props.dispatch(action)
        })
        .then(() => {
            const action = { type: "SET_CURRENT_MODEL", value: this.props.dataModel }

            this.props.dispatch(action)
        })
        .then(() => {
            const action = { type: "SET_CURRENT_PATH_IMAGE", value: this.state.pathImage }

            this.props.dispatch(action)
        })
        .then(() => {
            this.props.navigation.navigate('DetailsSneakers')
        })
    }

    render() {
        const dataModel = this.props.dataModel;
        return (
            <View style={ styles.container }>
               <TouchableOpacity style={ styles.wrapperSneakersListe } onPress={ () => this.handleOnPress() }>
                <View style={ styles.wrapperSneakers }>
                    <Image style={ styles.sneakersImage } source={this.state.pathImage} />
                    <BackgroundSneakers style={ styles.backgroundSneakers }></BackgroundSneakers>
                </View>
                <View style={ styles.wrapperInformations }>
                    <Text style={ styles.marque }>{ this.state.brand.name !== undefined && this.state.brand.name.toUpperCase() }</Text>
                    <Text style={ styles.modele }>{ dataModel.name.toUpperCase() }</Text>
                    <Text style={ styles.prix }>A partir de { this.state.sneakers.length > 0 && this.state.sneakers[0].rentPrice }€ /jour</Text>
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
    modele: {
        fontSize: 11,
        color: '#9b9b9b',
        marginBottom: 7
    },
    marque: {
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

const mapStateToProps = (state) => { 
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SneakersListeItem)