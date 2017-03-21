import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView
} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Camera from 'react-native-camera'
import {Button} from 'react-native-elements'
import CartItemCard from '../components/CartItemCard'

export default class CartListContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      test: 1
    }
    this.updateState = this.updateState.bind(this)
  }
  updateState (test) {
    this.setState({
      test: test
    })
  }
  render () {
    console.log(this.state.test)
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1976D2" barStyle="light-content"/>
        <ScrollView style={{
          flex: 1
        }}>
          <CartItemCard itemName='Surf Excel' callback={this.props.callback}/>
          <CartItemCard itemName='Surf Excel'/>
          <CartItemCard itemName='Surf Excel'/>
          <CartItemCard itemName='Surf Excel'/>
          <CartItemCard itemName='Surf Excel'/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})
