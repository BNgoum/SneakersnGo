import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';

import { Picker } from "native-base";
import { ArrowBottom } from '../../images/icons';

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Blanc"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
        <View style={ styles.wrapperPicker }>
            <Picker
              note
              mode="dropdown"
              style={ styles.picker }
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
              headerBackButtonText="Retour"
              iosHeader="Choisir la couleur"
              iosIcon={<ArrowBottom></ArrowBottom>}
              textStyle={{ color: "#070e37", textTransform: 'uppercase' }}
            >
              <Picker.Item label="Blanc" value="Blanc" style={{color: "#F00"}} />
              <Picker.Item label="Bleu" value="Bleu" />
              <Picker.Item label="Rouge" value="Rouge" />
              <Picker.Item label="Vert" value="Vert" />
            </Picker>
        </View>
            
    );
  }
}

const styles = StyleSheet.create({
    wrapperPicker: {
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1,
        marginBottom: 16
    },
    picker: {
        width: '100%',
    }
})