import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import ContainerTitle from '../../../components/Style/Text/ContainerTitle';
import Title from '../../../components/Style/Text/Title';
import BorderTitle from '../../../components/Style/Text/BorderBottomTitle';
import ButtonCTA from '../../../components/Style/Button/Button';
import ButtonText from '../../../components/Style/Button/ButtonText';
import { ArrowBottom } from '../../../images/icons';

export default class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: "",
            marque: "",
            style: "",
            coloris: "",
            prix: ""
        }
    }

    handleSelectedFilter = (type, value) => {
        switch (type) {
            case "genre":
                this.setState({genre: value})
                break;
            case "marque":
                this.setState({marque: value})
                break;
            case "style":
                this.setState({style: value})
                break;
            case "coloris":
                this.setState({coloris: value})
                break;
            case "prix":
                this.setState({prix: value})
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <ScrollView style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "Filtrer la recherche".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <Text style={ styles.texteResultats }>182 résultats</Text>

                <View style={ styles.viewFilter }>
                    <TouchableOpacity selectedFilter={ this.handleSelectedFilter } onPress={ () => this.props.navigation.navigate('Genre') } style={ styles.containerFilter }>
                        <Text style={ styles.titleFilter }>{ "Genre".toUpperCase() }</Text>
                        { this.state.genre !== "" && <Text style={ styles.selectedFilter }>{ this.state.genre.toUpperCase() }</Text> }
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewFilter }>
                    <TouchableOpacity style={ styles.containerFilter }>
                        <Text style={ styles.titleFilter }>{ "Marque".toUpperCase() }</Text>
                        { this.state.marque !== "" && <Text style={ styles.selectedFilter }>{ this.state.marque.toUpperCase() }</Text> }
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewFilter }>
                    <TouchableOpacity style={ styles.containerFilter }>
                        <Text style={ styles.titleFilter }>{ "Style".toUpperCase() }</Text>
                        { this.state.style !== "" && <Text style={ styles.selectedFilter }>{ this.state.style.toUpperCase() }</Text> }
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewFilter }>
                    <TouchableOpacity style={ styles.containerFilter }>
                        <Text style={ styles.titleFilter }>{ "Coloris".toUpperCase() }</Text>
                        { this.state.coloris !== "" && <Text style={ styles.selectedFilter }>{ this.state.coloris.toUpperCase() }</Text> }
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ [styles.viewFilter, styles.lastViewFilter] }>
                    <TouchableOpacity style={ styles.containerFilter }>
                        <Text style={ styles.titleFilter }>{ "Prix".toUpperCase() }</Text>
                        { this.state.prix !== "" && <Text style={ styles.selectedFilter }>{ this.state.prix.toUpperCase() }</Text> }
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>
                <ButtonCTA style={ styles.containerButton }><ButtonText>{ "Afficher les résultats".toUpperCase() }</ButtonText></ButtonCTA>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    containerTitle: {
        width: 115,
        marginBottom: 16
    },
    titleStyle: {
        fontSize: 21,
    },
    texteResultats: {
        fontSize: 11,
        letterSpacing: 1,
        fontFamily: 'roboto-regular',
        color: '#9b9b9b',
        marginBottom: 22
    },
    viewFilter: {
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4'
    },
    lastViewFilter: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    containerFilter: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        paddingRight: 18,
    },
    titleFilter: {
        fontSize: 15,
        color: '#070e37',
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
    },
    selectedFilter: {
        fontSize: 10,
        letterSpacing: 1,
        fontFamily: 'roboto-regular',
        color: '#9b9b9b',
    },
    iconArrow: {
        position: 'absolute',
        top: 24,
        right: 0,
        transform: [{ rotate: "-90deg" }]
    },
    containerButton: {
        alignSelf: 'center',
        marginTop: 24,
        marginBottom: 40
    }
})
