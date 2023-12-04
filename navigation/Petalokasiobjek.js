import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App'
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Callapi from '../Callapi';

const Tab = createBottomTabNavigator();

// Form input dari github pages
const forminput = 'https://ossa2003.github.io/pgpbl-12/'

// Peta web dari github pages
const webmap = 'https://ossa2003.github.io/pgpbl-12/map.html'

function MapScreen() {
    return (
        <WebView
            source={{ uri: webmap }}
        />
    );
}

function DataRaket() {
    return (
        <View>
            <Callapi />
        </View>
    );
}

function AddDataScreen() {
    return (
        <WebView
            source={{ uri: forminput }}
        />
    );
}

function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Map" component={MapScreen}
                    options={{
                        tabBarLabel: 'Mapp',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="map" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Data Raket" component={DataRaket}
                    options={{
                        tabBarLabel: 'Data Raket',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="table-tennis" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Add Data" component={AddDataScreen}
                    options={{
                        tabBarLabel: 'Add Data',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="calendar-plus" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Profile Screen" component={ProfileScreen}
                    options={{
                        tabBarLabel: 'About App',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="address-card" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 300,
        resizeMode: 'stretch'
    },
    listitems: {
        padding: 20,
        alignItems: 'center'
    },
    caption: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: '#ECF4D6',
    },
});