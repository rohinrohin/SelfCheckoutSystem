import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native'
import {Card, ListItem, Button} from 'react-native-elements'

const CartItemCard = React.createClass({
  render () {
    return (
      <Card
        title={this.props.itemName}
        titleStyle={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold'
        }}
        image={require('../img/surf.jpg')}>
        <View style={styles.footer}>
          <View style={styles.textWrapper}>
            <Button
              style={styles.quantity}
              textStyle={{
                fontSize: 18,
                fontFamily: 'Lato',
                fontWeight: '200'
              }}
              onPress={this.props.callback}
              raised
              backgroundColor='transparent'
              color='black'
              icon={{name: 'cached', color: 'black'}}
              title='QTY: 3' />
            <Text style={styles.price}>ITEM: ₹20</Text>
            <Text style={styles.total}>PRICE: ₹60</Text>
          </View>
        </View>
      </Card>
    )
  }
})

const styles = StyleSheet.create({
  footer: {
    flex: 1
  },
  quantity: {
    alignSelf: 'flex-start',
    flex: 1,
    fontFamily: 'Lato',
    fontWeight: '200',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonWrapper: {
    flex: 4,
    flexDirection: 'row'
  },
  price: {
    flex: 1,
    fontFamily: 'Lato',
    fontWeight: '200',
    fontSize: 18,
    alignSelf: 'center',
    borderRadius: 2,
    textAlign: 'center'
  },
  total: {
    flex: 1,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    borderRadius: 2,
    textAlign: 'center'
  },
  button: {
    borderRadius: 10,
    padding: 10,
    margin: 10
  }
})

module.exports = CartItemCard
