import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

import Model from './Model';
import { requestAllModelsByBrand } from '../../store/reducers/sneakers/action';

class ListModels extends Component {

    componentDidMount() {
        this.getAllModels();
    }

    getAllModels = () => {
        const token = this.props.state.AuthenticationReducer.isAdmin;
        const currentBrand = this.props.state.SneakersReducer.currentBrand;

        return new Promise((resolve, reject) => {
            resolve( requestAllModelsByBrand(token, currentBrand) );
        })
        .then((models) => {
            const action = { type: "GET_ALL_MODELS", value: models }

            return this.props.dispatch(action);
        })
        .catch( (error) => console.log('Erreur lors de la récupération des modèles : ', error))
    }

    render() {
        return (
            <View style={styles.wrapperListBrands}>
                <Text style={styles.title}>Les modèles :</Text>
                <FlatList 
                    data={this.props.state.SneakersReducer.models}
                    keyExtractor={(item) => item._id.toString()}
                    numColumns = {3}
                    renderItem={({item}) => <Model dataModel={item} navigation={this.props.navigation} /> }
                    style={styles.wrapperModels}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperListBrands: {
        backgroundColor: "#dedede"
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 16
    },
    wrapperModels: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

const mapStateToProps = (state) => { 
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListModels)