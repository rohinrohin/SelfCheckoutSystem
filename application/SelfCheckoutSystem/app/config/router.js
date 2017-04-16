import React from 'react'
import {TabNavigator, StackNavigator} from 'react-navigation'

import Login from '../screens/Login'
import Cart from '../screens/Cart'
import AddCartFromCamera from '../screens/AddCartFromCamera'
import LoginForm from '../components/LoginForm'
import Checkout from '../screens/Checkout'

export const CartHandler = StackNavigator({
  Cart: {
    screen: Cart
  },
  AddCartFromCamera: {
    screen: AddCartFromCamera
  },
  Checkout: {
    screen: Checkout
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
  },
  Login: {
    screen: LoginForm,
    navigationOptions: {
      tabBar: {
        label: 'Add'
      }
    }
  },
  Cart3: {
    // Temporary Testing
    screen: Cart,
    navigationOptions: {
      tabBar: {
        label: 'Settings'
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
