import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, StatusBar, ScrollView} from 'react-native'
import {Card, ListItem, Button} from 'react-native-elements'

const firstRun = 1
const fetchingNow = 0
const gotValue = 0

export default class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderDetails: null, 
      orderFetched: false,
      orderDetailsToFetch: true, 
      callFromRefresh: false
    }
    
    this.orderFetchHandler = this.orderFetchHandler.bind(this)
    // setTimeout(this.orderFetchHandler(), 200);
  }
  componentWillMount() {
    if (firstRun || this.state.callFromRefresh) {
      firstRun = 0
      // this.setState({
      //   callFromRefresh: false   
      // })
      this.orderFetchHandler()
      console.log(firstRun)
      // console.log(this.state.callFromRefresh)
    }
    
  }
  orderFetchHandler() {
      if(!fetchingNow && !this.state.orderFetched){
        this.state.orderFetched = false
        fetchingNow = 1
      var orderID = this.props.navigation.state.params.userID
              var queryStr = "SELECT * FROM ORDERS WHERE ORDER_STATUS = 'PAYED' AND U_ID = '" +orderID+ "';"
      console.log(queryStr)
        gotValue = 1
      fetch('http://rohin.me:3000/interface', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: queryStr})
    }).then((response) => response.json()).then((responseJson) => {
      if (responseJson.rowCount === 0) {
        alert('No transaction history ')
        return
      }
      gotValue = 0
      fetchingNow = 0
      this.setState({
        orderDetails: responseJson.rows,
        orderFetched: true
      })
    }).catch((error) => {
      console.error(error)
    })
      }
  }
  orderViewHandler() {
    console.log("inside orderview")
    if (this.state.orderDetails) {
      return(
        this.state.orderDetails.map((value, i) => {
          return (
              <Card
              key={i}
              containerStyle={{
                marginLeft: 25,
                marginRight: 25
              }}
              title={"ORDER #" + value.order_id}
              titleStyle={{
                fontSize: 20,
                fontFamily: 'Lato',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
              <Text> 
                Status - Paid
                </Text>
              <Text>
                PaymentMode - Card
              </Text>
              <Text>
                Total - {value.total_amount}
              </Text>
            </Card>
          )
        })
      )
    }
  }
  render() {
    return(
      <ScrollView>
        <View style={{flex: 6}}>
            {this.orderViewHandler()}
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
