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
  checkAuthInformation (e) {
    // this.props.navigation.params.par.updateState(5)
    // console.log(this.props.navigation.state.params.pad(5))
      var queryStr = "SELECT * FROM PRODUCTS WHERE P_ID='" + this.state.barCodeValue + "';"
      console.log(queryStr)
      console.log(fetch('http://rohin.me:3000/interface', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: queryStr})
    }).then((response) => response.json()).then((responseJson) => {
      if (responseJson.rowCount === 0) {
        alert('No matching products found.')
        return
      }
      this.setState({productInfo: responseJson.rows[0]})
      // alert(responseJson.rows[0])
    }).catch((error) => {
      console.error(error)
    }))
    }
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          ref="emailInput"
          style={styles.input}
          placeholder="username or email"
          placeholderTextColor = "rgba(227,242,253 ,1)"
          underlineColorAndroid="transparent"
        />
        <TextInput
          ref="passwordInput"
          style={styles.input}
          placeholder="password"
          placeholderTextColor = "rgba(227,242,253 ,1)"
          underlineColorAndroid="transparent"
          secureTextEntry
        />
        <ColoredRaisedButton
          onPress={() => {
            console.log(this.refs.emailInput._lastNativeText)
            console.log(this.refs.passwordInput._lastNativeText)

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
