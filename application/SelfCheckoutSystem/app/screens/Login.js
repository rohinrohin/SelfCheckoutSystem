import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native'
import LoginForm from '../components/LoginForm'
import {Button} from 'react-native-elements'

const MK = require('react-native-material-kit')
const {MKButton, MKColor} = MK

const ColoredRaisedButton = MKButton
  .flatButton()
  .withText('LOGIN')
  .withTextStyle({color: 'white', fontWeight: 'bold'})
  .withBackgroundColor('#7B1FA2')
  .build()

import FitImage from 'react-native-fit-image'

export default class Login extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#7B1FA2" barStyle="light-content"/>
        <View style={styles.logoContainer}>
          <FitImage
            resizeMode="contain"
            source={require('../img/cart.png')}
            style={{
              width: 100,
              height: 100
            }}/>
          <Text style={styles.title}>
            Self Checkout System
          </Text>
        </View>
        <LoginForm navigation={this.props.navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C27B0'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
})
