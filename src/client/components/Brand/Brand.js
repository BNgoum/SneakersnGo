import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Brand extends Component {

    handlePressBrand = () => {
        return new Promise ( (resolve, reject) => {
            const action = {
                type: "SET_CURRENT_BRAND", value: this.props.dataBrand._id
            }

             resolve(this.props.dispatch(action));
        })
        .then(() => this.props.navigation.navigate('AddModels'))
        .catch((error) => reject('Erreur lors du passage vers l\'écran "Ajout modèle" : ', error))
    }

    render() {
        return (
            <View style={styles.wrapperBrand}>
                <TouchableOpacity onPress={this.handlePressBrand}>
                    <Text style={styles.title}>{this.props.dataBrand.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperBrand: {
        backgroundColor: '#fff',
        borderRadius: 8,
        alignSelf: 'flex-start',
        padding: 16,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 16
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
    }
})

const mapStateToProps = (state) => { 
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brand)