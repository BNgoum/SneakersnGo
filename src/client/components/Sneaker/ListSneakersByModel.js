import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Sneaker from './Sneaker';
import { requestAllSneakerByModel } from '../../store/reducers/sneakers/action';

class ListSneakersByModel extends Component {

    componentWillMount() {
        this.getAllSneakers();
    }

    getAllSneakers = () => {
        const token = this.props.state.AuthenticationReducer.isAdmin;
        const model = this.props.state.SneakersReducer.currentModel;

        return new Promise( (resolve, reject) => {
            resolve( requestAllSneakerByModel(token, model) );
        })
        .then((sneakers) => {
            const action = { type: "GET_ALL_SNEAKERS_BY_MODEL", value: sneakers }
            return this.props.dispatch(action);
        })
        .catch( (error) => console.log('Erreur lors de la récupération des Sneakers (BlockListSneakers.js) : ', error))
    }

    render() {
        return (
            <View style={styles.wrapperListSneakers}>
                <FlatList 
                    data={this.props.state.SneakersReducer.sneakersByModel}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListSneakersByModel)