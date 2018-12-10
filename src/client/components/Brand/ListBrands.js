import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import Brand from './Brand';

import { requestAllBrands } from '../../store/reducers/sneakers/action';

class ListBrands extends Component {

    componentDidMount() {
        this.getAllBrands();
    }

    getAllBrands = () => {
        const token = this.props.state.AuthenticationReducer.isAdmin;

        return new Promise( (resolve, reject) => {
            resolve( requestAllBrands(token) );
        })
        .then((brands) => {
            const action = { type: "GET_ALL_BRANDS", value: brands }

            return this.props.dispatch(action);
        })
        .catch( (error) => console.log('Erreur lors de la récupération des marques : ', error))
    }

    render() {
        return (
            <View style={styles.wrapperListBrands}>
                <Text style={styles.title}>Les marques :</Text>
                <FlatList 
                    data={this.props.state.SneakersReducer.brands}
                    keyExtractor={(item) => item._id.toString()}
                    numColumns = {3}
                    renderItem={({item}) => <Brand dataBrand={item} navigation={this.props.navigation} /> }
                    style={styles.wrapperBrands}
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
    wrapperBrands: {
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

export default connect(mapStateToProps, mapDispatchToProps)(ListBrands)