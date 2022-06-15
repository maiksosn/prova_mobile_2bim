import React, {useState}from "react";
import { ScrollView,SafeAreaView, Text, StyleSheet, Image, TextInput, View, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../assets/logo.png';
import Login from "./Login";

export default function Cadastrar({navigation}) {

const [nome, setNome] = useState('');
const [sobrenome, setSobrenome] = useState('');
const [dtns, setDtns] = useState('');
const [cpf, setCpf] = useState('');
const [sexo, setSexo] = useState('');
const [senha, setSenha] = useState('');
const [confirma, setConfirma] = useState('');

function cadastrar(){

  alert('Cadastrado com sucesso!')
  navigation.navigate('Login')
}



  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#0E5CBB', '#2E75E7']}
        style={styles.background}>
          <ScrollView style={styles.scroll}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input}
            keyboardType="nome-address"
            placeholder="Nome"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setNome}
            required={true}
          ></TextInput>
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Sobrenome</Text>
          <TextInput style={styles.input}
            keyboardType="visible-password"
            placeholder="Sobrenome"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setSobrenome}
          ></TextInput>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Data Nascimento</Text>
          <TextInput style={styles.input}
            keyboardType="visible-password"
            placeholder="DataNascimento"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setDtns}
          ></TextInput>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>CPF</Text>
          <TextInput style={styles.input}
            keyboardType="visible-password"
            placeholder="Digite seu cpf"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setCpf}
          ></TextInput>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Sexo</Text>
          <TextInput style={styles.input}
            keyboardType="visible-password"
            placeholder="Sexo"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setSexo}
          ></TextInput>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input}
            keyboardType="visible-password"
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setSenha}
          ></TextInput>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Confirmação de senha</Text>
          <TextInput style={styles.input}
            keyboardType="visible-password"
            placeholder="Digite sua senha novamente"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setConfirma}
          ></TextInput>
         </View>

        <TouchableOpacity style={[styles.button,]} onPress={cadastrar}>
          <Text style={styles.text}>Cadastrar</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
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
    width: '70%',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  label: {
    color: '#fff',
    fontSize: 10,
    backgroundColor: "#4DCFE0",
    paddingHorizontal: 15,
    paddingVertical: 0,
    lineHeight: 20,
    borderRadius: 5,
    zIndex:10,
    marginLeft: 10,
  },
  input: {
    marginTop:-10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 14,
    height: 45,
    width: '100%',
    borderRadius: 5
  }, 
  button: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 14,
    height: 45,
    width: '70%',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  backgroundButton: {
    backgroundColor: "#4DCFE0",
    borderColor : 'transparent',
    marginTop: 30,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#fff',
  },
  esqueci: {
    position: 'absolute',
    bottom: 10,
  },

  scroll: {
    marginHorizontal: 20,
    left: 0,
        
  }

});
