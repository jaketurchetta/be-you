import React from 'react'
import { StyleSheet, View, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { ApplicationProvider, IconRegistry, Layout, Text, Avatar, withStyles, List } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { AppLoading, Facebook } from 'expo'
import * as Font from 'expo-font'
import Signup from './Signup.jsx'
import EmailLogin from './EmailLogin.jsx'
import Icon from 'react-native-vector-icons/Fontisto'
// import FBLogInButton from './Facebook.jsx'

const customFonts = { 'Billabong': require('../../../assets/fonts/Billabong.ttf') }
const backgroundImage = require('../../../assets/RainbowHeart.jpg')

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      emailLogin: false,
      signup: false
    }
    this.handleSignup = this.handleSignup.bind(this)
    this.handleEmailLogin = this.handleEmailLogin.bind(this)
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts)
    this.setState({ fontsLoaded: true })
  }

  async Facebooklogin() {
    const { type, token } = await
    Facebook.logInWithReadPermissionsAsync(
      "342823069910303", {
      permission: "public_profile"
    }
    )
    if (type == "success") {
      const credential =
        firebase
          .auth
          .FacebookAuthProvider
          .credential(token)
    }

    firebase.auth().signInWithCredential(credential).catch(error => {
         console.log(error)
     })


  componentDidMount() {
    this._loadFontsAsync()
  }

  handleSignup() {
    this.setState({ signup: true })
  }

  handleEmailLogin() {
    this.setState({ emailLogin: true })
  }

  render() {
    if (this.state.fontsLoaded && !this.state.signup && !this.state.emailLogin) {
      return (
        <React.Fragment>
          <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.image}>
              <View style={styles.container}>
                <Text style={styles.logo}>Be You</Text>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.facebook} onPress={() => this.props.handleSocialLogin('facebook')}>
                    <View style={styles.socialLogos} >
                      <Icon name='facebook' color={'#fff'} size={30} />
                    </View>
                    <View style={styles.centerText}>
                      <Text style={styles.loginText}>Log in with Facebook</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.google} onPress={() => this.props.handleSocialLogin('google')}>
                    <View style={styles.socialLogos} >
                      <Icon name='google' color={'#fff'} size={30} />
                    </View>
                    <View style={styles.centerText}>
                      <Text style={styles.loginText}>Log in with Google</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.apple} onPress={() => this.props.handleSocialLogin('apple')}>
                    <View style={styles.socialLogos} >
                      <Icon name='apple' color={'#fff'} size={30} />
                    </View>
                    <View style={styles.centerText}>
                      <Text style={styles.loginText}>Log in with Apple</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.loginBtn} onPress={() => this.handleEmailLogin()}>
                    <View style={styles.socialLogos} >
                      <Icon name='email' color={'#fff'} size={30} />
                    </View>
                    <View style={styles.centerText}>
                      <Text style={styles.loginText}>Log in with Email</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.signupBtn} onPress={() => this.handleSignup()}>
                      <Text style={styles.loginText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </React.Fragment >
      )
    } else if (this.state.signup) {
      return <Signup />
    } else if (this.state.emailLogin) {
      return <EmailLogin />
    } else {
      return <AppLoading />
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  logo: {
    fontFamily: 'Billabong',
    fontSize: 60,
    color: '#fff',
    padding: 60,
    marginTop: 80,
    marginBottom: 20,
    justifyContent: 'flex-start'
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  },
  facebook: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4267B2',
    borderRadius: 25,
    height: 50,
    marginTop: 10,
    marginBottom: 5,
  },
  google: {
    width: '80%',
    backgroundColor: '#de5246',
    borderRadius: 25,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,

  },
  apple: {
    width: '80%',
    backgroundColor: '#000000',
    borderRadius: 25,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginBtn: {
    width: '80%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 25,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  signupBtn: {
    width: '80%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 25,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 25,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 40
  },
  socialLogos: {
    alignItems: 'flex-start',
    paddingLeft: 20
  }
})