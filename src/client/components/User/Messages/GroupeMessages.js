import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Message from './Message';

export default class GroupeMessages extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.textNormal }>{ this.props.heure }</Text>

                <Message isRecipient={true} pseudo="Noella" message="Hello, les sneakers que vous avez choisis sont en préparation !
                    J’ai vu que vous aviez demandé une remise en main propre au E-Studio, vous souhaitez un horaire en particulier ?"
                />
                
                <Message isRecipient={false} pseudo="Moi" message="Bonjour Noëlla ! Super merci beaucoup.
                    Pour la remise en propre, idéalement, j’aurai voulu 9h car la captation du clip vidéo commence à 10h."
                />

                <Message isRecipient={true} pseudo="Noella" message="Parfait !"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 26
    },
    textNormal: {
        fontSize: 11,
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
        color: '#9b9b9b',
        alignSelf: 'center',
        marginBottom: -20
    },
})