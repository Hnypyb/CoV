import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} 
from 'react-native'

const Dashboard = props => {
    return (
        <View style= {styles.container}>
            <View style = {styles.item}>
                <TouchableOpacity style={[styles.touchable, {backgroundColor: 'lightgreen'}]} onPress = {() => props.navigation.navigate ("Hospital")}>
                <Text>"Hospitals"</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.item}>
            <TouchableOpacity style={[styles.touchable, {backgroundColor: 'yellow'}]} onPress = {() => props.navigation.navigate ("Pharmacy")}>
                <Text>"Pharmacy"</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.item}>
            <TouchableOpacity style={[styles.touchable, {backgroundColor: 'lightblue'}]} onPress = {() => props.navigation.navigate ("News")}>
                <Text>"News"</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.item}>
            <TouchableOpacity style={[styles.touchable, {backgroundColor: 'lightgrey'}]} onPress = {() => props.navigation.navigate ("Patient")}>
                <Text>"Patient"</Text>
                </TouchableOpacity>
                </View>
            <View style = {styles.item}>
            <TouchableOpacity style={[styles.touchable, {backgroundColor: 'pink'}]} onPress = {() => props.navigation.navigate ("Gallery")}>

                <Text>"Gallery"</Text>
                </TouchableOpacity>

            </View>
            <View style = {styles.item}>
            <TouchableOpacity style={[styles.touchable, {backgroundColor: 'orange'}]} onPress = {() => props.navigation.navigate ("Profile")}>

                <Text>"Profile"</Text>
                </TouchableOpacity>

                </View>
        </View>
    )
} 
export default Dashboard;

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        flexWrap: 'wrap',
    
    },
    item : {
        height: 200,
        width: "50%",
        padding: 10,

    },
    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        flex: 1,
        borderRadius: 10,

    },
});

