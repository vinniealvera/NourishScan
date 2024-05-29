import { KeyboardAvoidingView, Pressable, TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react'
import NourishScanLogo_Color from "../assets/NourishScanLogo_Color.png";
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const ForgotScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("HomeScreen")
      }
    })

    return unsubscribe
  }, [])

  // const handleSignUp = () => {
  //   auth
  //   .createUserWithUsernameAndPassword(username, password)
  //   .then(userCredentials => {
  //     const user = userCredentials.user;
  //     console.log(user.username);
  //   })
  //   .catch(error => alert(error.message))
  // }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >

    <View>
      <Image source={NourishScanLogo_Color} style={styles.Image}></Image>
    </View>
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 45}}>Forgot your password?</Text>
      <Text style={{fontSize: 17, marginRight: 50, marginBottom: 20, marginLeft: 45}}>We’ll send a confirmation e-mail to help
recover your account.</Text>
    </View>

  <View style={[styles.card, styles.shadowProp]}>
    <Text style={{fontSize: 24, fontWeight: 'bold', color: '#5A8634', marginLeft: 10}}>E-mail Address</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your e-mail address"
          placeholderTextColor={'white'}
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
      </View>
  </View>
  
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17, marginTop: 10}}>Back to </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", marginTop: 10, color: "#91C788" }}
            >
              Log-In Page
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default ForgotScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#5A8634',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
    color: 'white',
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    
  },
  button: {
    backgroundColor: '#DAAF53',
    width: '100%',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 25,
    width: '80%',
    marginVertical: 10,
    justifyContent: 'center',
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  Image:{
    width: 70,
    height: 70,
    aspectRatio: 0.87,
    marginVertical: 10,
    alignSelf: "center",
  },
})