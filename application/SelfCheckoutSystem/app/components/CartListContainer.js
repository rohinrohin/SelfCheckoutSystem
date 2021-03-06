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
      const _this = this
      var obj = this.props.orderDetails.map((order, i) => {
        console.log("INSIDE MAP FUNCTION: ")
        console.log(this.props)
        return (
        <CartItemCard cartFetchHandler={this.props.cartFetchHandler} key={i} orderDetails={order}/>
        )
      })
      return obj
    } else {
      return(
        <View style={{flex: 1, height: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2196F3'}}>
          <Text style={styles.title}> Cart Empty
            </Text>
          </View>
      )
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
    title: {
    textAlign: 'center',
    padding: 20, 
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
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
