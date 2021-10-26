import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function BookList({imgUrl, bookTitle}) {
    return (
        <View style={styles.bookContainer}>
            <Image style={styles.bookPicture} source={{uri: imgUrl}}/>
            <Text style={styles.bookTitle }> {bookTitle} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bookContainer:{
        paddingLeft: 30,
        flexDirection: 'row'
    },
    bookPicture:{
        height:192,
        width:128
    },
    bookTitle:{
        paddingLeft:20,
        alignSelf:'center',
        fontSize: 22,
    }
})