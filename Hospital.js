import React from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'


const Hospital = props => {
    const dummyData = [
        {
            id:'1',
            title: 'Karolinska Hospital',
            phoneno: '0706942422',
        },
        {
            id:'2',
            title: 'Dandryd Hospital',
            phoneno: '0706942422',
        },
        {
            id:'3',
            title: 'Child Hospital',
            phoneno: '0706942422',
        },
        {
            id:'4',
            title: 'Södra Hospital',
            phoneno: '0706942422',
        },
    ]
    return (
       <FlatList 
       data={dummyData}
       ListHeaderComponent = {
           <View style = {styles.listHeader}>
               <Text> ... </Text>
               <Text>Hospital Name</Text>
               <Text>Phone no</Text>
           </View>
       }
       renderItem={(itemList) =>
        <TouchableOpacity style = {styles.listRow} onPress= {() => 
        props.navigation.navigate("HospitalDetailes", {hospital : itemList.item})}>
            <Text> ... </Text>
            <Text>{itemList.item.title}</Text>
            <Text>{itemList.item.phoneno}</Text>
        </TouchableOpacity>
        
      }
       />
    )
}
export default Hospital;


const styles = StyleSheet.create ({
    listRow: {
        flexDirection: 'row',
        padding:10,
        margin: 5, 
        backgroundColor: '#d4fb79',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    listHeader :{
        flexDirection: 'row',
        padding:10,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        
    },
})