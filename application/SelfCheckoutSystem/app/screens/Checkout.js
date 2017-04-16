import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, StatusBar, ScrollView} from 'react-native'
import {Button} from 'react-native-elements'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";



const MK = require('react-native-material-kit')
const {
  MKButton
} = MK

const ColoredRaisedButton = MKButton.flatButton()
  .withText('PAY')
   .withTextStyle({
     color: 'white',
     fontWeight: 'bold', 
     fontSize: 15 
   })
  .withBackgroundColor('#8BC34A')
  .build()



export default class Checkout extends Component {
  getCartTotal() {
    var orderID = this.props.navigation.state.params.orderID
    var queryStr = "SELECT SUM(PRICE*P_QTY) FROM ORDER_DETAILS,PRODUCTS WHERE ORDER_ID = '" + orderID + "' AND ORDER_DETAILS.P_ID = PRODUCTS.P_ID;"
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
        alert('Unable to get cart total')
        return
      }
      this.setState({
        total: responseJson.rows[0].sum
      })
      // this.setState({productInfo: responseJson.rows[0]})
      // alert(responseJson.rows[0])
    }).catch((error) => {
      console.error(error)
    }))
  }
  getCartTotalWithSavings() {
    var orderID = this.props.navigation.state.params.orderID
    var queryStr = "WITH TOT AS (select sum(price*p_qty*(1-discount/100)) from order_details,products where order_id = '" +orderID+ "' and order_details.p_id = products.p_id) UPDATE ORDERS SET TOTAL_AMOUNT = (SELECT SUM FROM TOT) WHERE ORDER_ID = '" +orderID+ "';SELECT * FROM ORDERS WHERE ORDER_ID='" + orderID + "';"
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
        alert('Unable to get cart total with savings. ')
        return
      }
      this.setState({
        totalWithSavings: responseJson.rows[0].total_amount
      })
      // this.setState({productInfo: responseJson.rows[0]})
      // alert(responseJson.rows[0])
    }).catch((error) => {
      console.error(error)
    }))

  }
  getCartTotals() {
    this.getCartTotalWithSavings()
    this.getCartTotal()
  }
  handlePay() {
    var orderID = this.props.navigation.state.params.orderID
    if (this.state.form.valid || true){
    // this.props.navigation.params.par.updateState(5)
    // console.log(this.props.navigation.state.params.pad(5))
      var queryStr = "UPDATE ORDERS SET ORDER_STATUS = 'PAYED' WHERE ORDER_ID = '" + orderID + "';"
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
        alert('RESPONSE COUNT IS ZERO?')
        return
      }
      alert('Great! Order placed. See you soon. ')
      this.props.navigation.goBack()
      this.props.navigation.state.params.cartFetchHandler()
      this.props.navigation.navigate('TransactionHistory', {
            userID: this.props.navigation.state.params.userID,
          })
      // alert(responseJson.rows[0])
    }).catch((error) => {
      console.error(error)
    }))
    } else {
      alert("Please enter correct card details.  ")
    }
  }
  _onChange(form) {
    this.setState({
      form: form
    })
  }
  constructor(props){
    super(props)
    this.state = {
      isCardAdd: false,
      form: false, 
      totalWithSavings: null, 
      total: null
    }
    this.itemBuilder = this.itemBuilder.bind(this)
    this._onChange = this._onChange.bind(this)
    this.handlePay = this.handlePay.bind(this)
    this.itemBuilder = this.itemBuilder.bind(this)
    this.cardBuildHandler = this.cardBuildHandler.bind(this)
    this.getCartTotals()
    console.log(this.props.navigation.state.params)
  }
  itemBuilder() {
    this.props.navigation.state.params.orderDetails.map((order, i) => {
      return (
          <Text>Hello</Text>
      )
    })
  }
  cardBuildHandler() {
    if (this.state.isCardAdd) {
      return(
        <View style={{flex: 1, marginBottom: 10}}>
        <CreditCardInput onChange={this._onChange} />
        </View>
      )
    } 
    else {
      return(
        <Button
          style={{marginBottom: 20}}
          textStyle={{
            fontSize: 20,
            color: '#000',
            fontFamily: 'Lato',
            fontWeight: '200'
          }}
          onPress={() => {
            this.setState({
              isCardAdd: true
            })
          }}
          raised
          backgroundColor='transparent'
          color='black'
          icon={{name: 'add', color: 'black'}}
          title='Add' />
          )
    }
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.priceWrapper}>
          <Text style={styles.title}>
          Checkout - Order#{this.props.navigation.state.params.orderID}
          </Text>
          <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.totalPrice}>Total: {'₹' + this.state.totalWithSavings}</Text>
              <Text style={styles.strikePrice}>{'₹' + this.state.total}</Text>
            </View>
            <Text style={styles.savingPrice}>
              Savings: {'₹' + (this.state.total - this.state.totalWithSavings)}
            </Text>
          </View>
        </View>
        <View style={styles.paymentWrapper}>
          <Text style={styles.titleInv}>
          Payment Options
          </Text>
          <View style={{flex: 1, justifyContent: 'space-between', paddingBottom: 10}}>
            {this.cardBuildHandler()}
            <ColoredRaisedButton
              onPress={this.handlePay}
            />
          </View>
          
        </View>
      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  priceWrapper: {
    padding: 20,
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#2196F3'
  },
  paymentWrapper: {
    padding: 9,
    flex: 3
  },
  totalPrice: {
    textAlign: 'center', 
    fontFamily: 'Lato',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }, 
  strikePrice: {
    paddingLeft: 5,
    textAlign: 'center', 
    fontFamily: 'Lato',
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textDecorationLine: 'line-through'
  }, 
  savingPrice: {
    textAlign: 'center', 
    fontFamily: 'Lato',
    fontSize: 23,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  container: { 
    flex: 1,
    backgroundColor: '#FFF'
  },
  productInfo: {
      height: 100,
      backgroundColor: 'cyan',
      borderWidth: 1,
      flex: 1,
      borderStyle: 'solid',
      borderRadius: 3, 
      borderColor: 'white', 
      margin: 10
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    padding: 20, 
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  titleInv: {
    textAlign: 'center',
    padding: 20, 
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  }
})
