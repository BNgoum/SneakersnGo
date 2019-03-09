import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

class BadgePanier extends Component {
    render() {
        return (
            this.props.state.AuthenticationReducer.isLogin && this.props.state.SneakersReducer.cart.length > 0 ?
            <View style={ styles.wrapperBadge }>
                <Text style={ styles.badge }>{this.props.state.SneakersReducer.cart.length}</Text>
            </View>
            : null
        )
    }
}

const styles = StyleSheet.create({
    wrapperBadge: {
        position: 'absolute',
        width: 13,
        height: 13,
        top: 5,
        right: -5,
        backgroundColor: '#d82000',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    badge: {
        color: "#fff",
        fontFamily: 'roboto-bold',
        fontSize: 10,
        textAlign: 'center'
    }
})

const mapStateToProps = (state) => { 
    return { state }
}

export default connect(mapStateToProps)(BadgePanier)