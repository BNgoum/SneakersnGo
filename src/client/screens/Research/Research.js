import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import Tab from '../../components/Tab/TabResearch';
import Filters from '../../components/Catalogue/Filters';
import SneakersListeItem from '../../components/Catalogue/SneakersListeItem';
import SneakersBlocItem from '../../components/Catalogue/SneakersBlocItem';
import SneakersDetails from '../../components/Catalogue/SneakersDetails';
import SneakersAsk from '../../components/Catalogue/SneakersAsk';

import { ArrowBottomBig } from '../../images/icons';

export default class Research extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCatalogue: true,
            isBlock: false,
            indexScreen: 0
        }
    }

    handleSwipeScreen = (index) => { 
        // TODO : Limiter le next swipe au nombre de sneakers dans SneakersBlocItem
        if (index === 'plus' && this.state.indexScreen < 5) {
            let newIndex = this.state.indexScreen + 1;
            this.setState({indexScreen: newIndex})
        } else if ( index === "moins" && this.state.indexScreen > 0 ) {
            let newIndex = this.state.indexScreen - 1;
            this.setState({indexScreen: newIndex})
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
                    <View style={ styles.swiper }>
                        <Swiper index={this.state.indexScreen} showsButtons={false} showsPagination={false}>
                        
                        <SneakersBlocItem navigation={ this.props.navigation }></SneakersBlocItem>
                        <SneakersBlocItem navigation={ this.props.navigation }></SneakersBlocItem>
                        <SneakersBlocItem navigation={ this.props.navigation }></SneakersBlocItem>
                        
                        </Swiper>
                        <TouchableOpacity onPress={ () => this.handleSwipeScreen('moins') } style={ styles.buttonPrev }>
                            <ArrowBottomBig></ArrowBottomBig>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.handleSwipeScreen('plus') }  style={ styles.buttonNext }>
                            <ArrowBottomBig></ArrowBottomBig>
                        </TouchableOpacity>
                    </View>
                     :
                    <ScrollView>
                        <SneakersListeItem navigation={ this.props.navigation }></SneakersListeItem>
                        <SneakersListeItem navigation={ this.props.navigation }></SneakersListeItem>
                        <SneakersListeItem navigation={ this.props.navigation }></SneakersListeItem>
                        <SneakersListeItem navigation={ this.props.navigation }></SneakersListeItem>
                    </ScrollView>
                }
            </View>
            
        } else {
            return <View style={ styles.wrapperSneakersAsk }>
                <SneakersAsk></SneakersAsk>
            </View>
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
        flex: 1,
    },
    wrapperSneakersAsk: {
        flex: 1,
    },
    swiper: {
        position: 'relative',
        flex: 1
    },
    buttonPrev: {
        position: 'absolute',
        left: '35%',
        bottom: 8,
        transform: [{rotate: '90deg'}],
        padding: 16,
    },
    buttonNext: {
        position: 'absolute',
        right: '35%',
        bottom: 8,
        transform: [{rotate: '-90deg'}],
        padding: 16,
    }
})