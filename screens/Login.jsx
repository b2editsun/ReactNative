import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import MyTabs from "./MyTabs";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validation = () => {
    let error = {};

    if (!email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email is invalid.";
    }
    if (!password) error.password = "Password is required";

    setError(error);
    return Object.keys(error).length == 0;
  };

  function onChangeEmail(text) {
    setEmail(text);
  }
  function onChangePassword(text) {
    setPassword(text);
  }
  const handleLogin = () => {
    console.log(email);
    console.log(password);
    validation();
    navigation.navigate("MyTabs");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.title}>Log in to start shopping.</Text>
      </View>

      <View style={styles.view23}>
        <View style={styles.view2}>
          <Image
            source={require("../assets/login-background.jpg")}
            style={styles.img}
          />
        </View>

        <View style={styles.view3}>
          <View style={styles.form}>
            <TextInput
              placeholder="Enter your Email"
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              required={true}
            />
            {error.email ? (
              <Text style={styles.errortext}>{error.email}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Enter your Password"
              onChangeText={onChangePassword}
              value={password}
            />
            {error.password ? (
              <Text style={styles.errortext}>{error.password}</Text>
            ) : null}
          </View>
          <View style={styles.button}>
            <TouchableHighlight
              style={{
                backgroundColor: "black",
                width: 280,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 9,
                marginBottom: 20,
              }}
              onPress={handleLogin}
            >
              <Text
                style={{ color: "white", fontSize: 19, fontWeight: "bold" }}
              >
                Log in
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Don't have an account?</Text>
            <Text
              onPress={() => navigation.navigate("Signup")}
              style={{ fontWeight: "bold", marginLeft: 6, marginBottom: 40 }}
            >
              Sign up
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
  },
  title: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: "500",
  },
  view1: {
    alignItems: "center",
  },
  view23: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
  },
  img: {
    height: "60%",
    width: "100%",
  },
  view2: {
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    alignItems: "center",
  },

  input: {
    height: 44,
    width: 280,
    backgroundColor: "rgba(0, 122, 255, 0.1))",
    borderRadius: 9,
    paddingLeft: 20,
    margin: 7,
  },
  button: {
    marginTop: 10,
  },
  errortext: {
    color: "red",
  },
});
