import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Tab from '../../components/Tab/TabDetailsCommande';

export default class DetailsCommande extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetails: true,
        }
    }

    handleDisplayTabContent = isDetails => {
        if ( isDetails ) { this.setState({ isDetails: true }) }
        else { this.setState({ isDetails: false }) }
    }

    displayContent = () => {
        if( this.state.isDetails ) {
            return <View>
                <View style={ styles.headerCommande }>
                    <Text style={ [styles.title, styles.styleTitle] }>{"Commande à venir".toUpperCase()}</Text>
                    <View style={ styles.wrapperDate }>
                        <Text style={ [styles.dateCommandeLibelle, styles.styleInfo] }>{"Date de la commande : ".toUpperCase()}</Text>
                        <Text style={ [styles.dateCommande, styles.styleText] }>{"5 Févr. 2019".toUpperCase()}</Text>
                    </View>
                </View>
            </View>
            
        } else {
            return <View style={ styles.wrapperSneakersAsk }>
                <Text>Messages</Text>
            </View>
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <Tab displayTabContent={ this.handleDisplayTabContent }/>
                {  this.displayContent() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerCommande: {
        marginHorizontal: 20,
        marginTop: 35,
        marginBottom: 26,
    },
    wrapperDate: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    styleTitle: {
        fontFamily: 'roboto-bold',
        letterSpacing: 1,
        color: '#070e37',
    },
    styleText: {
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
        color: '#070e37'
    },
    styleInfo: {
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
        color: '#9b9b9b'
    },
    title: {
        fontSize: 15,
    },
    dateCommandeLibelle: {
        fontSize: 11
    },
    dateCommande: {
        fontSize: 11
    }
})