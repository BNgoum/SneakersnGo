import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Container from '../../../components/Style/Container';
import ContainerTitle from '../../../components/Style/Text/ContainerTitle';
import Title from '../../../components/Style/Text/Title';
import BorderTitle from '../../../components/Style/Text/BorderBottomTitle';
import Paragraph from '../../../components/Style/Text/Paragraph';

export default class Usage extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "4. Usage".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <Paragraph style={ styles.textStyle }>Le Client s’engage à utiliser et conserver l’Article avec soin et à prendre toutes les précautions nécessaires, afin d’éviter de l’endommager, comme : Conserver l’Article dans un endroit sec et propre , à l’abri de l’humidité, du soleil et de la poussière. Ne pas effectuer de nettoyage par lui-même ou un tiers de l’Article, ni simplement frotter toute tâche survenue pendant l’usage de l’Article Ne pas effectuer de réparation, retouche ou point de couture sur l’Article
                </Paragraph>
                
                <Paragraph style={ styles.textStyle }>Toute tentative de nettoyage ou réparation par le Client entraînera un non respect des CGV et le prélèvement du montant du dommage (cf article 3.5.2).{"\n"}Le Client reconnaît qu’à compter du jour de location jusqu’au jour du retour effectif des Articles, il a la garde matérielle des Articles au sens des dispositions du Code Civil.{"\n"}Le Client s’interdit d’effectuer tout usage commercial des Services, et notamment de monnayer, vendre, concéder, échanger et plus généralement, négocier tout ou partie de l’accès aux Services, ainsi que des Articles concernés.{"\n"}La sous-location des Articles, leur mise à disposition à titre gratuit ou payant par le Client au bénéfice d’un tiers ou encore, leur échange contre un autre Article (troc) est strictement contraire aux présentes CGV et peut faire l’objet d’une demande de réparation du préjudice subi par SNEAKERS AND GO.{"\n"}Le Client reconnaît par ailleurs que les Articles sont la propriété exclusive de SNEAKERS AND GO.</Paragraph>
                
                <Paragraph style={ styles.textStyle }>PERTE, VOL ou DEGRADATION</Paragraph>
                
                <Paragraph style={ styles.textStyle }>En cas de perte ou de vol, le client se vera facturer jusque 100 % du prix de vente public ou prix resell (sur les sites de revente de sneakers sur le marché). </Paragraph>
                
                <Paragraph style={ styles.textStyle }>En cas de constatation d’une tentative de réparation par le client laissant des traces visibbles sur la paire de basket et constituant une dégradation de l’article, SNEAKERS AND GO se réserve le droit de facturer au client 50 % du prix public ou prix retail toutes taxes comprises de l’article concernée. </Paragraph>
                
                <Paragraph style={ [styles.textStyle, styles.lastText] }>En cas de dégradtion d’un ou plusieurs articles au dela d’un usage classique (trou dans le tissu, brûlure de cigarette, tâches multiples de boissons, nourriture, humidite, boue,poussière,accroc, déchirure) liste non exhaustive. SNEAKERS AND GO facturera au clien un supplément de remise en etat de l’article correspondant au frais de nettoyage ou retouche plus 30 euros TTC de frais de traitement. </Paragraph>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    containerTitle: {
        width: 90,
        marginBottom: 36
    },
    titleStyle: {
        fontSize: 21,
        lineHeight: 25
    },
    textStyle: {
        marginBottom: 20
    },
    lastText: {
        marginBottom: 50
    }
})

