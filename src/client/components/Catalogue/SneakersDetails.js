import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { requestOneBrand, requestAllSneakerByModel, addToWishlist } from '../../store/reducers/sneakers/action';

import { CoeurInactive, CoeurActive, Croix } from '../../images/icons';
import SwiperSneakers from '../../components/Catalogue/SwiperSneakers';
import Price from '../../components/Catalogue/Price';
import TextLink from '../Style/Text/TextLink'
import ButtonText from '../Style/Button/ButtonText'
import Button from '../Style/Button/Button';
import InputSelect from '../../components/Form/InputSelect';
import DatePickerCustom from '../../components/Form/DatePicker';
import Toast from '../../components/Style/Toast';

class SneakersDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenDetails: false,
            isLiked: false,
            modele: "",
            idBrand: "",
            brand: "",
            pathImage: {},
            size: [],
            color: [],
            selectedSize: "",
            isLogin: true
        }
    }

    componentWillMount() {
        // this.getModel();
        this.setImage();
        this.setColorAndSizeSneakers()
    }

    handleOnPressDetails = () => {
        this.setState({
            isOpenDetails: !this.state.isOpenDetails
        })
    }

    handleOnPressHeart = () => {
        const token = this.props.state.AuthenticationReducer.isLogin;
        const currentSneakers = this.props.state.SneakersReducer.currentSneakers;

        // On check si le user est bien connecté en vérifiant si le token est dans le state redux isLogin
        if (!token) {
            this.setState({ isLogin: false })
            setTimeout( () => { this.setState({ isLogin: true }) }, 3500);
            
        } else {
            if ( this.state.isLiked ) {
                // On retire la sneakers ou le modèle de la wishlist
                this.setState({ isLiked: !this.state.isLiked })
            } else {
                // On ajoute la sneakers ou le modèle dans la wishlist
                console.log('In else: ', this.state.selectedSize)

                // Une taille correspond à un id de sneakers
                // Si le user ne sélectionne pas la taille, on ajoute le modèle et non pas la sneakers dans la wishlist
                if ( this.state.selectedSize !== "") {
                    let sneakerId = "";
                    currentSneakers.map(sneakers => {
                        if ( this.state.selectedSize == sneakers.size) {
                            sneakerId = sneakers._id;
                        }
                    })

                    console.log('Sneakers id : ', sneakerId)

                    return new Promise((resolve, reject) => {
                        resolve(addToWishlist(token, sneakerId))
                    })
                    .then(data => {
                        console.log('Data : ', data.data)
                        this.setState({ isLiked: !this.state.isLiked })
                    })
                }
            }
        }
    }

    getModel = () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzAzZjMwMmJiNTQ4MTAwMjNjNDZkZTIiLCJlbWFpbCI6ImF6ZSIsInBhc3N3b3JkIjoiJDJhJDEwJGRYVVJLQmpuNkFRMGpTMDBRdENCVE84cGd3TUhKYWNpVHJ1SExYRDVteE43VTJPNTYyMXBDIiwiZXhwaXJlSW4iOiIxMHMiLCJleHAiOjE1NTU3OTEyNzg0LCJpYXQiOjE1NTA2OTM2Nzh9.Xb-4eSSK4uJ_aVYjE6XAIhD7iLmOG3jRhCdTQLk6DGM';
        const currentSneakers = this.props.state.SneakersReducer.currentSneakers;
        console.log('Current sneakers : ', currentSneakers)

        return new Promise((resolve, reject) => {
            const idModel = currentSneakers[0].model;
            resolve(requestAllSneakerByModel(token, idModel))
        })
        .then(model => {
            //this.setState({ modele: model.name , idBrand: model.brand })
            //console.log('Sneaker by model : ', model)
            switch (model[0].name) {
                case 'Stan Smith':
                    this.setState({ pathImage: require("../../images/stansmith.png"), modele: model[0].name , idBrand: model[0].brand })
                    break;
                case 'Classic':
                    this.setState({ pathImage: require("../../images/vans.png"), modele: model[0].name , idBrand: model[0].brand })
                    break;
                case 'Triple S':
                    this.setState({ pathImage: require("../../images/balenciaga_triple_s.png"), modele: model[0].name , idBrand: model[0].brand })
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

    setImage = () => {
        const currentModel = this.props.state.SneakersReducer.currentModel;

        switch (currentModel.name) {
            case 'Stan Smith':
                this.setState({ pathImage: require("../../images/stansmith.png") })
                break;
            case 'Classic':
                this.setState({ pathImage: require("../../images/vans.png") })
                break;
            case 'Triple S':
                this.setState({ pathImage: require("../../images/balenciaga_triple_s.png") })
                break;
        }
    }

    setColorAndSizeSneakers = () => {
        this.props.state.SneakersReducer.currentSneakers.map(sneakers => {
            this.setState(prevState => ({
                size: [...prevState.size, sneakers.size.toString()],
                color: [...prevState.color, sneakers.color]
            }))
        })
    }

    handleInputSelectSize = selectedSize => {
        this.setState({ selectedSize })
    }

    render() {
        // console.log('Current model : ', this.props.state.SneakersReducer.currentModel)
        //console.log('Current sneakers : ', this.props.state.SneakersReducer.currentSneakers)
        // console.log('Current brand : ', this.props.state.SneakersReducer.currentBrand)
        // console.log('Path image render : ', this.state.pathImage)
        // console.log(' Set Size : ', this.state.size)
        // console.log(' Set colors : ', this.state.color)
        
        //console.log('Props sneakers daetails received : ', this.props.state.AuthenticationReducer)
        const currentSneakers = this.props.state.SneakersReducer.currentSneakers;
        const currentModel = this.props.state.SneakersReducer.currentModel;
        const currentBrand = this.props.state.SneakersReducer.currentBrand;
        const currentPathImage = this.props.state.SneakersReducer.pathImage;
        return (
            <ScrollView style={ styles.container }>
                <TouchableOpacity onPress={ () => this.handleOnPressHeart() }>
                    {
                        this.state.isLiked ? 
                        <CoeurActive style={ styles.wishlistPicto }></CoeurActive> :
                        <CoeurInactive style={ styles.wishlistPicto }></CoeurInactive>
                    }
                </TouchableOpacity>

                {
                    !this.state.isLogin && <Toast text="Vous devez vous connecter pour ajouter cette sneakers à la wishlist !"/>
                }
                
                <SwiperSneakers brand={ currentBrand } model={ currentModel } pathImage={ currentPathImage }></SwiperSneakers>

                <View style={ styles.wrapperContent }>
                    <Text style={ styles.description }>Petit texte court pour expliquer ou décrire la paire de sneakers dans la fiche produit.</Text>

                    {
                        this.state.isOpenDetails ? 
                        <View style={ styles.wrapperDetailsDeplie }>
                            <TouchableOpacity onPress={ () => this.handleOnPressDetails() }  style={ styles.wrapperLinkDetail }>
                                <Text style={ styles.linkDetailsDeplie }>{ 'Plus de détails'.toUpperCase() }</Text>
                                <Croix></Croix>
                            </TouchableOpacity>
                            <View style={ styles.wrapperDetailsText }>
                                <Text style={ styles.titleDetails }>Composition extérieure</Text>
                                <Text style={ styles.textDetails }>Coton 100%</Text>
                                <Text style={ styles.textDetails }>Cuir 100%</Text>
                            </View>
                            <View style={ styles.wrapperDetailsText }>
                                <Text style={ styles.titleDetails }>Composition de la semelle</Text>
                                <Text style={ styles.textDetails }>Caoutchouc 100%</Text>
                            </View>
                        </View> :
                        <TouchableOpacity style={ styles.linkDetails } onPress={ () => this.handleOnPressDetails() }>
                            <TextLink>{ 'Plus de détails'.toUpperCase() }</TextLink>
                        </TouchableOpacity>
                    }

                    <InputSelect placeholder="Coloris" data={this.state.color}/>
                    <InputSelect placeholder="Taille" data={this.state.size} sendPropsToParent={ this.handleInputSelectSize }/>
                    <DatePickerCustom placeholder="Début de location" />
                    <DatePickerCustom placeholder="Fin de location" />

                    <Price price={ currentSneakers[0].rentPrice } style={ styles.price }></Price>
                </View>

                <Button style={ styles.buttonValidate }>
                    <ButtonText>{ 'Je les veux'.toUpperCase() }</ButtonText>
                </Button>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        paddingBottom: 40
    },
    wishlistPicto: {
        alignSelf: 'flex-end',
        marginBottom: 32,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    description: {
        fontSize: 13,
        color: '#4a4949',
        fontFamily: 'brawler-regular',
        lineHeight: 20,
        letterSpacing: 1,
        marginVertical: 16,
    },
    linkDetails: {
        marginBottom: 24,
    },
    wrapperLinkDetail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    wrapperDetailsDeplie: {
        borderBottomWidth: 1,
        borderBottomColor: '#070e37',
        marginBottom: 24,
    },
    wrapperContent: {
        marginHorizontal: 20
    },  
    linkDetailsDeplie: {
        color: '#070e37',
        fontSize: 13,
        letterSpacing: 1,
        fontFamily: 'roboto-bold'
    },
    wrapperDetailsText: {
        marginBottom: 16
    },
    titleDetails: {
        fontFamily: 'brawler-regular',
        fontSize: 12,
        color: '#4a4a4a',
        lineHeight: 26,
        letterSpacing: 1
    },
    textDetails: {
        fontFamily: 'brawler-regular',
        fontSize: 12,
        color: '#9b9b9b',
        lineHeight: 20,
        letterSpacing: 1
    },
    buttonValidate: {
        alignSelf: 'center',
        marginBottom: 40
    },
    price: {
        marginTop: 32
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

export default connect(mapStateToProps, mapDispatchToProps)(SneakersDetails)