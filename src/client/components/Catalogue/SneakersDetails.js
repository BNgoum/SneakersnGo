import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { addToWishlist, deleteFromWishlist, isInCart, addToCart } from '../../store/reducers/sneakers/action';

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
            isLogin: false,
            isLoginForCart: false,
            isAddToWishlist: false,
            isAddToCart: false,
            isInCart: false,
            isSizeSelected: false,
            isDeleteFromWishlist: false
        }
    }

    componentDidMount() {
        // this.getModel();
        this.setImage();
        this.setColorAndSizeSneakers()

        // Si le user est connecté, on check si la paire de sneakers est déjà dans sa wishlist
        if (this.props.state.AuthenticationReducer.isLogin) {
            this.checkIsInWishlist()
        }
    }

    handleOnPressDetails = () => {
        this.setState({
            isOpenDetails: !this.state.isOpenDetails
        })
    }

    checkIsInWishlist = () => {
        const wishlist = this.props.state.AuthenticationReducer.user.wishlist;
        const wishlistRedux = this.props.state.SneakersReducer.wishlist;
        const currentSneakers = this.props.state.SneakersReducer.currentSneakers;

        wishlistRedux.map(sneakersWishlist => {
            currentSneakers.map(sneakersCurrent => {
                if (sneakersWishlist == sneakersCurrent._id) {
                    this.setState({ isLiked: true })
                }
            })
        })
    }

    handleOnPressHeart = () => {
        const token = this.props.state.AuthenticationReducer.isLogin;
        const currentSneakers = this.props.state.SneakersReducer.currentSneakers;
        const wishlistRedux = this.props.state.SneakersReducer.wishlist;

        // On check si le user est bien connecté en vérifiant si le token est dans le state redux isLogin
        if (!token) {
            // Si le user n'est pas connecté, on lui affiche un toast d'erreur
            this.setState({ isLogin: true })
            setTimeout( () => { this.setState({ isLogin: false }) }, 2500);
            
        } else {
            // Si le user est connecté et que la sneakers est déjà liker
            if ( this.state.isLiked ) {
                let sneakerIdToDelete = "";
                // On retire la sneakers ou le modèle de la wishlist
                currentSneakers.map(sneakers => {
                    wishlistRedux.map(sneakersIdWishlist => {
                        if (sneakers._id == sneakersIdWishlist) {
                            sneakerIdToDelete = sneakers._id;
                        }
                    })
                })

                return new Promise((resolve, reject) => {
                    resolve(deleteFromWishlist(token, sneakerIdToDelete))
                })
                .then(() => {
                    let index = wishlistRedux.indexOf(sneakerIdToDelete);
                    if (index > -1) {
                        wishlistRedux.splice(index, 1);
                    }

                    const action = { type: "SET_WISHLIST", value: wishlistRedux }

                    return this.props.dispatch(action);
                })
                .then(() => {
                    this.setState({ isLiked: !this.state.isLiked, isDeleteFromWishlist: true })
                    setTimeout( () => { this.setState({ isDeleteFromWishlist: false }) }, 2500);
                })
            } else {
                // Sinon, si la sneakers n'est pas liker, On ajoute la sneakers ou le modèle dans la wishlist

                // Une taille correspond à un id de sneakers
                // Si le user ne sélectionne pas la taille, on ajoute le modèle et non pas la sneakers dans la wishlist
                if ( this.state.selectedSize !== "") {
                    let sneakerId = "";
                    currentSneakers.map(sneakers => {
                        if ( this.state.selectedSize == sneakers.size) {
                            sneakerId = sneakers._id;
                        }
                    })

                    return new Promise((resolve, reject) => {
                        resolve(addToWishlist(token, sneakerId))
                    })
                    .then(() => {
                        const action = { type: "ADD_WISHLIST", value: sneakerId }

                        return this.props.dispatch(action);
                    })
                    .then(() => {
                        this.setState({ isLiked: !this.state.isLiked, isAddToWishlist: true })
                        setTimeout( () => { this.setState({ isAddToWishlist: false }) }, 2500);
                    })
                    .catch(error => console.log('Erreur lors de l\'ajout dans la wishlist de la sneakers : ', error))
                } else {
                    this.setState({ isSizeSelected: true })
                    setTimeout( () => { this.setState({ isSizeSelected: false }) }, 2500);
                }
            }
        }
    }

    handleOnPressCart = () => {
        const token = this.props.state.AuthenticationReducer.isLogin;
        const currentSneakers = this.props.state.SneakersReducer.currentSneakers;

        // On check si le user est bien connecté en vérifiant que le token soit dans le state redux isLogin
        if (!token) {
            // Si le user n'est pas connecté, on lui affiche un toast d'erreur
            this.setState({ isLoginForCart: true });
            setTimeout( () => { this.setState({ isLoginForCart: false }) }, 2500);
        } else {
            let sneakerId = "";

            currentSneakers.map(sneakers => {
                if (sneakers.size == this.state.selectedSize) {
                    sneakerId = sneakers._id;
                }
            })

            if ( sneakerId === "" ) {
                this.setState({ isSizeSelected: true });
                setTimeout( () => { this.setState({ isSizeSelected: false }) }, 2500);
            } else {
                // On check si l'id sneaker est présente dans le panier
                return new Promise((resolve, reject) => {
                    resolve(isInCart(token, sneakerId))
                })
                .then(data => {
                    // Si elle est déjà présente, on affiche un toast d'erreur
                    if (data) {
                        this.setState({ isInCart: true });
                        setTimeout( () => { this.setState({ isInCart: false }) }, 2500);
                    } else {
                        // Sinon on l'ajoute dans le panier et dans le state redux puis on affiche un toast d'info
                        return new Promise((resolve, reject) => {
                            resolve(addToCart(token, sneakerId))
                        })
                        .then(() => {

                            const action = { type: "ADD_CART", value: sneakerId }

                            return this.props.dispatch(action);
                        })
                        .then(() => {
                            this.setState({ isAddToCart: true })
                            setTimeout( () => { this.setState({ isAddToCart: false }) }, 2500);
                        })
                        .catch(error => console.log('Erreur lors de l\'ajout dans le panier (SneakersDetails.js) : ', error))
                    }
                })
                .catch(error => console.log('Erreur lors de la vérification de la sneakers dans le panier: ', error))
            }
        }
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
        const currentSneakers = this.props.state.SneakersReducer.currentSneakers;
        const price =  currentSneakers;
        const currentModel = this.props.state.SneakersReducer.currentModel;
        const currentBrand = this.props.state.SneakersReducer.currentBrand;
        const currentPathImage = this.props.state.SneakersReducer.pathImage;

        return (
            <View style={ styles.wrapper }>
                <ScrollView style={ styles.container }>
                    <TouchableOpacity onPress={ () => this.handleOnPressHeart() }>
                        {
                            this.state.isLiked ? 
                            <CoeurActive style={ styles.wishlistPicto } /> :
                            <CoeurInactive style={ styles.wishlistPicto } />
                        }
                    </TouchableOpacity>

                    {
                        this.state.isLogin && <Toast text="Vous devez vous connecter pour ajouter cette sneakers à la wishlist."/>
                    }
                    
                    {
                        this.state.isLoginForCart && <Toast text="Vous devez vous connecter pour ajouter cette sneakers au panier."/>
                    }

                    {
                        this.state.isAddToWishlist && <Toast text="La sneakers a bien été ajouté dans la wishlist."/>
                    }
                    
                    {
                        this.state.isSizeSelected && <Toast text="Sélectionnez une taille pour ajouter la sneakers."/>
                    }

                    {
                        this.state.isDeleteFromWishlist && <Toast text="La sneakers est retirée de la wishlist."/>
                    }

                    {
                        this.state.isInCart && <Toast text="La sneakers est déjà dans le panier."/>
                    }

                    {
                        this.state.isAddToCart && <Toast text="La sneakers est ajouté dans le panier."/>
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

                        <Price price={ price } style={ styles.price }></Price>
                    </View>

                    <Button style={ styles.buttonValidate } onPress={ () => this.handleOnPressCart() }>
                        <ButtonText>{ 'Je les veux'.toUpperCase() }</ButtonText>
                    </Button>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        paddingBottom: 40
    },
    wrapper: {
        flex: 1,
        position: 'relative'
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