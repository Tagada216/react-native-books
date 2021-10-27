import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function BookDetails({route}) {
    const {book} = route.params;
    const [bookDetails, setBookDetails] =useState({})
    const [load, setload] = useState(false)

    useEffect(() => {

        fetch(`https://www.googleapis.com/books/v1/volumes/${book}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setBookDetails(json)
            setload(true)
        })
    
    }, [])
    if(!load){
        return(
            <Text>Chargement des données...</Text>
        )
    }else{
        return (
                    <View style={styles.bookContainer}>
                        <Image style={styles.bookImage} source={{uri:bookDetails.volumeInfo.imageLinks ? bookDetails.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150"}}/>
                        <Text style={styles.bookTitle}>{bookDetails.volumeInfo.title}</Text>
                         {bookDetails.volumeInfo.authors.map((author) => (
                             <Text>{author}</Text>
                         ))}
                        <Text>{bookDetails.volumeInfo.description}</Text>
                         <Text>{bookDetails.volumeInfo.publishedDate}</Text> 
                    </View>
        )
    }

}

const styles = StyleSheet.create({
    bookContainer:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20
    },
    bookImage:{
        height:192,
        width:128
    },
    bookTitle:{
        marginTop: 18,
        fontSize: 22,
        fontWeight:'bold'
    }
})