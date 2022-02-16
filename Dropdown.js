import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Dropdown = () => {
    return (
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
           items={[
                { label: "Women", value: "F" },
                { label: "Men", value: "M" },
            ]}
        />
        )
}
    
export default Dropdown;

const styles = StyleSheet.create ({

    dropdown: {
        height: 88,
    },

    itemDropdown: {
        height: 44, 

    }
})
