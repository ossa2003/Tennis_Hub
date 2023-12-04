import React from 'react'
import { View, Text, Button } from 'react-native'
import { useState } from 'react'
import { StyleSheet } from 'react-native'

const Countnumber = () => {
    const [number, setNumber] = useState(0)

    return (
        <View>
            <Text style={styles.text}>{number}</Text>
            <View style={styles.Button}>
                <Button title="Count" onPress={() => setNumber(number + 5)} />
            </View>
            <View style={styles.Button}>
                <Button title="Reset" onPress={() => setNumber(0)} color="red" />
            </View>
        </View>
    )
}

export default Countnumber

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        textAlign: 'center',
        marginVertical: 5,
        fontWeight: 'bold'
    },
    Button: {
        marginVertical: 5,
        marginHorizontal: 100,
    }
})