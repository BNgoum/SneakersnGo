import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

import Tab from '../../components/Tab/TabResearch';
import Filters from '../../components/Catalogue/Filters';
import SneakersListeItem from '../../components/Catalogue/SneakersListeItem';
import SneakersBlocItem from '../../components/Catalogue/SneakersBlocItem';
import SneakersDetails from '../../components/Catalogue/SneakersDetails';

export default class Research extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCatalogue: true,
            isBlock: false
        }
    }

    handleDisplaySneakers = isBlock => {
        if ( isBlock ) { this.setState({ isBlock: true }) }
        else { this.setState({ isBlock: false }) }
    }
    
    handleDisplayTabContent = isCatalogue => {
        if ( isCatalogue ) { this.setState({ isCatalogue: true }) }
        else { this.setState({ isCatalogue: false }) }
    }

    displayContent = () => {
        if( this.state.isCatalogue ) {
            return <View style={styles.wrapperBloc}>
                <Filters displaySneakers={ this.handleDisplaySneakers }></Filters>
                {
                    this.state.isBlock ?
                    <Swiper showsButtons={false} showsPagination={false}>
                        <SneakersBlocItem navigation={ this.props.navigation }></SneakersBlocItem>
                        <SneakersBlocItem navigation={ this.props.navigation }></SneakersBlocItem>
                        <SneakersBlocItem navigation={ this.props.navigation }></SneakersBlocItem>
                    </Swiper> :
                    <ScrollView>
                        <SneakersListeItem navigation={ this.props.navigation }></SneakersListeItem>
                        <SneakersListeItem navigation={ this.props.navigation }></SneakersListeItem>
                        <SneakersListeItem navigation={ this.props.navigation }></SneakersListeItem>
                        <SneakersListeItem navigation={ this.props.navigation }></SneakersListeItem>
                    </ScrollView>
                }
            </View>
            
        } else {
            return <View><Text>Teeeest</Text></View>
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <Tab displayTabContent={ this.handleDisplayTabContent }></Tab>
                {  this.displayContent() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapperBloc: {
        flex: 1
    }
})