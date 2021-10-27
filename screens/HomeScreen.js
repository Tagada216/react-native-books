import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { CommonActions } from '@react-navigation/native';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: 'https://icon-library.com/images/book-app-icon/book-app-icon-8.jpg'}} />
            <Text>Ma super App de bouquin</Text>
            <Button title='Commencer' onPress={ () =>
                navigation.dispatch(
                    CommonActions.navigate({
                      name: 'BookScreen',
                    }))
            }></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        height: 100,
        width: 100
    }
})