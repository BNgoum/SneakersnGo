import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import BlockSneaker from './BlockSneaker';

import { requestAllSneakers } from '../../store/reducers/sneakers/action';

class ListSneakers extends Component {

    componentWillMount() {
        this.getAllSneakers();
    }

    getAllSneakers = () => {
        const token = this.props.state.AuthenticationReducer.isAdmin;

        return new Promise( (resolve, reject) => {
            resolve( requestAllSneakers(token) );
        })
        .then((sneakers) => {
            const action = { type: "GET_ALL_SNEAKERS", value: sneakers }
            return this.props.dispatch(action);
        })
        .catch( (error) => console.log('Erreur lors de la récupération des Sneakers (BlockListSneakers.js) : ', error))
    }

    render() {
        return (
            <View style={styles.wrapperListBrands}>
                <FlatList 
                    data={this.props.state.SneakersReducer.sneakers}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({item}) => <BlockSneaker dataSneaker={item} /> }
                    numColumns = {3}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperListBrands: {
        backgroundColor: "#f2f2f2",
        paddingTop: 16,
        paddingRight: 8,
        paddingLeft: 8,
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 16
    },
    wrapperBrands: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

const mapStateToProps = (state) => { 
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListSneakers)