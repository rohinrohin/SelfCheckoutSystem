import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import CartListContainer from '../components/CartListContainer'

export default class Cart extends Component {
  callme () {
    console.log('Hello')
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1976D2" barStyle="light-content"/>
        <CartListContainer callback={this.callme}/>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor='#9b59b6'
            title="Add Item"
            onPress={() => this.props.navigation.navigate('AddCartFromCamera')}>
            <Icon name="md-create" style={styles.actionButtonIcon}/>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Checkout" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon}/>
          </ActionButton.Item>
        </ActionButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  }
})
