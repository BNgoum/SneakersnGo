import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

import Tab from '../../components/Tab/Tab';
import Filters from '../../components/Catalogue/Filters';
import SneakersListeItem from '../../components/Catalogue/SneakersListeItem';
import SneakersBlocItem from '../../components/Catalogue/SneakersBlocItem';

export default class Research extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Tab></Tab>
                <Filters></Filters>
                {/* <ScrollView>
                    <SneakersListeItem></SneakersListeItem>
                    <SneakersListeItem></SneakersListeItem>
                    <SneakersListeItem></SneakersListeItem>
                    <SneakersListeItem></SneakersListeItem>
                    <SneakersListeItem></SneakersListeItem>
                    <SneakersListeItem></SneakersListeItem>
                    <SneakersListeItem></SneakersListeItem>
                    <SneakersListeItem></SneakersListeItem>
                </ScrollView> */}
                <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
                    <SneakersBlocItem></SneakersBlocItem>
                    <SneakersBlocItem></SneakersBlocItem>
                    <SneakersBlocItem></SneakersBlocItem>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})