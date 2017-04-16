import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, StatusBar, ScrollView} from 'react-native'
import {Card, ListItem, Button} from 'react-native-elements'


export default class Checkout extends Component {
  render() {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.priceWrapper}>
            <Text style={styles.title}>
            Order Completed
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
