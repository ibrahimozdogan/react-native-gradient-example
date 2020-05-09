import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from './src/Components/Background';

export default function App () {
    return (
        <Background>
            <View style={styles.container}>
                <Text>Gradient example in react-native!</Text>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
