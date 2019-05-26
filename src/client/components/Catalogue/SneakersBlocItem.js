import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import { requestOneBrand, requestAllSneakerByModel } from '../../store/reducers/sneakers/action';

import BackgroundSneakersBloc from '../Style/BackgroundSneakersBloc';

class SneakersBlocItem extends Component {
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
               <TouchableOpacity style={ styles.wrapperSneakersBloc } onPress={ () => this.handleOnPress() }>
                    <View style={ styles.wrapperInformations }>
                        <Text style={ styles.marque }>{ this.state.brand.name !== undefined && this.state.brand.name.toUpperCase() }</Text>
                        <Text style={ styles.modele }>{ dataModel.name.toUpperCase() }</Text>
                        <Text style={ styles.prix }>A partir de { this.state.sneakers.length > 0 && this.state.sneakers[0].rentPrice }€ /jour</Text>
                    </View>
                    <View style={ styles.wrapperSneakers }>
                        <Image style={ styles.sneakersImage } source={ this.state.pathImage } />
                        <BackgroundSneakersBloc style={ styles.backgroundSneakers }></BackgroundSneakersBloc>
                    </View>
               </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapperSneakersBloc: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 0
    },
    wrapperSneakers: {
        position: 'relative',
        width: 253,
        height: 180,
    },
    backgroundSneakers: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -92}, { translateY: -163}, { rotate: '13deg' }],
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
        marginLeft: 120,
        zIndex: 1
    },
    marque: {
        color: '#070e37',
        fontSize: 28,
        fontFamily: 'roboto-bold',
        marginBottom: 2
    },
    modele: {
        fontSize: 15,
        color: '#9b9b9b',
        marginBottom: 7
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

export default connect(mapStateToProps, mapDispatchToProps)(SneakersBlocItem)