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
  constructor(props) {
    super(props)
    this.checkAuthInformation = this.checkAuthInformation.bind(this)
  }
  checkAuthInformation (e) {
    // this.props.navigation.params.par.updateState(5)
    // console.log(this.props.navigation.state.params.pad(5))
      var queryStr = "SELECT * FROM LOGIN WHERE U_ID='" + this.refs.emailInput._lastNativeText + "' AND PASSWORD='" +this.refs.passwordInput._lastNativeText+ "';"
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
        alert('Wrong username/password.')
        return
      }
      this.props.navigation.navigate('Tabs', {
            userID: this.refs.emailInput._lastNativeText,
          })
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
            {/*alert(this.refs.emailInput._lastNativeText)
            alert(this.refs.passwordInput._lastNativeText)*/}
            {/*this.setState({
              userID: this.refs.emailInput._lastNativeText, 
              password: this.refs.passwordInput._lastNativeText
            })*/}
            this.checkAuthInformation()
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
