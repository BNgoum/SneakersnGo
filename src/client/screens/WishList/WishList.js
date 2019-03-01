import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { connect } from 'react-redux';

import { requestOneBrand, requestOneModel } from '../../store/reducers/sneakers/action';

import SneakersListeItem from '../../components/WishList/SwipeableSneakersListeItem';
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
            arrayWishlist: ["err", "rer", "po"],
            token: this.props.state.AuthenticationReducer.isLogin
        }
    }

    componentDidMount() {
        //console.log('Props : ', this.props.state.AuthenticationReducer.user.wishlist)
        
        if ( this.state.token ) {
            const wishlist = this.props.state.AuthenticationReducer.user.wishlist;
            wishlist.map(sneakers => {
                console.log('Sneakers : ', sneakers)
                this.getModelAndBrand(sneakers)
            })
        }
    }

    getModelAndBrand = (idModel) => {
        const token = this.props.state.AuthenticationReducer.isLogin;
        console.log('Idmodel : ', idModel)
        console.log('Token : ', token)
        return new Promise((resolve, reject) => {   
            resolve(requestOneModel(token, idModel))
        })
        .then(data => {
            console.log('Data : ', data)
        })
    }

    render() {
        return (
            this.state.arrayWishlist.length > 0 ?
            <View>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "Mes coups de coeur".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <View style={ styles.wrapperWishlist }>
                    <SwipeListView
                        useFlatList
                        data={this.state.arrayWishlist}
                        keyExtractor={(item) => item.toString()}
                        renderItem={ (data, rowMap) => (
                            <View style={styles.rowFront}>
                                <SneakersListeItem style={ styles.listSneakers } navigation={ this.props.navigation }></SneakersListeItem>
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
            </View>:
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
        borderTopColor: '#c4c4c4'
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