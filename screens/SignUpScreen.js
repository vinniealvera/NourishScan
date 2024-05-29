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
import { CheckBox, color } from "@rneui/base";
import React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@rneui/themed";
import NourishScanLogo_Color from "../assets/NourishScanLogo_Color.png";
import { Colors } from "react-native/Libraries/NewAppScreen";

// const LoginScreen = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
// }

//   const handleSignUp = () => {
//     auth
//     .createUserWithUsernameAndPassword(username, password)
//     .then(userCredentials => {
//       const user = userCredentials.user;
//       console.log(user.username);
//     })
//     .catch(error => alert(error.message))
//   }

const SignUpScreen = (props) => {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <Image source={NourishScanLogo_Color} style={styles.Image}></Image>
        <View>
          <Text style={{ fontSize: 25, marginLeft: 10, fontWeight: "bold" }}>
            Ready to eat healthier
          </Text>
          <Text style={{ fontSize: 25, marginLeft: 10, fontWeight: "bold" }}>
            with Nourish Scan?
          </Text>
          <Text style={{ fontSize: 17, marginLeft: 10 }}>
            Create your account now.
          </Text>
        </View>
      </View>

      <View style={[styles.card, styles.shadowProp]}>
        <Text style={{ fontSize: 24, color: "white", marginLeft: 10 }}>
          Username
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your account username"
            // value={username}
            // onChangeText={text => setUsername(text)}
            style={styles.input}
          />
        </View>
        <Text
          style={{
            fontSize: 24,
            color: "white",
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Email
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your account e-mail address"
            // value={email}
            // onChangeText={text => setEmail(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text
            style={{
              fontSize: 24,
              color: "white",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            Password
          </Text>
          <TextInput
            placeholder="Enter your account Password"
            // value={password}
            // onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text
            style={{
              fontSize: 24,
              color: "white",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            Re-enter Password
          </Text>
          <TextInput
            placeholder="Re-enter your account Password"
            // value={password}
            // onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginVertical: 4,
          marginRight: 30,
        }}
      >
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="green"
        />

        <View>
          <Text style={{ fontSize: 14, alignContent: "center", marginTop: 10 }}>
            I have agreed to Nourish Scan's
          </Text>
          <Pressable>
            {/* onPress={() => } */}
            <Text
              style={{
                fontSize: 14,
                alignContent: "center",
                fontWeight: "bold",
                alignContent: "center",
                marginLeft: 20,
                color: "#91C788",
              }}
            >
              Terms and Conditions
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          // onPress={handleLogin}
          onPress={() => props.navigation.navigate("Main")} // --> for navigation to home screen, adjust if needed
          style={styles.button}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17 }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", color: "#91C788" }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

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
    backgroundColor: "#D9D9D9",
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
    backgroundColor: "#8EB44F",
    borderRadius: 20,
    paddingVertical: 20,
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
    width: 60,
    height: 60,
    aspectRatio: 0.87,
    alignSelf: "center",
  },
});
