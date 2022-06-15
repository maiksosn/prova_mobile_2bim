import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, SafeAreaView, Image,  ScrollView, TouchableOpacity} from "react-native"; 
import { FontAwesome } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel'
import { FontAwesome5, MaterialIcons, Ionicons, Fontisto} from '@expo/vector-icons';

  const carouselItems = [
    {
      titulo: 'General Practitioner', imagem: 'https://i.pinimg.com/originals/8f/29/79/8f29794f2a958c1ae1298291925a4da4.jpg',
    },

    {
      titulo: 'Internal Medicine', imagem:'https://cdn.iconscout.com/icon/free/png-256/pill-1919732-1620243.png',
    },

    {
      titulo: 'Pediatrician', imagem:'https://static.vecteezy.com/ti/vetor-gratis/p1/1932298-pacifier-baby-isolated-icon-vector-gr%C3%A1tis-vetor.jpg',
    },
];
  
  function renderItem({item}) {
    return (
      <View style={styles.carouselItemContainer}>
        <View style={styles.row}>
          <Image
            style={styles.carouselItemImage}
            source={{uri: `${item.imagem}`}}/>
          <Text style={styles.carouselItemTitle}>{item.titulo}</Text>       
        </View>
      </View>
    );
}

export default function Index({ navigation }) {

    const [selectedValue, setSelectedValue] = useState("java");
  //   function logout() {
  //     localStorage.clear();
  //      api.get('logout').then(response => {
  //        console.log(response);
  //        navigation.navigate('Login');
  //      }).catch(err =>{
  //        console.log(err)
  //      });
       
     
  //  }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', width:'200%', left: 40, height: '20%', marginLeft: -40}}>
                  <View>
                    <Text style={{marginLeft: 100, right: 90}}>Cidades/Estado</Text>
                    <View>               
                      <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Rio Branco, Acre" value="Rio Branco, Acre" />
                        <Picker.Item label="Maceió, Alogoas" value="Maceió, Alogoas" />
                        <Picker.Item label="Macapá, Amapá" value="Macapá, Amapá" />
                        <Picker.Item label="Manaus, Amazonas" value="Manaus, Amazonas" />
                        <Picker.Item label="Salvador, Bahia" value="Salvador, Bahia" />
                        <Picker.Item label="Fortaleza, Ceará" value="Fortaleza, Ceará" />
                        <Picker.Item label="Vitória, Espírito Santo" value="Vitória, Espírito Santo" />
                        <Picker.Item label="Goiânia, Goiás" value="Goiânia, Goiás" />
                        <Picker.Item label="São Luís, Maranhão" value="São Luís, Maranhão" />
                        <Picker.Item label="Cuiabá, Mato Grosso" value="Cuiabá, Mato Grosso" />
                        <Picker.Item label="Campo Grande, Mato Grosso do Sul" value="Campo Grande, Mato Grosso do Sul" />
                        <Picker.Item label="Belo Horizonte, Minas Gerais" value="Belo Horizonte, Minas Gerais" />
                        <Picker.Item label="Belém, Pará, Pará" value="Belém, Pará" />
                        <Picker.Item label="João Pessoa, Paraíba" value="Belém, Pará" />
                        <Picker.Item label="Curitiba, Paraná" value="Curitiba, Paraná" />
                        <Picker.Item label="Recife, Pernambuco" value="Recife, Pernambuco" />
                        <Picker.Item label="Teresina, Piauí" value="Teresina, Piauí" />
                        <Picker.Item label="Rio de Janeiro, Rio de Janeiro" value="Rio de Janeiro, Rio de Janeiro" />
                        <Picker.Item label="Natal, Rio Grande do Norte" value="Natal, Rio Grande do Norte" />
                        <Picker.Item label="Porto Alegre, Rio Grande do Sul" value="Porto Alegre, Rio Grande do Sul" />
                        <Picker.Item label="Porto Velho, Rondônia" value="Porto Velho, Rondônia" />
                        <Picker.Item label="Florianópolis, Santa Catarina" value="Florianópolis, Santa Catarina" />
                        <Picker.Item label="São Paulo, São Paulo" value="São Paulo, São Paulo" />
                        <Picker.Item label="Aracaju, Sergipe" value="Aracaju, Sergipe" />
                        <Picker.Item label="Palmas, Tocantins" value="Palmas, Tocantins" />
                      </Picker>            
                    </View>
                  </View>            
                  <FontAwesome style={{marginLeft:150}} name="bell" size={20} color="blue" />
                </View>
                          
              <View>
                <Text style={styles.label01}>Bem vindo, Maik </Text>
                <Text style={styles.label02}>Encontre seu médico aqui !</Text>
              </View>
                      
              <View>
                <Searchbar style={{marginTop: -10, backgroundColor: 'white', marginBottom: 10, marginTop: 20, marginLeft: 10,  marginRight: 10, borderRadius: 20}} placeholder="Pesquisar"/>
                  <Carousel layout={'default'}/>
              </View>
                
              <View style={styles.grid}>
                <View style={styles.row2}>
                  <Text style={styles.font}>Lembre-se de sempre verificar regularmente sua saúde</Text>
                    <View style={styles.screen}>
                      <FontAwesome5 style={{marginTop: 70, left: -15}} name="heartbeat" size={50} color="white" />
                    </View>
                  </View>            
              </View>
                
          <View style={styles.row}>
              <View style={styles.gridsecond}>
                <Text style={styles.font3}>Consultas</Text>
                <MaterialIcons style={{marginTop: 60,marginLeft: 30,}} name="chat" size={90} color="blue" />
              </View>          
              <View style={styles.gridspecialist}>
                <Text style={styles.font4}>Especialista</Text>
                    <Ionicons style={{ marginTop: 60, marginLeft: 30 }} name="compass" size={90} color="blue" />
              </View>           
          </View>   
          
      </ScrollView>
    </SafeAreaView>
           
  );  
}

const styles = StyleSheet.create({
  
  container: {flex: 1,width: '100%'},

  label01: {marginTop: 1,marginLeft: 9,color: 'grey'},
    
  label02: {fontWeight: 'bold',fontSize: 30,marginLeft: 8},
    
  grid: {backgroundColor: 'blue',elevation: 20,marginTop: 20,padding: 5,marginLeft: 10,width: '95%',height: 150,borderRadius: 20},
    
  backgroundButton: {backgroundColor: "white",borderColor: 'transparent',elevation: 20,shadowColor: 'black',},

  button: {justifyContent: 'center',borderWidth: 1,borderColor: '#DDD',paddingHorizontal: 10,marginBottom: 3,marginTop: 10,fontSize: 14,height: 45,width: '90%',textAlign: 'center',alignItems: 'center',marginLeft: 10,borderRadius: 1500},

  icondoctor: {marginTop: 2,marginLeft: 10},

  screen: {justifyContent: "center",alignItems: "center",},

  screen2: {justifyContent: "center",alignItems: "center",},

  imagem: {width: 60,paddingLeft: 10,height: 60,borderRadius: 1000,},

  font: {color: 'white',fontSize: 23,marginRight: 10},

  font2: {color: 'white',fontSize: 5,},

  font3: {color: 'white',fontSize: 20,marginLeft: 6,marginRight: 10},

  font4: {color: 'black',fontSize: 20,marginLeft: 12,marginRight: 10},
  
  gridsafe: {backgroundColor: 'red',elevation: 20,shadowColor: 'black',color: 'white',marginTop: 10,paddingTop: 10,paddingRight: 10,paddingLeft: 10,paddingBottom: 10,marginLeft: 20,width: 360,height: 80,marginRight: 20,borderRadius: 5,borderBottomWidth: 0},

  gridsecond: {backgroundColor: '#10a2e6',elevation: 20,shadowColor: 'black',color: 'white',marginTop: 30,paddingTop: 10,paddingRight: 10,paddingLeft: 10,paddingBottom: 10,width: 170,height: 300,marginLeft: 20,marginRight: 20,borderRadius: 5,borderBottomWidth: 0},

  gridspecialist: {backgroundColor: 'white',elevation: 20,shadowColor: 'black',color: 'white',marginTop: 30,paddingTop: 10,paddingRight: 10,paddingLeft: 10,paddingBottom: 10,width: 170,height: 300,marginRight: 50,borderRadius: 5,borderBottomWidth: 0},

  background: {flex: 1,left: 0,right: 0,top: 0,bottom: 0,},

  teste: {marginLeft: 8,marginTop: 50,color: 'grey'},

  select: {height: 45,width: 210, fontWeight: 'bold',borderBottomWidth: 0},

  row: {flexDirection:"row",marginTop: -5,},

  row2: {flexDirection:"row",},

  icon: {marginLeft: 150,color: 'grey'},

  carouselItemContainer: {backgroundColor: 'black',borderRadius: 4,elevation: 20,shadowColor: 'black',height: 40,marginLeft: 1000,marginBottom: 40,marginTop: 40},

  carouselItemImage: {width: '9%',height: 23,marginTop: 13,marginLeft: 5,borderRadius: 4,},

  carouselItemTitle: {fontSize: 13,marginTop: 15,marginLeft: 5,fontWeight: 'bold',color: 'black',}

});
  