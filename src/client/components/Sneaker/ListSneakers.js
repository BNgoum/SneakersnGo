import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Sneaker from './AllSneakers';
import { requestAllSneakers } from '../../store/reducers/sneakers/action';

class ListSneakers extends Component {

    componentDidMount() {
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
        .catch( (error) => console.log('Erreur lors de la récupération des Sneakers (ListSneakers.js) : ', error))
    }

    render() {
        return (
            <View style={styles.wrapperListSneakers}>
                <FlatList 
                    data={this.props.state.SneakersReducer.sneakers}
                    keyExtractor={(item) => item._id.toString()}
                    numColumns = {2}
                    renderItem={({item}) => <Sneaker dataSneaker={item} /> }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperListSneakers: {
        backgroundColor: "#f2f2f2",
        paddingTop: 16,
        paddingRight: 8,
        paddingLeft: 8,
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

export default connect(mapStateToProps, mapDispatchToProps)(ListSneakers)