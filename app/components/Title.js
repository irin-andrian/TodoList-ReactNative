import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  headerBar: {
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: 'rgba(119,195,229,1)',
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    color: 'white',
    fontSize: 18,
  }
})

export default class Title extends Component {
  render() {
    return (
      <View style={styles.headerBar}>
        <Text style={styles.title}>Todo List</Text>
      </View>
    )
  }
}
