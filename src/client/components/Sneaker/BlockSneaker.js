
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { requestOneModel } from '../../store/reducers/sneakers/action';

class Sneaker extends Component {
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
        .catch((error) => console.log('Erreur lors de la récupération d\'une Sneaker (BlockSneaker.js) :', error ))
    }

    render() {
        return (
            <View style={styles.wrapperSneaker}>
                <View style={styles.wrapperSneakerName}>
                    <Text style={styles.title}>{this.state.modele}</Text>
                    <Text style={styles.subTitle}>{this.props.dataSneaker.color}</Text>
                    <Text style={styles.subTitle}>{this.props.dataSneaker.size}</Text>
                    <Text style={styles.subTitle}>{this.props.dataSneaker.rentPrice}</Text>
                </View>
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
})

const mapStateToProps = (state) => { 
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sneaker)