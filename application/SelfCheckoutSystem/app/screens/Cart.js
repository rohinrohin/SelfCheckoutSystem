import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import CartListContainer from '../components/CartListContainer'

export default class Cart extends Component {
  cartFetchHandler() {
    if (!this.state.isFetching) {
      console.log("called inside")
      var queryStr = "SELECT * FROM ORDERS WHERE U_ID='" + this.state.userID + "' AND ORDER_STATUS='cart';"
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
          alert('No orders found. ')
          return
        }

        console.log("ORDER ID: " + responseJson.rows[0].order_id)
        this.setState({
          orderID: responseJson.rows[0].order_id
        })

        // ORDER ID AVAILABLE ->
        var queryStr = "SELECT P.P_ID,P_NAME,P_URL,PRICE,P_QTY,ORDER_ID FROM PRODUCTS P,ORDER_DETAILS O WHERE P.P_ID = O.P_ID AND ORDER_ID = '" + this.state.orderID +"';"
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
            alert('Order fetch failed. ')
            // this.state.isFetching = false
            return
          }
          console.log("CART FETCHED: ", responseJson.rows)
          this.setState({
            orderDetails: responseJson.rows,
            isFetching: false
          })
          return
          // alert(responseJson.rows[0])
        }).catch((error) => {
          console.error(error)
        }))
        // FETCH ORDER DETAILS ENDS. 

        // alert(responseJson.rows[0])
      }).catch((error) => {
        console.error(error)
      }))
    }
  }

  componentDidMount() {
    console.log("component mounted. ")
    this.cartFetchHandler()
  }

  constructor(props) {
    super(props)
    this.state = {
      isFetching: false, 
      orderID: null,
      // orderDetails: [
      //   {"p_name": "hello"}, 
      //   {"p_name": "test"}
      // ],
      orderDetails: false,
      userID: 'mkelley0'
    }
    this.cartFetchHandler = this.cartFetchHandler.bind(this)
  }
  callme() {
    console.log('Hello')
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1976D2" barStyle="light-content"/>
        <CartListContainer cartFetchHandler={this.cartFetchHandler} orderDetails= {this.state.orderDetails} ref="cartListContainer"/>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor='#9b59b6'
            title="Add Item"
            onPress={() => this.props.navigation.navigate('AddCartFromCamera', {
            orderID: this.state.orderID,
            userID: this.state.userID,
            cartFetchHandler: this.cartFetchHandler
          })}>
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
