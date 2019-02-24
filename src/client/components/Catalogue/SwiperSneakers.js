import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import Swiper from 'react-native-swiper';
import BackgroundSneakersBloc from '../../components/Style/BackgroundSneakersBloc';
import { CoeurInactive, Croix } from '../../images/icons';
import TextLink from '../Style/Text/TextLink'
import ButtonText from '../Style/Button/ButtonText'
import Button from '../Style/Button/Button';
import Select from '../Form/Select';

export default class SwiperSneakers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modele: this.props.model,
            brand: this.props.brand,
            pathImage: this.props.pathImage
        }
    }

    render() {
        return (
            <View>
                <View style={ styles.wrapperSliderImage }>
                    <Swiper style={styles.wrapperImage} showsButtons={false} activeDotColor="#070e37">
                        <Image style={ styles.sneakersImage } source={this.props.pathImage} />
                        <Image style={ styles.sneakersImage } source={this.props.pathImage} />
                    </Swiper>
                    <BackgroundSneakersBloc style={ styles.backgroundSneakers }></BackgroundSneakersBloc>
                </View>
                <View style={ styles.wrapperTitle }>
                    <Text style={ styles.marque }>{ this.props.brand.name }</Text>
                    <Text style={ styles.modele }>{ this.props.model.name }</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperSliderImage: {
        height: 260
    },
    wrapperImage: {
        zIndex: 5
    },
    sneakersImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'center',
        alignSelf: 'center'
    },
    backgroundSneakers: {
        alignSelf: 'center',
        transform: [{rotate: '13deg'}],
        zIndex: -1
    },
    wrapperTitle: {
        alignSelf: 'flex-start',
        borderBottomColor: '#ea2300',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginTop: 16,
        marginHorizontal: 20
    },
    marque: {
        color: '#070e37',
        fontSize: 25,
        fontFamily: 'roboto-bold',
        marginBottom: 2,
        letterSpacing: 1,
    },
    modele: {
        fontSize: 15,
        color: '#9b9b9b',
        letterSpacing: 1,
    }
})
