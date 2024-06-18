import React, {useState, useEffect, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image
} from 'react-native';
import axios from 'axios'
import {ip} from "../App"




const Item = ({item}) => (
  
  <View style={[styles.item, styles.shadowProp]}>
   <Image source={{ uri: item.image}}
   style={{  width: 65,
    height: 65,
    borderRadius: 150 / 2,
    overflow: "hidden",
  }}
   />
  <View style={{flex : 1, flexDirection : 'column', paddingTop : 8 }}>
    <Text style={styles.title}>{item.food}</Text>
    <Text>{(item.Datetime).slice(0, (item.Datetime).length - 3 )}</Text></View>
  </View>
);

const App = () => {
  const [history, getHistory] = useState([])

  const fetchData = async () => {
    const host = ip.concat("history/");
    try {
      const response = await axios.get(host);
      getHistory(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error); 
    }
  };

  useFocusEffect(
    
    React.useCallback(() => {
      
  
      fetchData();
   
      return () => {
        getHistory([])
      };
    }, []))
  
 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerText}>Logbook</Text>
      </View>
      <View style={{marginTop : 12, marginBottom : 150}}>
      <FlatList
        data={history}
        renderItem={({item}) => <Item item={item}/>}

      /></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  item: {
    flex : 1,
    flexDirection : 'row',
    backgroundColor: 'white',
    padding: 20,
    gap:30,
   
        marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
 
    marginVertical: 10,
    justifyContent: "center",
  },
  header: {


    flexDirection: "row",


    paddingTop: 10,

    justifyContent : "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight : '500',
    paddingBottom : 6
  },
  headerText: {
    paddingTop : 45,
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
});

export default App;