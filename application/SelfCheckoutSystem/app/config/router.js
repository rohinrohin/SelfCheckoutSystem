import React from 'react'
import {TabNavigator, StackNavigator} from 'react-navigation'

import Login from '../screens/Login'
import Cart from '../screens/Cart'
import AddCartFromCamera from '../screens/AddCartFromCamera'
import LoginForm from '../components/LoginForm'
import Checkout from '../screens/Checkout'
import TransactionHistory from '../screens/TransactionHistory'

export const CartHandler = StackNavigator({
  Cart: {
    screen: Cart
  },
  AddCartFromCamera: {
    screen: AddCartFromCamera
  },
  Checkout: {
    screen: Checkout
  }, 
  TransactionHistory: {
    screen: TransactionHistory
  }
}, {
  mode: 'modal',
  headerMode: 'none'
})

export const Tabs = TabNavigator({
  Cart: {
    screen: CartHandler,
    navigationOptions: {
      tabBar: {
        label: 'Cart'
      }
    }
  }
})

export const Root = StackNavigator({
  Login: {
    screen: Login
  },
  Tabs: {
    screen: Tabs
  }
}, {
  mode: 'modal',
  headerMode: 'none'
})
