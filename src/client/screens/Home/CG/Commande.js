import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Container from '../../../components/Style/Container';
import ContainerTitle from '../../../components/Style/Text/ContainerTitle';
import Title from '../../../components/Style/Text/Title';
import BorderTitle from '../../../components/Style/Text/BorderBottomTitle';
import Paragraph from '../../../components/Style/Text/Paragraph';

export default class Commande extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "3. La commande".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <Paragraph style={ styles.textStyle }>3.1 Compte client :{"\n"}Seul un Client ayant crée un compte client peut passer commande sur le Site. Les données fournies par le Client le sont sous son entière responsabilité. SNEAKERS AND GO ne poura être tenue responsable de l’inexactitude des informations communiquées par le Client. Lors de la création d’un compte client il est demandé à celui-ci de fournir un identifiant et mot de passe. Le client s’engage à protéger son identifiant et mot de passe et à alerter la Société par email (sneakersandgo@gmail.com) en cas de suspicion d’usurpation.Une fois le paiement confirmé, le Client reçoit, immédiatement et au plus tard avant la livraison, un email de confirmation de sa commande.Le Client accepte formellement l'usage du courrier électronique pour la confirmation par la Société du contenu de la commande.</Paragraph>

                <Paragraph style={ styles.textStyle }>3.2 Disponibilité :{"\n"}Les Articles proposés à la location le sont sous réserve de leur disponibilité affichée sur le calendrier. La Société ne pourra être tenue responsable en cas d’erreur dans le calendrier du Site résultant d’un problème technique ou d’une maintenance sans faute de la Société. Un Article ne peut faire l’objet d’une réservation en l’absence d’un paiement et d’une confirmation de commande reçue par le Client.</Paragraph>

                <Paragraph style={ styles.textStyle }>3.3 Paiement :{"\n"}Une commande n’est valide qu’à l’issue du paiement par le Client. Le paiement s’effectue par carte bancaire. Les cartes du réseau bancaire Carte Bleue, Visa, Mastercard et Amex sont acceptées. Les paiements sont effectués sur une plateforme externe par l’intermédiaire du prestataire de paiement Stripe ou Paypal et sécurisés par 3D Secure.
                </Paragraph>
                
                <Paragraph style={ styles.textStyle }>3.4 Caution :{"\n"}Lors du paiement d’une location sur le Site le Client autorise la plateforme à conserver une empreinte de sa carte bancaire. Si le Client retire sa commande en main propre un chèque de caution lui sera demandé dont le montant lui sera communiqué par mail avant le retrait. L'empreinte ou le chèque de caution pourront servir en cas de restitution d’un Article non conforme ou ayant subi des dégradations (cf 3.5.2).</Paragraph>
                
                <Paragraph style={ styles.textStyle }>3.5 Livraison et retour :{"\n"}Lors de la commande le Client spécifie le mode de livraison et retour choisi : Retrait et retour en main propre à Paris ou région parisienne sur prise de rdv (par mail).{"\n"}Livraison et retour à Paris (et certaines communes limitrophes sur demande et sur devis) par un Coursier, prestataire de service de SNEAKERS AND GO (tarif indiqué sur le Site pour Paris) dans un délai de 3h. Livraison et retour en France métropolitaine par Colissimo (tarif indiqué sur le Site) dans un délai de 48h.</Paragraph>
                
                <Paragraph style={ styles.textStyle }>3.5.1 Livraison :{"\n"}La livraison interviendra au jour convenu lors de la commande. Les livraisons sont réalisées du lundi au samedi. Il est rappelé que la Société fait appel à des prestataires extérieurs et que les délais sont indiqués à titre indicatif. La société ne pourra en aucun cas voir sa responsabilité engagée en cas de retard de livraison imputable au prestataire. Il appartient au Client de prévoir des délais suffisants par rapport à la date d’utilisation souhaitée de l’Article et de renseigner correctement et de façon exhaustive ses coordonnées de livraison.  En cas de retour du colis pour non réception à l’adresse indiquée les frais de réexpédition du colis seront à la charge du client. Le client ne pourra réclamer aucun dommage et intérêts liés à la non réception d’un colis. Une livraison est considérée comme effectuée dès mise à disposition du colis auprès du Client matérialisé par le système de contrôle utilisé par le prestataire. Il appartient au Client de vérifier la conformité de l’Article loué ou acheté dès sa livraison et d’adresser ses réserves dans un délai de 4h après retrait sur le point de livraison par mail (sneakersandgo@gmail.com). Dans le cas contraire l’Article sera réputé conforme.</Paragraph>
                
                <Paragraph style={ styles.textStyle }>3.5.2 Retour (en cas de location) :{"\n"}Les Articles loués sont mis à disposition ou livrés au Client dans des emballages de protection spécifiques (boîtes carton) qui doivent être retournés avec l’Article. En cas de non restitution de l'un de ces emballages la Société prélèvera un montant de 25 euros TTC.{"\n"}Le Client doit retourner ses Articles au dernier jour de la commande, comme indiqué dans l’ email de confirmation et l’email de retour.</Paragraph>
                
                <Paragraph style={ styles.textStyle }>A Paris et communes limitrophes la collecte se fera aux horaires et à l’adresse indiqués dans la confirmation de commande. En France métropolitaine le Client utilisera l’étiquette de transport prépayé présente dans le colis ou envoyée dans le mail de retour.</Paragraph>
                
                <Paragraph style={ styles.textStyle }>Dès réception de l’Article la Société, à l’aide de son prestataire extérieur en charge du nettoyage, dispose de 48h pour faire la vérification de l’état de l’Article et informer le Client en cas de non-conformité ou dégradations constatées. La non conformité est un Article rendu dans un état différent de celui loué. Les dégradations sont des déchirures, trous, brûlures de cigarette, taches indélébiles (liste non exhaustive).  Dans le cas de dommages réparables la Société procédera au prélèvement du montant de la réparation du dommage après en avoir informé le Client par mail.  Dans le cas de dommages irréparables la Société prélèvera au maximum l’intégralité du montant de la caution après en avoir informé le Client par mail.
                </Paragraph>
                
                <Paragraph style={ styles.textStyle }>En cas de non restitution de la paire de basket le jour du retour prévu un montant de 30 euros TTC sera prélevé par jour de retard. Au bout de 7 jours de retard l’intégralité de la caution sera prélevée.
                </Paragraph>
                
                <Paragraph style={ [styles.textStyle, styles.lastText] }>Le Client s’interdit expressément de prendre toute mesure de nature à empêcher le recouvrement des montants décrits ci-dessus.</Paragraph>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    containerTitle: {
        width: 170,
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