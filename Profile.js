import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Switch, Button,  
    TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

import Card from './Components/Card';
import Dropdown from './Components/Dropdown';
import CustomInput from './Components/CustomInput';

const initialState = {
name : {
    value : '',
    isValid : false,
    errorMessage: 'Insert Name',
},
age: {
    value : '',
    isValid : false,
    errorMessage: 'Insert Age',
},

    isEnable : false,
    gender : "F"
}
const ON_INPUT_CHANGE = "onInputChange";
const reducer = (state, action) => {
    switch (action.type) {
        case ON_INPUT_CHANGE:
            return { ...state, [action.tag]: action.changedValue };
        default:
            break;
            
    }
}
const Profile = props => {
    const [state, dispatch] = useReducer (reducer, initialState);

    const required = (value, tag) => {
        var isValid = value.length != 0;
        dispatch ({type: ON_INPUT_CHANGE, tag : tag , changedValue : {...state[tag], value : value , isValid: isValid}})
    }

    const valueChange = (value, tag) => {
        dispatch ({type :ON_INPUT_CHANGE,tag: tag, changedValue : value})
    }

    const sumbitForm = () => {
        if (!(state.name.isValid && state.age.isValid)){
            Alert.alert("Error", "Insert form information", 
            [{text: "Confirm!", onPress:()=> console.log("false"), style:'destructive'}]);
        }
    {
    console.log ("false");
        return;
    }   
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style= {styles.container}>

        <Card style= {styles.form}>
            <CustomInput placeholder = "Name" style= {styles.textInput} value={state.name.value} onChangeText={text=> required (text, "name")}/>
                {!state.name.isValid && <Text style={styles.errorText}>{state.name.errorMessage}</Text>}

            <CustomInput placeholder = "Age" keyboardType="numeric" style= {styles.textInput} 
                value={state.age.value} onChangeText={text => required(text, "age")} />
                 {!state.age.isValid && <Text style={styles.errorText}>{state.age.errorMessage} </Text>}
            <View style = {styles.genderContainer}>
                 <Switch value={state.isEnable} onValueChange={value => valueChange (value, "isEnable" )}/>  
            <Text> Parents </Text>
         
            </View>
            
            <Text style= {{textAligh:'center', margin: 10}}> Gender </Text>
            <Dropdown style = {styles.dropdown} itemStyle= {styles.itemDropdown}
            selectedValue = {state.gender}
            onValueChange = {value => valueChange (value, "gender")}
            />    
            <Dropdown/>
             <Button title="Save" onPress = {sumbitForm}/>
        </Card>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default Profile;

const styles = StyleSheet.create ({
    container:
    {
        alignItems: 'center',
    },
    form : {
        width: '80%',
    }, 
    textInput: {
        textAlign: 'center',
        
    },
    
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    
    },
    errorText:{
        color: 'red',
        textAlign: 'center',
        
    }, 
    dropdown: {
        height: 88,
    },

    itemDropdown: {
        height: 44, 

    }

}


);

