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
      test: 1, 
      orderDetails: this.props.orderDetails
    }
    this.updateState = this.updateState.bind(this)
    this.CardItemListHandler = this.CardItemListHandler.bind(this)
  }
  updateState (test) {
    this.setState({
      test: test
    })
  }
  componentDidMount() {
    this.CardItemListHandler()
  }
  CardItemListHandler() {
    console.log("CartItemListHandler Called. " + this.props.orderDetails)
    if (this.props.orderDetails) {
      console.log("rendering cartlistitem handler")
      console.log(this.props)
      var obj = this.props.orderDetails.map((order, i) => {
        return (
        <CartItemCard cartFetchHander={this.props.cartFetchHander} key={i} orderDetails={order}/>
        )
      })
      return obj
    }
  }
  render () {
    console.log(this.state.test)
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1976D2" barStyle="light-content"/>
        <ScrollView style={{
          flex: 1
        }}>
          {/*<CartItemCard itemName='Surf Excel' callback={this.props.callback}/>*/}
          {this.CardItemListHandler()}
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
