import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Model extends Component {
    render() {
        return (
            <View style={styles.wrapperModel}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddModels')}>
                    <Text style={styles.title}>{this.props.dataModel.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperModel: {
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

export default connect(mapStateToProps, mapDispatchToProps)(Model)