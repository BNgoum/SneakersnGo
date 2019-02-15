import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {Swiper, SwipeRow} from 'react-native-swiper';
import { SwipeListView } from 'react-native-swipe-list-view';

import SneakersListeItem from '../../components/WishList/SwipeableSneakersListeItem';
import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import Title from '../../components/Style/Text/Title';
import BorderTitle from '../../components/Style/Text/BorderBottomTitle';
import Paragraph from '../../components/Style/Text/Paragraph';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';

import { Poubelle } from '../../images/icons';

export default class Research extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayWishlist: ["er", "ty"]
        }
    }

    render() {
        return (
            this.state.arrayWishlist.length > 0 ?
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
                /> :
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
  }
})