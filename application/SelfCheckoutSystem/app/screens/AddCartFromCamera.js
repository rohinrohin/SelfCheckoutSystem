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
  constructor (props) {
    super(props)
    this.state = {
      barCodeValue: false,
      isInfoLoaded: false
    }
  }
  barcodeHandler (e) {
    if (!this.state.barCodeValue) {
      this.setState({isInfoLoaded: true})
      this.setState({barCodeValue: e.data})
    }
  }
  productViewHandler () {
    if (this.state.barCodeValue) {
      return (
        <View>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              fontWeight: '300'
            }}>MRP: ₹20, DISCOUNT: ₹20</Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              fontWeight: '500'
            }}>PRICE: ₹20</Text>
          <Button
            textStyle={{
              fontSize: 15,
              fontFamily: 'Lato',
              fontWeight: '200'
            }}
            onPress={this.props.callback}
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
            title={this.state.barCodeValue
            ? 'SURF EXCEL(' + this.state.barCodeValue + ')'
            : null}
            titleStyle={{
              fontSize: 20,
              fontFamily: 'Lato',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
            image={this.state.barCodeValue
            ? require('../img/surf.jpg')
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
