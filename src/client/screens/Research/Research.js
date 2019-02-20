import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { requestAllSneakers } from '../../store/reducers/sneakers/action';

import Swiper from 'react-native-swiper';

import Tab from '../../components/Tab/TabResearch';
import Filters from '../../components/Catalogue/Filters';
import SneakersListeItem from '../../components/Catalogue/SneakersListeItem';
import SneakersBlocItem from '../../components/Catalogue/SneakersBlocItem';
import SneakersDetails from '../../components/Catalogue/SneakersDetails';
import SneakersAsk from '../../components/Catalogue/SneakersAsk';

import { ArrowBottomBig } from '../../images/icons';

class Research extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCatalogue: true,
            isBlock: false,
            indexScreen: 0
        }
    }

    componentWillMount() {
        this.getAllSneakers();
    }

    getAllSneakers = () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzAzZjMwMmJiNTQ4MTAwMjNjNDZkZTIiLCJlbWFpbCI6ImF6ZSIsInBhc3N3b3JkIjoiJDJhJDEwJGRYVVJLQmpuNkFRMGpTMDBRdENCVE84cGd3TUhKYWNpVHJ1SExYRDVteE43VTJPNTYyMXBDIiwiZXhwaXJlSW4iOiIxMHMiLCJleHAiOjE1NTU3OTEyNzg0LCJpYXQiOjE1NTA2OTM2Nzh9.Xb-4eSSK4uJ_aVYjE6XAIhD7iLmOG3jRhCdTQLk6DGM';

        return new Promise( (resolve, reject) => {
            resolve( requestAllSneakers(token) );
        })
        .then((sneakers) => {
            const action = { type: "GET_ALL_SNEAKERS", value: sneakers }
            return this.props.dispatch(action);
        })
        .catch( (error) => console.log('Erreur lors de la récupération des Sneakers (ListSneakers.js) : ', error))
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
                <Filters navigation={ this.props.navigation } displaySneakers={ this.handleDisplaySneakers }></Filters>
                {
                    this.state.isBlock ?
                    <View style={ styles.swiper }>
                        <Swiper index={this.state.indexScreen} showsButtons={false} showsPagination={false}>
                        
                        {/* <SneakersBlocItem navigation={ this.props.navigation }></SneakersBlocItem>
                        <SneakersBlocItem navigation={ this.props.navigation }></SneakersBlocItem>
                        <SneakersBlocItem navigation={ this.props.navigation }></SneakersBlocItem> */}
                        
                                {
                                    this.props.state.SneakersReducer.sneakers.map((item, index) => (
                                        <SneakersBlocItem key = {item._id} navigation={ this.props.navigation } dataSneaker={item} /> 
                                    ))
                                }
                          
                        
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
                        <FlatList 
                            data={this.props.state.SneakersReducer.sneakers}
                            keyExtractor={(item) => item._id.toString()}
                            renderItem={({item}) => <SneakersListeItem navigation={ this.props.navigation } dataSneaker={item} /> }
                        />
                    </ScrollView>
                }
            </View>
            
        } else {
            return <View style={ styles.wrapperSneakersAsk }>
                <SneakersAsk navigation={ this.props.navigation }></SneakersAsk>
            </View>
        }
    }

    render() {
        console.log('Props redux : ', this.props.state.SneakersReducer.sneakers)
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

const mapStateToProps = (state) => { 
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Research)