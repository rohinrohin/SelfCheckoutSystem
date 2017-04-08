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
import {Card, ListItem, Button} from 'react-native-elements'

export default class AddCartFromCamera extends Component {
  addProductToCart(e) {
    console.log(this.props.navigation.state.params.userID)
    var orderID = this.props.navigation.state.params.orderID
    var userID = this.props.navigation.state.params.userID
    var queryStr = "INSERT INTO ORDER_DETAILS VALUES ('" + orderID +"','" + userID + "','" +this.state.barCodeValue+ "', 1, " + this.state.productInfo.price +");"
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
        alert('Unable to add product.')
        return
      }
      alert('Added succesfully.')
      this.props.navigation.state.params.cartFetchHandler()
      this.props.navigation.goBack()
      // this.setState({productInfo: responseJson.rows[0]})
      // alert(responseJson.rows[0])
    }).catch((error) => {
      console.error(error)
    }))

  }
  getProductDetails (e) {
    // this.props.navigation.params.par.updateState(5)
    // console.log(this.props.navigation.state.params.pad(5))
    var queryStr = "SELECT * FROM PRODUCTS WHERE P_ID='" + this.state.barCodeValue + "';"
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
        alert('No matching products found.')
        return
      }
      this.setState({productInfo: responseJson.rows[0]})
      // alert(responseJson.rows[0])
    }).catch((error) => {
      console.error(error)
    }))
  }

  testing () {
    console.log(this.state.barCodeValue)
  }

  constructor (props) {
    super(props)
    this.state = {
      barCodeValue: false,
      productInfo: false
    }
    this.getProductDetails = this
      .getProductDetails
      .bind(this)
    this.barcodeHandler = this
      .barcodeHandler
      .bind(this)
    this.addProductToCart = this
      .addProductToCart
      .bind(this)
  }
  barcodeHandler (e) {
    if (e.data !== this.state.barCodeValue || !this.state.barCodeValue) {
      var Sound = require('react-native-sound')
      var beep = new Sound('beep.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error)
          return
        }
        beep.play((success) => {
          if (success) {
            console.log('successfully finished playing')
          } else {
            console.log('playback failed due to audio decoding errors')
          }
        })
        console.log('duration in seconds: ' + beep.getDuration() + 'number of channels: ' + beep.getNumberOfChannels())
      })
      this.setState({barCodeValue: e.data})
      this.getProductDetails()
    }
  }
  productViewHandler () {
    if (this.state.productInfo) {
      return (
        <View>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              fontWeight: '300'
            }}>MRP: {this.state.productInfo.price}, DISCOUNT: ₹{this.state.productInfo.discount}</Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              fontWeight: '500'
            }}>PRICE: ₹{this.state.productInfo.price - this.state.productInfo.discount}</Text>
          <Button
            textStyle={{
              fontSize: 15,
              fontFamily: 'Lato',
              fontWeight: '200'
            }}
            onPress={this.addProductToCart}
            raised
            backgroundColor='transparent'
            color='black'
            icon={{
              name: 'add',
              color: 'black'
            }}
            title='Add to Cart'/>
        </View>
      )
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <Card
            containerStyle={{
              marginLeft: 25,
              marginRight: 25
            }}
            title={this.state.productInfo
            ? this.state.productInfo.p_name + '(' + this.state.barCodeValue + ')'
            : null}
            titleStyle={{
              fontSize: 20,
              fontFamily: 'Lato',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
            image={this.state.productInfo
            ? {uri: 'http://' + this.state.productInfo.p_url}
            : null}>
            {this.productViewHandler()}
          </Card>
        </View>
        <View style={styles.cameraContainer}>
          <View style={styles.camera}>
            <Camera
              ref={(cam) => {
                this.camera = cam
              }}
              captureQuality="medium"
              onBarCodeRead={(e) => this.barcodeHandler(e)}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}></Camera>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  productWrapper: {
    flex: 1
  },
  containerTitle: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 20
  },
  containerTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  camera: {
    borderRadius: 3,
    borderColor: 'red',
    flex: 1,
    margin: 20,
    padding: 10
  },
  container: {
    flex: 3,
    flexDirection: 'column'
  },
  cameraContainer: {
    flex: 3,
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
