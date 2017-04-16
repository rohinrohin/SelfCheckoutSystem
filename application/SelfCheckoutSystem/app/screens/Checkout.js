import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, StatusBar, ScrollView} from 'react-native'
import {Button} from 'react-native-elements'


export default class Checkout extends Component {

  constructor(props){
    super(props)
    this.itemBuilder = this.itemBuilder.bind(this)
    console.log(this.props.navigation.state.params)
  }
  itemBuilder() {
    this.props.navigation.state.params.orderDetails.map((order, i) => {
      return (
          <Text>Hello</Text>
      )
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView styles={{flex: 1}}>
        <View>
            <Text style={styles.title}>
                Checkout - Order #32
            </Text>
        </View>
          <ScrollView style={styles.productInfo}>
            {this.itemBuilder()}
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>

            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            <Text> {this.props.navigation.state.params.orderDetails[0].p_name} </Text>
            
          </ScrollView>
            <View style={styles.paymentWrapper}>
              <Text style={styles.title}>
                Payment Options
              </Text>   
          </View>
          </ScrollView>
        </View>
    )
  }
}



const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2196F3'
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
})
