import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App'
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();

const webmap = require('../Peta/map.html');

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>My Maps</Text>
            <View style={styles.listitems}>
                <Image source={require('../Peta/petaLogo.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../Peta/petaLogo.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../Peta/petaLogo.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../Peta/petaLogo.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../Peta/petaLogo.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../Peta/petaLogo.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
            </View>
        </ScrollView>
    );
}

function SettingsScreen() {
    return (
        <WebView
            source={webmap}
            style={{ marginTop: 20 }}
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
function MahasiswaScreen() {
    return (
        <View>
            <Getjsonfile />
        </View>
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Map" component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="map-pin" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="users" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Mahasiswa" component={MahasiswaScreen}
                    options={{
                        tabBarLabel: 'Mahasiswa',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="user-graduate" color={color} size={size} />
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
    }
});