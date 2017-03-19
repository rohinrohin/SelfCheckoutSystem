import React, { Component } from 'react'
import {
  AppRegistry,
  TextInput,
  Text,
  View,
  StyleSheet
} from 'react-native'

const MK = require('react-native-material-kit')
const {
  MKButton
} = MK

const ColoredRaisedButton = MKButton.flatButton()
  .withText('LOGIN')
   .withTextStyle({
     color: 'white',
     fontWeight: 'bold'
   })
  .withBackgroundColor('#7B1FA2')
  .build()



export default class LoginForm extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="username or email"
          placeholderTextColor = "rgba(227,242,253 ,1)"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor = "rgba(227,242,253 ,1)"
          underlineColorAndroid="transparent"
          secureTextEntry
        />
        <ColoredRaisedButton
          onPress={() => {
            this.props.navigation.navigate('Tabs')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#FFF',
    backgroundColor: '#BA68C8'
  }
})
