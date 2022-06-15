import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import logo from "../assets/logo.png";
import Login from "./Login";

export default function Recover({ navigation }) {6
  const [email, setEmail] = useState("");

  function recover() {
    alert("Foi enviado um e-mail para recuperar sua senha...");
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#0E5CBB", "#2E75E7"]} style={styles.background}>
        <ScrollView style={styles.scroll}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.formGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              keyboardType="nome-address"
              placeholder="E-mail"
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setEmail}
              required={true}
            ></TextInput>
          </View>

          <TouchableOpacity style={[styles.button]} onPress={recover}>
            <Text style={styles.text}>Recuperar senha</Text>
          </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.backgroundButton]} onPress={()=> {navigation.navigate('Login')}}>
          <Text style={styles.text}>Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  formGroup: {
    width: "70%",
    justifyContent: "center",
    alignItems: "baseline",
  },
  label: {
    color: "#fff",
    fontSize: 10,
    backgroundColor: "#4DCFE0",
    paddingHorizontal: 15,
    paddingVertical: 0,
    lineHeight: 20,
    borderRadius: 5,
    zIndex: 10,
    marginLeft: 10,
  },
  input: {
    marginTop: -10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 14,
    height: 45,
    width: "100%",
    borderRadius: 5,
  },
  button: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 14,
    height: 45,
    width: "70%",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  backgroundButton: {
    backgroundColor: "#4DCFE0",
    borderColor: "transparent",
    marginTop: 30,
  },
  text: {
    backgroundColor: "transparent",
    color: "#fff",
  },
  esqueci: {
    position: "absolute",
    bottom: 10,
  },

  scroll: {
    marginHorizontal: 20,
    left: 0,
  },
});
