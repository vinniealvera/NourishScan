import {
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
// import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from "react";
import NourishScanLogo_Color from "../assets/NourishScanLogo_Color.png";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("HomeScreen");
      }
    });

    return unsubscribe;
  }, []);

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
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <Image source={NourishScanLogo_Color} style={styles.Image}></Image>
      </View>
      <View>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginRight: 80 }}>
          Already have an
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginRight: 80 }}>
          account?
        </Text>
        <Text style={{ fontSize: 17, marginRight: 50, marginBottom: 20 }}>
          It's great to have you back again.
        </Text>
      </View>

      <View style={[styles.card, styles.shadowProp]}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#5A8634",
            marginLeft: 10,
          }}
        >
          Email
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={"white"}
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#5A8634",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            Password
          </Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor={"white"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 14,
                alignContent: "center",
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              Forgot your password?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ForgotPassword")}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  alignContent: "center",
                  marginTop: 10,
                  color: "#91C788",
                }}
              >
                Click Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          // onPress={handleLogin}
          onPress={() => props.navigation.navigate("Main")} // --> for navigation to home screen, adjust if needed
          style={styles.button}
        >
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: "#91C788",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "#5A8634",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
    color: "white",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#DAAF53",
    width: "100%",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 25,
    width: "80%",
    marginVertical: 10,
    justifyContent: "center",
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  Image: {
    width: 70,
    height: 70,
    aspectRatio: 0.87,
    marginVertical: 10,
    alignSelf: "center",
  },
});
