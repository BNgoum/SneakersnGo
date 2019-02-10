import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button } from 'react-native';

import Modal from "react-native-modal";

import { ArrowBottom, Croix } from '../../images/icons';
import Circle from '../Style/Circle';

export default class InputSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            isFocus: false,
            isModalVisible: false,
        }
    }

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    handleOnPressItem = item => {
        this.setState({ selected: item, isModalVisible: false })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { this._toggleModal() }} style={ styles.inputSelect }>
                    <Text style={ [styles.placeholder, this.state.selected !== null && styles.isFocus] }>{ this.props.placeholder.toUpperCase() }</Text>
                    <Text style={ styles.libelle }>{ this.state.selected !== null && this.state.selected }</Text>
                    <ArrowBottom style={ styles.iconArrow }></ArrowBottom>
                </TouchableOpacity>

                <Modal isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this.setState({ isModalVisible: false })}
                    style={ styles.bottomModal}>
                    <View style={ styles.wrapperModal }>
                        <Text style={ styles.titleModal }>{ this.props.placeholder.toUpperCase() }</Text>
                        <View style={ styles.wrapperItems }>
                            <FlatList
                                data={ this.props.data }
                                keyExtractor={ (item) => item.toString() }
                                renderItem={ 
                                    ({item}) => 
                                    <TouchableOpacity 
                                        style={ styles.itemStyle } 
                                        onPress={ () => this.handleOnPressItem(item) }>
                                        <Text style={ styles.itemText }>{item}</Text>
                                        { this.state.selected === item && <Circle></Circle> }
                                    </TouchableOpacity> 
                                }
                            />
                        </View>
                        <TouchableOpacity onPress={this._toggleModal} style={ styles.wrapperClose }>
                            <Croix></Croix>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 32
    },
    inputSelect: {
        position: 'relative',
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        paddingRight: 8,
        paddingVertical: 6
    },
    placeholder: {
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: [{ translateY: -4 }],
        textTransform: 'uppercase',
        color: '#9b9b9b',
        letterSpacing:1,
        fontSize: 14,
        fontFamily: 'roboto-regular',
        zIndex: -1,
    },
    libelle: {
        fontSize: 15,
        color: '#070e37',
        letterSpacing: 1,
        fontFamily: 'roboto-regular',
    },
    isFocus: {
        fontSize: 10,
        top: -4
    },
    iconArrow: {
        position: 'absolute',
        right: 8,
        top: '50%',
        transform: [{ translateY: -2 }],
    },
    wrapperModal: {
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingRight: 50,
        paddingBottom: 42,
        paddingLeft: 50,
        justifyContent: 'center',
        borderRadius: 4,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
        flex: 1
      },
    titleModal: {
        fontSize: 18,
        color: "#9b9b9b",
        fontFamily: 'roboto-regular',
        marginBottom: 38
    },
    wrapperItems: {
        borderTopColor: '#9b9b9b',
        borderTopWidth: 1
    },
    wrapperClose: {
        position: 'absolute',
        top: 25,
        right: 50,
        padding: 8,
    },
    itemStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 18,
        borderBottomColor: '#9b9b9b',
        borderBottomWidth: 1
    },
    itemText: {
        fontSize: 16,
        color: '#070e37',
        letterSpacing: 1,
        fontFamily: 'roboto-regular',
    }
})