import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Page</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { name: 'Full Stack Dev', age: 25, email: 'test@test.com' })}>
                <Text>Redirect To Details</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home