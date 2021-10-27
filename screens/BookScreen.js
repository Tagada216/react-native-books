import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import BookList from '../components/BookList';
import axios from 'axios';




export default function BookScreen({navigation}) {
  const searchBook =  () => {
    if(!userSearch !== ""){
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userSearch}`)
      .then((response) =>{
        
        setbookList(response.data.items)
        console.log(response.data.items)
      } )
      .catch((err) => {
        console.log(err)
      })
    }
  
  }
  useEffect(() => {
    
    return () => {
      
    }
  }, [])

  let [fontsLoaded] = useFonts(
    {'Bebas': require('../assets/fonts/Bebas.ttf')}
  )

  const [userSearch, setUserSearch]=useState("");

  const [bookList, setbookList]=useState([]);
  


  if(!fontsLoaded){
    return(
      <View>
        <Text>Police en cours de chargement</Text>
      </View>
    )
  }else{

    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.titlePage} >Mes Livres</Text>
        </View>
        <FlatList 
        data={bookList}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate("BookDetails",{book : item.id}) }>
            <BookList bookTitle={item.volumeInfo.title} imgUrl={ item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150"  } ></BookList>
          </TouchableOpacity> 
        )}
        />
        
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder='Rechercher un livre' value={userSearch} onChangeText={text =>setUserSearch(text) } />
          
          <TouchableOpacity onPress={searchBook} >
            <FontAwesome style={styles.searchIcon} name="search" size={34} color="black" />
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  searchContainer:{
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor:'white'
  },  
  searchIcon:{
    marginRight: 20,
    marginBottom: 20
  },  
  headerContainer:{
    
  },
  titlePage:{
    fontSize: 38,
    fontWeight: 'bold',
    marginLeft :20,
    fontFamily: 'Bebas'
  },
  searchInput:{
    borderColor: 'black',
    borderWidth: 2,
    borderRadius:5,
    marginLeft: 10,
    marginRight: 5,
    width: 350,
    height: 34,
    padding:10,
    fontSize:22,
    marginBottom: 20,
    backgroundColor:'white'
  }
});
