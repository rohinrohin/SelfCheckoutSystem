import React ,{Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native'
import {Card, ListItem, Button} from 'react-native-elements'

export default class CartItemCard extends Component{
  commitQuantity() {
    if (this.state.currentQuantity != 0) {
      var queryStr = "UPDATE ORDER_DETAILS SET P_QTY=" +this.state.currentQuantity+ ",EXPENSE=" +this.state.currentQuantity*this.props.orderDetails.price+ " WHERE P_ID='" +this.props.orderDetails.p_id+ "' AND ORDER_ID='" +this.props.orderDetails.order_id+ "';"
    }
    else {
      var queryStr = "DELETE FROM ORDER_DETAILS WHERE P_ID='" +this.props.orderDetails.p_id+ "' AND ORDER_ID='" +this.props.orderDetails.order_id+ "';"
    }
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
        alert('Unable to update quantity')
        return
      }
        alert("Quantity Updated. ")
        this.state.isQuantityEdit = false
        console.log("Quantity Update: ")
        console.log(this.props)
        this.props.cartFetchHandler()
      // alert(responseJson.rows[0])
    }).catch((error) => {
      console.error(error)
    }))
  }
  removeQuantity() {
    curr = this.state.currentQuantity==0 ? 0: this.state.currentQuantity -1
    this.setState({
      currentQuantity: curr
    })
  }
  addQuantity() {
    this.setState({
      currentQuantity: this.state.currentQuantity + 1
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      isQuantityEdit: false,
      currentQuantity: this.props.orderDetails.p_qty
    }
    this.quantityViewHandler = this.quantityViewHandler.bind(this)
    this.toggleQuantity = this.toggleQuantity.bind(this)
    this.addQuantity = this.addQuantity.bind(this)
    this.removeQuantity = this.removeQuantity.bind(this)
    this.commitQuantity = this.commitQuantity.bind(this)
  }

  toggleQuantity() {
    this.setState({
      isQuantityEdit: true
    })
  }
  quantityViewHandler(e) {
    if (this.state.isQuantityEdit) {
      return(
      <View style={styles.quantityChangeWrapper}>
        
            <Button
              style={styles.quantity}
              textStyle={{
                fontSize: 18,
                fontFamily: 'Lato',
                fontWeight: '200'
              }}
              onPress={this.removeQuantity}
              raised
              backgroundColor='transparent'
              color='black'
              icon={{name: 'remove', color: 'black'}}
              title='' />
              <Text style={styles.quantNew}>{this.state.currentQuantity}</Text>
            <Button
              style={styles.quantity}
              textStyle={{
                fontSize: 18,
                fontFamily: 'Lato',
                fontWeight: '200'
              }}
              onPress={this.addQuantity}
              raised
              backgroundColor='transparent'
              color='black'
              icon={{name: 'add', color: 'black'}}
              title='' />

              

              <Button
                style={styles.quantity}
                textStyle={{
                  fontSize: 18,
                  fontFamily: 'Lato',
                  fontWeight: '200'
                }}
                onPress={this.commitQuantity}
                raised
                backgroundColor='transparent'
                color='black'
                icon={{name: 'check', color: 'black'}}
                title='Update' />

          </View>
    )
    }
  }

  render () {
    return (
      <Card
        title={this.props.orderDetails.p_name}
        titleStyle={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold'
        }}
        image={{uri: 'http://' + this.props.orderDetails.p_url}}>
        <View style={styles.footer}>
          <View style={styles.textWrapper}>
            <Button
              style={styles.quantity}
              textStyle={{
                fontSize: 18,
                fontFamily: 'Lato',
                fontWeight: '200'
              }}
              onPress={this.toggleQuantity}
              raised
              backgroundColor='transparent'
              color='black'
              icon={{name: 'cached', color: 'black'}}
              title={'QTY:' + this.props.orderDetails.p_qty} />
            <Text style={styles.price}>ITEM: ₹{this.props.orderDetails.price}</Text>
            <Text style={styles.total}>PRICE: ₹{this.props.orderDetails.p_qty * this.props.orderDetails.price}</Text>
          </View>
           {this.quantityViewHandler()}
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1
  },
  quantityChangeWrapper: {
    backgroundColor: 'aliceblue',
    paddingLeft: 8, 
    paddingRight: 8, 
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  quantity: {
    alignSelf: 'flex-start',
    flex: 1,
    fontFamily: 'Lato',
    fontWeight: '200',
    fontSize: 18,
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
  quantNew: {
    flex: 1,
    fontFamily: 'Lato',
    fontWeight: '200',
    fontSize: 18,
    marginRight: 9,
    alignSelf: 'center',
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


