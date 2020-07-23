import React from 'react'
import { StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native'
import { ApplicationProvider, IconRegistry, Layout, Text, Avatar, withStyles, List } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

const customFonts = {
  'Billabong': require('../../../assets/fonts/Billabong.ttf')
};

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fontsLoaded: false
    }
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts)
    this.setState({ fontsLoaded: true })
  }

  componentDidMount() {
    this._loadFontsAsync()
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <Text style={styles.logo}>Be You</Text>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder='Email'
              placeholderTextColor='#003f5c'
              onChangeText={text => this.setState({ email: text })} />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder='Password'
              placeholderTextColor='#003f5c'
              secureTextEntry={true}
              onChangeText={text => this.setState({ password: text })} />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.handleLogin()}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return <AppLoading />
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Billabong',
    fontSize: 50,
    color: '#000000',
    padding: 60,
    marginBottom: 20
  },
  inputView: {
    width: '80%',
    backgroundColor: '#F0F8FF',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20
  },
  inputText: {
    height: 50
  },
  forgot: {
    color: '#000000',
    fontSize: 11
  },
  loginBtn: {
    width:'80%',
    backgroundColor:'#fb5b5a',
    borderRadius:25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:40,
    marginBottom:10
  },
  loginText: {
    color:'#fff'
  },
  signupText: {
    color: '#000000'
  }
})