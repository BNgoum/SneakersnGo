import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Brand extends Component {
    render() {
        return (
            <View style={styles.wrapperBrand}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddModels')}>
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