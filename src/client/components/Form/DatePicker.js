import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

import DatePicker from 'react-native-datepicker';
import { ArrowBottom } from '../../images/icons';

export default class DatePickerCustom extends Component {
  constructor(props){
    super(props)
    this.state = { date: "" }
  }

  render(){
    return (
      <View style={ styles.container }>
        <DatePicker
          customStyles={{dateInput:{ borderWidth: 0, borderBottomWidth: 1, borderBottomColor: '#c4c4c4'}}}
          style={{ width: '100%', height: 30, zIndex: 100, alignSelf: 'flex-start'}}
          date={this.state.date}
          placeholder=" "
          mode="date"
          format="DD-MM-YYYY"
          confirmBtnText="Valider"
          cancelBtnText="Retour"
          onDateChange={(date) => {this.setState({date: date})}}
          showIcon={false}
          hideText={true}
        />
        <Text style={ [styles.placeholder, this.state.date && styles.isFocus] }>{ this.props.placeholder.toUpperCase() }</Text>
        {
          this.state.date.length > 0 && <Text style={ styles.libelle }>{ this.state.date }</Text>
        }
        <ArrowBottom style={ styles.iconArrow }></ArrowBottom>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: '100%',
    marginBottom: 32,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4'
  },
  placeholder: {
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: [{ translateY: -5 }],
      textTransform: 'uppercase',
      color: '#9b9b9b',
      letterSpacing:1,
      fontSize: 14,
      fontFamily: 'roboto-regular',
      zIndex: -1,
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
  libelle: {
    fontSize: 15,
    color: '#070e37',
    letterSpacing: 1,
    fontFamily: 'roboto-regular',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: [{ translateY: -5 }],
  },
})