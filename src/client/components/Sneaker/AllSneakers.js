import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import { requestDeleteSneaker, requestAllSneakers, requestOneModel } from '../../store/reducers/sneakers/action';

class AllSneakers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modele: ""
        }
    }

    componentDidMount() {
        return new Promise((resolve, reject) => {
            const token = this.props.state.AuthenticationReducer.isAdmin;
            const idModel = this.props.dataSneaker.model;
            resolve(requestOneModel(token, idModel))
        })
        .then(model => {
            this.setState({ modele: model.name })
        })
        .catch((error) => console.log('Erreur lors de la récupération d\'une Sneaker (Sneaker.js) :', error ))
    }

    handleDeleteSneaker = () => {
        const token = this.props.state.AuthenticationReducer.isAdmin;
        const idSneaker = this.props.dataSneaker._id;
        
        return new Promise((resolve, reject) => { resolve(requestDeleteSneaker(token, idSneaker)) })
        .then(() => { return requestAllSneakers(token) })
        .then((sneakers) => {
            const action = { type: "GET_ALL_SNEAKERS", value: sneakers }
            return this.props.dispatch(action);
        })
        .catch((error) => console.log('Erreur lors de la promise suppression d\'une Sneaker : ', error))
    }

    render() {
        const pathToImage = '../../images/';

        return (
            <View style={styles.wrapperSneaker}>
                <View style={styles.wrapperSneakerName}>
                    <Text style={styles.title}>{this.state.modele}</Text>
                    <Text style={styles.subTitle}>{this.props.dataSneaker.color}</Text>
                    <Text style={styles.subTitle}>{this.props.dataSneaker.size}</Text>
                    <Text style={styles.subTitle}>{this.props.dataSneaker.rentPrice} €</Text>
                </View>
                <TouchableOpacity onPress={this.handleDeleteSneaker} style={styles.wrapperButtonDelete}>
                    <Image source={require(pathToImage + 'cancel.png')} style={styles.buttonDelete} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperSneaker: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 25,
        marginTop: 4,
        marginBottom: 12,
        marginLeft: 4,
        marginRight: 4
    },
    wrapperSneakerName: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 4,
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
    },
    subTitle: {
        fontSize: 14
    },
    wrapperButtonDelete: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 4,
        paddingRight: 12,
    },
    buttonDelete: {
        width: 12,
        height: 12
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

export default connect(mapStateToProps, mapDispatchToProps)(AllSneakers)